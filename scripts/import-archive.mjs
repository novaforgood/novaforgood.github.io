#!/usr/bin/env node
// Rebuilds src/data/archiveProjects.ts and public/assets/archive/** from the
// last Gatsby build of the old site, which is commit 6ce137d on the npo remote.
// The content originated in Contentful; this build is the only surviving copy.
import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import { convertBody } from './lib/convert.mjs'

const COMMIT = '6ce137d'
const OUT_DATA = 'src/data/archiveProjects.ts'
const OUT_IMAGES = 'public/assets/archive'
const MAX_WIDTH = 1600
const JPEG_QUALITY = 80

// Contentful stored only nonprofit names. These URLs come from the existing
// moreProjects list; globallives.org and risc.uchicago.edu come from links
// inside those two projects' own case-study bodies.
const NONPROFIT_URLS = {
  'inner-city-visions': 'https://innercityvisions.org/',
  'la-waterkeeper': 'https://www.lawaterkeeper.org/',
  'alzheimers-san-diego': 'https://www.alzsd.org/',
  'project-ropa': 'https://www.projectropa.org/',
  'survival-kit-distribution': 'https://www.thegivingspirit.org/',
  'global-lives-project': 'https://globallives.org/',
  'risc': 'https://risc.uchicago.edu/',
  'oppia': 'https://www.oppia.org/',
  'gladeo': 'https://www.gladeo.org/',
  'swipe-out-hunger': 'https://www.swipehunger.org/',
  'westside-food-bank': 'http://www.westsidefoodbankca.org/',
  'friends-of-semel': 'https://www.friendsofsemelinstitute.org/',
  'beloved-beauty': 'https://www.belovedbeauty.org/',
  // iidecide has no public site — it had none in moreProjects either.
}

// The archive's nonprofit names carry artifacts from the CMS entry titles.
const NONPROFIT_NAME_FIXES = {
  'L.A. Waterkeeper Logo': 'L.A. Waterkeeper',
}

const git = (args) => execFileSync('git', args, { maxBuffer: 256 * 1024 * 1024 })
const gitText = (path) => git(['show', `${COMMIT}:${path}`]).toString('utf8')

function slugify(name) {
  return basename(name, extname(name)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function imageSize(path) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', path]).toString()
  return {
    width: Number(out.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0),
    height: Number(out.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0),
  }
}

// True when a PNG can become a JPEG without losing anything: either it has no
// alpha channel at all, or every pixel in it is fully opaque. The old site's
// cover art has real transparency (min alpha 0) and must stay PNG, while its
// screenshots merely declare an unused alpha channel.
function alphaIsUsed(path) {
  const probe = `
from PIL import Image
im = Image.open(${JSON.stringify(path)})
if im.mode in ('RGBA', 'LA'):
    print('used' if min(im.getchannel('A').getdata()) < 255 else 'unused')
else:
    print('unused')
`
  try {
    // Pillow writes deprecation warnings to stderr; discard them so only the
    // verdict reaches stdout.
    return execFileSync('python3', ['-c', probe], { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim() === 'used'
  } catch {
    return true // If we cannot tell, keep the original format.
  }
}

// Writes one image and returns its web path plus final dimensions.
// Three passes, in order of how much they actually save here:
//   1. Cap dimensions at MAX_WIDTH (helps the 5000px cover art).
//   2. Re-encode as JPEG when transparency is absent or unused — this is the
//      big win: these PNGs are barely compressed (one was 2.6MB at 750px).
//   3. GIFs are copied untouched; sips cannot read their frames, and
//      re-encoding would flatten the animation.
function writeImage(slug, publicURL, label) {
  const source = publicURL.replace(/^\//, '')
  let ext = extname(source).toLowerCase()
  let name = `${slugify(label || basename(source))}${ext}`
  const dir = join(OUT_IMAGES, slug)
  mkdirSync(dir, { recursive: true })
  let dest = join(dir, name)
  writeFileSync(dest, git(['show', `${COMMIT}:${source}`]))

  if (ext !== '.gif') {
    if (imageSize(dest).width > MAX_WIDTH) {
      execFileSync('sips', ['-Z', String(MAX_WIDTH), dest], { stdio: 'ignore' })
    }

    if (ext === '.png' && !alphaIsUsed(dest)) {
      const jpegName = `${basename(name, ext)}.jpg`
      const jpegDest = join(dir, jpegName)
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(JPEG_QUALITY), dest, '--out', jpegDest], { stdio: 'ignore' })
      rmSync(dest)
      name = jpegName
      dest = jpegDest
      ext = '.jpg'
    }
  }

  return { src: `/assets/archive/${slug}/${name}`, ...imageSize(dest) }
}

const index = JSON.parse(gitText('page-data/work/page-data.json'))
const indexNodes = index.result.data.allContentfulProjectCaseStudy.nodes

rmSync(OUT_IMAGES, { recursive: true, force: true })

const projects = indexNodes.map((indexNode, position) => {
  const slug = indexNode.slug
  const page = JSON.parse(gitText(`page-data/work/${slug}/page-data.json`))
  const node = page.result.data.allContentfulProjectCaseStudy.nodes[0]

  const assetsById = {}
  for (const ref of node.bodyArticle?.references ?? []) {
    const url = ref.localFile?.publicURL
    if (!url) continue
    const { src, width, height } = writeImage(slug, url, ref.title)
    assetsById[ref.contentful_id] = {
      src,
      alt: ref.title || node.name,
      ...(ref.title ? { caption: ref.title } : {}),
      width,
      height,
    }
  }

  const rawNonprofit = node.nonprofits?.[0]?.name ?? node.name
  const cover = indexNode.preview?.localFile?.publicURL
    ? writeImage(slug, indexNode.preview.localFile.publicURL, `${slug}-cover`)
    : undefined

  return {
    slug,
    name: node.name,
    description: node.description?.description ?? '',
    nonprofit: {
      name: NONPROFIT_NAME_FIXES[rawNonprofit] ?? rawNonprofit,
      ...(NONPROFIT_URLS[slug] ? { url: NONPROFIT_URLS[slug] } : {}),
    },
    technology: (node.technology ?? []).map(item => item.name),
    team: (node.team ?? []).map(item => item.name),
    ...(cover ? { cover } : {}),
    body: convertBody(node.bodyArticle?.raw ?? '{"content":[]}', assetsById),
    order: position + 1,
  }
})

writeFileSync(OUT_DATA, `// Generated by scripts/import-archive.mjs from git ${COMMIT}. Do not edit by hand.
import type { ArchiveProject } from './archive'

export const archiveProjects: ArchiveProject[] = ${JSON.stringify(projects, null, 2)}
`)

console.log(`wrote ${projects.length} projects to ${OUT_DATA}`)
