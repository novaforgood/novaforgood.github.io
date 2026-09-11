# Archive Project Pages + App.tsx Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the 785-line `App.tsx` into focused modules, then publish the 14 archived Nova case studies recovered from an old deployed build as real pages under `/work/<slug>`.

**Architecture:** Phase 1 moves existing code into `router.tsx`, `data/`, `components/`, and `pages/` with zero behavior change, verified by diffing built output. Phase 2 adds a committed Node script that reads the old Gatsby build out of git commit `6ce137d`, converts Contentful rich text into a small typed `Block[]` structure, optimizes and copies images, and emits `src/data/archiveProjects.ts`. A ~60-line renderer turns those blocks into pages.

**Tech Stack:** React 19 + TypeScript + Vite. No router library (hand-rolled `usePath`/`go`). No CSS framework. Converter tests use `node --test` (built into Node, not a new dependency). Image resizing uses `sips` (ships with macOS).

**Spec:** `docs/superpowers/specs/2026-09-11-archive-projects-design.md`

## Global Constraints

- Archived prose is reproduced **verbatim**. Never invent, rewrite, summarize, or extend body copy, team names, or tech lists. A project missing a section simply has no such section.
- No new runtime dependencies. `package.json` dependencies stay as they are.
- `src/styles.css` is not split. Archive styles are appended as a new section at the end.
- `data/` modules import nothing from `components/` or `pages/` — no import cycles.
- Phase 1 changes no rendered output. Built CSS and `index.html` must match the pre-refactor build apart from asset hashes.
- Source of archived content is git commit `6ce137d` only. No network calls, no Contentful account.
- Images are written to `public/assets/archive/<slug>/` and named per slug — two projects both ship an asset named `image.png`.
- Existing routes, copy, and visual design outside the archive feature stay untouched.
- Commit after each task. Do not `git push` — the user pushes explicitly.

## File Structure

**Phase 1 — created by moving existing code:**

| File | Responsibility |
|---|---|
| `src/router.tsx` | `usePath`, `go`, `Link` — client-side routing primitives |
| `src/data/projects.ts` | `Project` type + the 3 current projects |
| `src/data/site.ts` | `landingPhotos`, `landingPartners`, `teamPhotos`, `teamPortraits`, `boardMembers`, `generalMembers`, `alumniMembers`, `moreProjects` |
| `src/components/Logo.tsx` | `Logo`, `NOVA_LOGO_PATHS` |
| `src/components/SocialIcon.tsx` | `SocialIcon` |
| `src/components/Header.tsx` | `Header` |
| `src/components/Footer.tsx` | `Footer` |
| `src/components/AppShell.tsx` | `AppShell` — header + skeleton gate + footer |
| `src/components/PhotoStrip.tsx` | `PhotoStrip`, `carouselSpeedForWidth` |
| `src/components/NetworkSection.tsx` | `NetworkSection` |
| `src/components/CtaSection.tsx` | `CtaSection` |
| `src/pages/*.tsx` | One file per page, JSX moved verbatim |
| `src/App.tsx` | Routing only |

**Phase 2 — new:**

| File | Responsibility |
|---|---|
| `src/data/archive.ts` | `Span`, `Block`, `ArchiveProject` types |
| `src/data/archiveProjects.ts` | Generated — 14 projects as data |
| `scripts/lib/convert.mjs` | Pure functions: Contentful rich text → `Block[]` |
| `scripts/lib/convert.test.mjs` | `node --test` unit tests for the converter |
| `scripts/import-archive.mjs` | Reads git, writes data + images |
| `src/components/ArchiveBody.tsx` | Renders `Block[]` |
| `src/pages/ArchiveProjectPage.tsx` | Hero + meta strip + body + nav |

---

### Task 1: Baseline snapshot and `router.tsx`

**Files:**
- Create: `src/router.tsx`
- Modify: `src/App.tsx` (remove `usePath`, `go`, `Link`; import them instead)

**Interfaces:**
- Consumes: nothing
- Produces: `usePath(): string`, `go(path: string): void`, `Link({ href, children, className, onClick, ...props })` — all from `src/router.tsx`

- [ ] **Step 1: Capture the baseline build**

```bash
cd /Users/jt/Desktop/Nova26-7
npm run build
cp dist/index.html /tmp/baseline-index.html
cp dist/assets/index-*.css /tmp/baseline.css
```

- [ ] **Step 2: Create `src/router.tsx`**

Move lines 189–222 of `App.tsx` verbatim into a new file, adding the `React` type import the `Link` props need:

```tsx
import { useEffect, useState } from 'react'

export function usePath() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return path
}

export function go(path: string) {
  if (`${window.location.pathname}${window.location.hash}` === path) return
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  const hash = path.split('#')[1]
  if (hash) {
    requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView())
  } else {
    window.scrollTo({ top: 0 })
  }
}

export function Link({ href, children, className, onClick, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isInternal = href.startsWith('/')
  return <a className={className} href={href} onClick={(event) => {
    if (isInternal) {
      event.preventDefault()
      go(href)
    }
    onClick?.(event)
  }} {...props}>{children}</a>
}
```

- [ ] **Step 3: Delete those definitions from `App.tsx` and import instead**

Remove the `usePath`, `go`, and `Link` definitions. Add to the import block at the top:

```tsx
import { usePath, Link } from './router'
```

`go` is not referenced directly in `App.tsx` — only through `Link` — so do not import it there.

- [ ] **Step 4: Typecheck and build**

Run: `npx tsc -b && npm run build`
Expected: no errors.

- [ ] **Step 5: Prove nothing rendered changed**

```bash
diff /tmp/baseline.css dist/assets/index-*.css && echo "CSS IDENTICAL"
diff <(sed 's/index-[A-Za-z0-9_-]*\.\(js\|css\)/index-HASH.\1/g' /tmp/baseline-index.html) \
     <(sed 's/index-[A-Za-z0-9_-]*\.\(js\|css\)/index-HASH.\1/g' dist/index.html) && echo "HTML IDENTICAL"
```

Expected: both lines print IDENTICAL. If not, the move changed behavior — stop and fix before continuing.

- [ ] **Step 6: Commit**

```bash
git add src/router.tsx src/App.tsx
git commit -m "refactor: extract routing primitives into router.tsx"
```

---

### Task 2: Data modules and dead-code removal

**Files:**
- Create: `src/data/projects.ts`, `src/data/site.ts`
- Modify: `src/App.tsx`, `src/Skeletons.tsx:1`

**Interfaces:**
- Consumes: nothing
- Produces: `Project` type and `projects: Project[]` from `src/data/projects.ts`; `landingPhotos`, `LandingPhoto`, `landingPartners`, `teamPhotos`, `teamPortraits`, `boardMembers`, `generalMembers`, `alumniMembers`, `moreProjects` from `src/data/site.ts`

- [ ] **Step 1: Create `src/data/projects.ts`**

Move the `Project` type (App.tsx lines 7–26) and the `projects` array (lines 28–112) verbatim, exporting both:

```ts
export type Project = { /* ...exact fields from App.tsx lines 8-25... */ }

export const projects: Project[] = [ /* ...all three projects, unchanged... */ ]
```

Copy the contents exactly — including the curly apostrophes in the prose. Do not retype them by hand; cut and paste.

- [ ] **Step 2: Create `src/data/site.ts`**

Move verbatim from `App.tsx`: `moreProjects` (114–128), `teamPhotos` (144), `teamPortraits` (145–148), the `LandingPhoto` type and `landingPhotos` (149–165), `landingPartners` (166–183), `boardMembers` (490–494), `generalMembers` (496–506), `alumniMembers` (508–522). Export each.

- [ ] **Step 3: Delete dead code**

Delete `partnerLogos` (App.tsx lines 130–143) and the `ProjectCard` component (lines 427–434). Confirm they are unreferenced first:

```bash
grep -rn "partnerLogos\|ProjectCard" src
```

Expected: only their own definitions. If anything else appears, do not delete — report it.

- [ ] **Step 4: Update imports**

In `App.tsx`, add:

```tsx
import { projects, type Project } from './data/projects'
import { moreProjects, teamPhotos, teamPortraits, landingPhotos, landingPartners, boardMembers, generalMembers, alumniMembers, type LandingPhoto } from './data/site'
```

Remove the now-duplicated `export type Project` from `App.tsx`. In `src/Skeletons.tsx`, change line 1 to:

```tsx
import type { Project } from './data/projects'
```

- [ ] **Step 5: Typecheck, build, and verify output unchanged**

```bash
npx tsc -b && npm run build
diff /tmp/baseline.css dist/assets/index-*.css && echo "CSS IDENTICAL"
```

Expected: no type errors, CSS identical.

- [ ] **Step 6: Commit**

```bash
git add src/data src/App.tsx src/Skeletons.tsx
git commit -m "refactor: move site data into data modules, drop dead components"
```

---

### Task 3: Shared components

**Files:**
- Create: `src/components/Logo.tsx`, `SocialIcon.tsx`, `Header.tsx`, `Footer.tsx`, `AppShell.tsx`, `PhotoStrip.tsx`, `NetworkSection.tsx`, `CtaSection.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `Link` from `src/router`; `landingPartners`, `LandingPhoto` from `src/data/site`
- Produces: `Logo`, `SocialIcon({ name: 'instagram' | 'github' })`, `Header`, `Footer`, `AppShell({ children, skeleton })`, `PhotoStrip({ photos, widths, stripId, repeatsPerHalf, speed?, className? })`, `carouselSpeedForWidth(width: number): number`, `NetworkSection`, `CtaSection`

- [ ] **Step 1: Move each component to its own file**

Cut verbatim from `App.tsx`, adding the imports each file needs:

| New file | From `App.tsx` lines | Needs |
|---|---|---|
| `components/Logo.tsx` | 224–253 (`NOVA_LOGO_PATHS`, `Logo`) | `Link` |
| `components/SocialIcon.tsx` | 255–258 | — |
| `components/Header.tsx` | 260–275 | `Link`, `Logo`, `Menu`/`X`/`ArrowUpRight` |
| `components/Footer.tsx` | 277–292 | `Link`, `Logo`, `SocialIcon` |
| `components/AppShell.tsx` | 294–303 | `Header`, `Footer`, `useImagesLoaded`, `useRef` |
| `components/PhotoStrip.tsx` | 305–309 + 387–410 | `LandingPhoto` |
| `components/NetworkSection.tsx` | 436–443 | `landingPartners` |
| `components/CtaSection.tsx` | 445–447 | `Link`, `ArrowUpRight` |

Export every symbol. `carouselSpeedForWidth` lives with `PhotoStrip` and must be exported — `LandingPage` uses it.

- [ ] **Step 2: Import them in `App.tsx`**

```tsx
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppShell } from './components/AppShell'
import { PhotoStrip, carouselSpeedForWidth } from './components/PhotoStrip'
import { NetworkSection } from './components/NetworkSection'
import { CtaSection } from './components/CtaSection'
```

`Logo` and `SocialIcon` are used only by `Header`/`Footer`, so `App.tsx` does not import them.

- [ ] **Step 3: Typecheck, build, verify**

```bash
npx tsc -b && npm run build
diff /tmp/baseline.css dist/assets/index-*.css && echo "CSS IDENTICAL"
```

- [ ] **Step 4: Commit**

```bash
git add src/components src/App.tsx
git commit -m "refactor: extract shared layout components"
```

---

### Task 4: Pages, and `App.tsx` becomes routing only

**Files:**
- Create: `src/pages/LandingPage.tsx`, `WorkPage.tsx`, `AboutPage.tsx`, `TeamPage.tsx`, `NonprofitsPage.tsx`, `StudentsPage.tsx`, `ProjectDetailPage.tsx`, `NotFoundPage.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: everything produced by Tasks 1–3
- Produces: one default-free named export per page, e.g. `export function LandingPage()`; `ProjectDetailPage({ project }: { project: Project })`

- [ ] **Step 1: Move each page verbatim**

| New file | From `App.tsx` lines |
|---|---|
| `pages/LandingPage.tsx` | 311–385 + `ProjectsPreview` 412–425 |
| `pages/WorkPage.tsx` | 449–488 |
| `pages/AboutPage.tsx` | 524–543 |
| `pages/TeamPage.tsx` | 545–578 (`TeamMember` + `TeamPage`) |
| `pages/NonprofitsPage.tsx` | 580–633 |
| `pages/StudentsPage.tsx` | 635–686 |
| `pages/ProjectDetailPage.tsx` | 688–761 |
| `pages/NotFoundPage.tsx` | 763–765 |

`ProjectsPreview` and `TeamMember` are private helpers — keep them in the page file that uses them, unexported.

- [ ] **Step 2: Reduce `App.tsx` to routing**

```tsx
import { usePath } from './router'
import { projects } from './data/projects'
import { LandingPage } from './pages/LandingPage'
import { WorkPage } from './pages/WorkPage'
import { AboutPage } from './pages/AboutPage'
import { TeamPage } from './pages/TeamPage'
import { NonprofitsPage } from './pages/NonprofitsPage'
import { StudentsPage } from './pages/StudentsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  const path = usePath()
  const normalizedPath = path.replace(/\/$/, '') || '/'
  const project = projects.find(item => normalizedPath === `/work/${item.slug}`)

  let page: React.ReactNode
  if (normalizedPath === '/') page = <LandingPage />
  else if (normalizedPath === '/about') page = <AboutPage />
  else if (normalizedPath === '/team') page = <TeamPage />
  else if (normalizedPath === '/work') page = <WorkPage />
  else if (normalizedPath === '/nonprofits') page = <NonprofitsPage />
  else if (normalizedPath === '/students') page = <StudentsPage />
  else if (project) page = <ProjectDetailPage project={project} />
  else page = <NotFoundPage />

  return <div key={normalizedPath}>{page}</div>
}

export default App
```

Do **not** add the `archiveProjects` import or archive route yet — that arrives in Task 8. Leave the import out until then.

- [ ] **Step 3: Typecheck, build, verify**

```bash
npx tsc -b && npm run build
diff /tmp/baseline.css dist/assets/index-*.css && echo "CSS IDENTICAL"
diff <(sed 's/index-[A-Za-z0-9_-]*\.\(js\|css\)/index-HASH.\1/g' /tmp/baseline-index.html) \
     <(sed 's/index-[A-Za-z0-9_-]*\.\(js\|css\)/index-HASH.\1/g' dist/index.html) && echo "HTML IDENTICAL"
wc -l src/App.tsx
```

Expected: identical output, `App.tsx` under 50 lines.

- [ ] **Step 4: Spot-check in the browser**

Run `npm run dev`, then load `/`, `/about`, `/team`, `/work`, `/nonprofits`, `/students`, `/work/mending-kids`. Confirm each renders as before, the nav works, and the landing carousels animate.

- [ ] **Step 5: Commit**

```bash
git add src/pages src/App.tsx
git commit -m "refactor: split pages out of App.tsx"
```

---

### Task 5: Archive types and the rich-text converter

**Files:**
- Create: `src/data/archive.ts`, `scripts/lib/convert.mjs`, `scripts/lib/convert.test.mjs`

**Interfaces:**
- Consumes: nothing
- Produces: types `Span`, `Block`, `ArchiveProject` from `src/data/archive.ts`; `convertBody(raw, assetsById)` from `scripts/lib/convert.mjs`, returning `Block[]`, where `assetsById` maps a Contentful asset id to `{ src, alt, caption, width, height }`

- [ ] **Step 1: Create `src/data/archive.ts`**

```ts
export type Span = { text: string; bold?: boolean; href?: string }

export type Block =
  | { type: 'heading'; level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; spans: Span[] }
  | { type: 'list'; items: Span[][] }
  | { type: 'image'; src: string; alt: string; caption?: string; width: number; height: number }

export type ArchiveProject = {
  slug: string
  name: string
  description: string
  nonprofit: { name: string; url?: string }
  technology: string[]
  team: string[]
  cover?: { src: string; width: number; height: number }
  body: Block[]
  order: number
}
```

- [ ] **Step 2: Write the failing tests**

Create `scripts/lib/convert.test.mjs`:

```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { convertBody } from './convert.mjs'

const doc = (...content) => JSON.stringify({ data: {}, content, nodeType: 'document' })
const text = (value, marks = []) => ({ data: {}, marks, value, nodeType: 'text' })

test('heading-1 becomes level 2, heading-2 level 3, heading-3 and heading-6 level 4', () => {
  const raw = doc(
    { data: {}, content: [text('Background')], nodeType: 'heading-1' },
    { data: {}, content: [text('Detail')], nodeType: 'heading-2' },
    { data: {}, content: [text('Aside')], nodeType: 'heading-3' },
    { data: {}, content: [text('Footnote')], nodeType: 'heading-6' },
  )
  assert.deepEqual(convertBody(raw, {}), [
    { type: 'heading', level: 2, text: 'Background' },
    { type: 'heading', level: 3, text: 'Detail' },
    { type: 'heading', level: 4, text: 'Aside' },
    { type: 'heading', level: 4, text: 'Footnote' },
  ])
})

test('paragraph keeps bold marks and hyperlinks as spans', () => {
  const raw = doc({
    data: {},
    nodeType: 'paragraph',
    content: [
      text('Visit '),
      { data: { uri: 'https://www.oppia.org/about' }, nodeType: 'hyperlink', content: [text('Oppia')] },
      text(' now', [{ type: 'bold' }]),
    ],
  })
  assert.deepEqual(convertBody(raw, {}), [{
    type: 'paragraph',
    spans: [
      { text: 'Visit ' },
      { text: 'Oppia', href: 'https://www.oppia.org/about' },
      { text: ' now', bold: true },
    ],
  }])
})

test('unordered-list flattens list-item paragraphs into span rows', () => {
  const raw = doc({
    data: {},
    nodeType: 'unordered-list',
    content: [{
      data: {},
      nodeType: 'list-item',
      content: [{ data: {}, nodeType: 'paragraph', content: [text('Volunteers revisit '), text('the same places', [{ type: 'bold' }])] }],
    }],
  })
  assert.deepEqual(convertBody(raw, {}), [{
    type: 'list',
    items: [[{ text: 'Volunteers revisit ' }, { text: 'the same places', bold: true }]],
  }])
})

test('embedded-asset-block resolves through the asset map', () => {
  const raw = doc({
    data: { target: { sys: { id: 'WkuQssMCI8IThObmhhdfu', type: 'Link', linkType: 'Asset' } } },
    content: [],
    nodeType: 'embedded-asset-block',
  })
  const assets = {
    WkuQssMCI8IThObmhhdfu: { src: '/assets/archive/project-ropa/picture.jpeg', alt: 'Project Ropa: Picture', caption: 'Project Ropa: Picture', width: 724, height: 426 },
  }
  assert.deepEqual(convertBody(raw, assets), [{
    type: 'image',
    src: '/assets/archive/project-ropa/picture.jpeg',
    alt: 'Project Ropa: Picture',
    caption: 'Project Ropa: Picture',
    width: 724,
    height: 426,
  }])
})

test('unknown asset ids and empty paragraphs are dropped, not rendered blank', () => {
  const raw = doc(
    { data: { target: { sys: { id: 'missing' } } }, content: [], nodeType: 'embedded-asset-block' },
    { data: {}, nodeType: 'paragraph', content: [text('')] },
  )
  assert.deepEqual(convertBody(raw, {}), [])
})
```

- [ ] **Step 3: Run the tests and watch them fail**

Run: `node --test scripts/lib/`
Expected: FAIL — `Cannot find module './convert.mjs'`.

- [ ] **Step 4: Write `scripts/lib/convert.mjs`**

```js
const HEADING_LEVELS = { 'heading-1': 2, 'heading-2': 3, 'heading-3': 4, 'heading-4': 4, 'heading-5': 4, 'heading-6': 4 }

function spansFrom(nodes, inheritedHref) {
  const spans = []
  for (const node of nodes ?? []) {
    if (node.nodeType === 'text') {
      if (!node.value) continue
      const span = { text: node.value }
      if (node.marks?.some(mark => mark.type === 'bold')) span.bold = true
      if (inheritedHref) span.href = inheritedHref
      spans.push(span)
    } else if (node.nodeType === 'hyperlink') {
      spans.push(...spansFrom(node.content, node.data?.uri))
    } else if (node.content) {
      spans.push(...spansFrom(node.content, inheritedHref))
    }
  }
  return spans
}

function textFrom(nodes) {
  return spansFrom(nodes).map(span => span.text).join('')
}

export function convertBody(raw, assetsById) {
  const doc = typeof raw === 'string' ? JSON.parse(raw) : raw
  const blocks = []

  for (const node of doc.content ?? []) {
    if (HEADING_LEVELS[node.nodeType]) {
      const text = textFrom(node.content)
      if (text) blocks.push({ type: 'heading', level: HEADING_LEVELS[node.nodeType], text })
    } else if (node.nodeType === 'paragraph') {
      const spans = spansFrom(node.content)
      if (spans.length) blocks.push({ type: 'paragraph', spans })
    } else if (node.nodeType === 'unordered-list' || node.nodeType === 'ordered-list') {
      const items = (node.content ?? [])
        .map(item => spansFrom(item.content))
        .filter(spans => spans.length)
      if (items.length) blocks.push({ type: 'list', items })
    } else if (node.nodeType === 'embedded-asset-block') {
      const asset = assetsById[node.data?.target?.sys?.id]
      if (asset) blocks.push({ type: 'image', ...asset })
    }
  }

  return blocks
}
```

- [ ] **Step 5: Run the tests and watch them pass**

Run: `node --test scripts/lib/`
Expected: 5 passing tests.

- [ ] **Step 6: Commit**

```bash
git add src/data/archive.ts scripts/lib
git commit -m "feat: add archive types and rich-text converter with tests"
```

---

### Task 6: The import script

**Files:**
- Create: `scripts/import-archive.mjs`
- Generates: `src/data/archiveProjects.ts`, `public/assets/archive/<slug>/*`

**Interfaces:**
- Consumes: `convertBody` from `scripts/lib/convert.mjs`; types from `src/data/archive.ts`
- Produces: `archiveProjects: ArchiveProject[]` exported from `src/data/archiveProjects.ts`, ordered 1–14

- [ ] **Step 1: Write `scripts/import-archive.mjs`**

```js
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

// Writes one image and returns its web path plus final dimensions. Oversized
// stills are resized in place; GIFs are copied untouched because sips would
// flatten the animation.
function writeImage(slug, publicURL, label) {
  const source = publicURL.replace(/^\//, '')
  const ext = extname(source).toLowerCase()
  const name = `${slugify(label || basename(source))}${ext}`
  const dir = join(OUT_IMAGES, slug)
  mkdirSync(dir, { recursive: true })
  const dest = join(dir, name)
  writeFileSync(dest, git(['show', `${COMMIT}:${source}`]))

  if (ext !== '.gif') {
    const { width } = imageSize(dest)
    if (width > MAX_WIDTH) execFileSync('sips', ['-Z', String(MAX_WIDTH), dest], { stdio: 'ignore' })
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
```

- [ ] **Step 2: Run it**

```bash
cd /Users/jt/Desktop/Nova26-7
node scripts/import-archive.mjs
```

Expected: `wrote 14 projects to src/data/archiveProjects.ts`

- [ ] **Step 3: Verify the output**

```bash
grep -c '"slug"' src/data/archiveProjects.ts          # expect 14
find public/assets/archive -type f | wc -l            # expect 18 (15 body + 3 covers)
du -sh public/assets/archive                          # expect well under 9.6M
npx tsc -b                                            # generated file must typecheck
```

Confirm no image exceeds 1600 px wide except the GIFs:

```bash
for f in $(find public/assets/archive -type f ! -name '*.gif'); do sips -g pixelWidth "$f" | tail -1; done | sort -u -k2 -n | tail -3
```

- [ ] **Step 4: Sanity-check one conversion against the archive**

```bash
grep -A6 '"slug": "project-ropa"' src/data/archiveProjects.ts | head -12
git show 6ce137d:work/project-ropa/index.html | sed 's/<[^>]*>/ /g' | tr -s ' \n' ' ' | head -c 600
```

Expected: the name, description, and opening prose match the rendered archive page.

- [ ] **Step 5: Commit**

```bash
git add scripts/import-archive.mjs src/data/archiveProjects.ts public/assets/archive
git commit -m "feat: import 14 archived case studies from the old site build"
```

---

### Task 7: `ArchiveBody` renderer, page, skeleton, and styles

**Files:**
- Create: `src/components/ArchiveBody.tsx`, `src/pages/ArchiveProjectPage.tsx`
- Modify: `src/Skeletons.tsx`, `src/styles.css`

**Interfaces:**
- Consumes: `Block`, `ArchiveProject` from `src/data/archive`; `archiveProjects` from `src/data/archiveProjects`; `Link` from `src/router`; `AppShell` from `src/components/AppShell`
- Produces: `ArchiveBody({ blocks }: { blocks: Block[] })`, `ArchiveProjectPage({ project }: { project: ArchiveProject })`, `ArchiveDetailSkeleton()`

- [ ] **Step 1: Create `src/components/ArchiveBody.tsx`**

```tsx
import type { Block, Span } from '../data/archive'

function Spans({ spans }: { spans: Span[] }) {
  return <>{spans.map((span, index) => {
    const content = span.bold ? <strong>{span.text}</strong> : span.text
    return span.href
      ? <a key={index} href={span.href} target="_blank" rel="noopener noreferrer">{content}</a>
      : <span key={index}>{content}</span>
  })}</>
}

export function ArchiveBody({ blocks }: { blocks: Block[] }) {
  return <div className="archive-body">{blocks.map((block, index) => {
    if (block.type === 'heading') {
      const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'
      return <Tag key={index}>{block.text}</Tag>
    }
    if (block.type === 'paragraph') return <p key={index}><Spans spans={block.spans} /></p>
    if (block.type === 'list') {
      return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><Spans spans={item} /></li>)}</ul>
    }
    return <figure key={index}>
      <img src={block.src} alt={block.alt} width={block.width} height={block.height} loading="lazy" decoding="async" />
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
    </figure>
  })}</div>
}
```

- [ ] **Step 2: Create `src/pages/ArchiveProjectPage.tsx`**

```tsx
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from '../router'
import { AppShell } from '../components/AppShell'
import { ArchiveBody } from '../components/ArchiveBody'
import { ArchiveDetailSkeleton } from '../Skeletons'
import { archiveProjects } from '../data/archiveProjects'
import type { ArchiveProject } from '../data/archive'

export function ArchiveProjectPage({ project }: { project: ArchiveProject }) {
  const index = archiveProjects.findIndex(item => item.slug === project.slug)
  const previous = archiveProjects[(index + archiveProjects.length - 1) % archiveProjects.length]
  const next = archiveProjects[(index + 1) % archiveProjects.length]

  return <AppShell skeleton={<ArchiveDetailSkeleton />}>
    <div className="archive-page">
      <section className="archive-hero">
        <img className="detail-deco detail-star detail-star-left" src="/assets/figma/details/star2.png" alt="" />
        <img className="detail-deco detail-star detail-star-right" src="/assets/figma/details/star2.png" alt="" />
        <div className="archive-hero-copy">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="archive-content">
        <div className="archive-meta">
          <p><strong>Nonprofit:</strong> {project.nonprofit.url
            ? <a href={project.nonprofit.url} target="_blank" rel="noopener noreferrer">{project.nonprofit.name} <ArrowUpRight size={13} /></a>
            : project.nonprofit.name}</p>
          {project.technology.length ? <p><strong>Tech Stack:</strong> {project.technology.join(', ')}</p> : null}
          {project.team.length ? <div><strong>Team Members:</strong><ul>{project.team.map(member => <li key={member}>{member}</li>)}</ul></div> : null}
        </div>

        <ArchiveBody blocks={project.body} />

        <nav className="figma-detail-nav" aria-label="Project navigation">
          <div>
            <Link className="button button-outline" href={`/work/${previous.slug}`}><ArrowLeft size={16} /> Previous Project</Link>
            <Link className="button button-outline" href={`/work/${next.slug}`}>Next Project <ArrowRight size={16} /></Link>
          </div>
          <Link className="detail-all-projects" href="/work">View All Projects</Link>
        </nav>
      </section>
    </div>
  </AppShell>
}
```

- [ ] **Step 3: Add `ArchiveDetailSkeleton` to `src/Skeletons.tsx`**

Append, matching the shapes the existing skeletons in that file use:

```tsx
export function ArchiveDetailSkeleton() {
  return <div className="archive-page">
    <section className="archive-hero"><div className="archive-hero-copy">
      <div className="skeleton-block" style={{ height: 64, width: '60%', margin: '0 auto' }} />
      <div className="skeleton-block" style={{ height: 20, width: '80%', margin: '16px auto 0' }} />
    </div></section>
    <section className="archive-content">
      <div className="skeleton-block" style={{ height: 120 }} />
      <div className="skeleton-block" style={{ height: 240, marginTop: 24 }} />
      <div className="skeleton-block" style={{ height: 320, marginTop: 24 }} />
    </section>
  </div>
}
```

If `skeleton-block` is not the class the other skeletons use, match whatever `Skeletons.tsx` already defines instead — read the file first.

- [ ] **Step 4: Append archive styles to `src/styles.css`**

```css
/* Archived project case studies — recovered from the pre-2026 site. */
.archive-page { position: relative; }
.archive-hero {
  position: relative;
  padding: 120px 24px 64px;
  text-align: center;
  background: radial-gradient(120% 140% at 50% 0%, rgba(23, 107, 223, 0.18), transparent 70%);
}
.archive-hero-copy { max-width: 760px; margin: 0 auto; }
.archive-hero h1 {
  font-size: clamp(40px, 7vw, 72px);
  background: linear-gradient(96deg, var(--blue), var(--pink));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.archive-hero p { margin-top: 16px; font-size: 18px; line-height: 1.5; }
.archive-content { max-width: 760px; margin: 0 auto; padding: 0 24px 96px; }
.archive-meta {
  padding: 24px 0;
  border-block: 1px solid rgba(23, 107, 223, 0.25);
  font-size: 15px;
  line-height: 1.7;
}
.archive-meta ul { margin: 4px 0 0; padding-left: 20px; }
.archive-meta a { display: inline-flex; align-items: center; gap: 4px; }
.archive-body { margin-top: 40px; }
.archive-body h2 { margin: 48px 0 12px; font-size: 28px; }
.archive-body h3 { margin: 32px 0 10px; font-size: 22px; }
.archive-body h4 { margin: 24px 0 8px; font-size: 18px; }
.archive-body p { margin: 0 0 18px; line-height: 1.7; }
.archive-body ul { margin: 0 0 18px; padding-left: 22px; line-height: 1.7; }
.archive-body li { margin-bottom: 8px; }
.archive-body figure { margin: 32px 0; }
.archive-body img { width: 100%; height: auto; border-radius: 12px; }
.archive-body figcaption { margin-top: 8px; font-size: 14px; opacity: 0.7; }
@media (max-width: 700px) {
  .archive-hero { padding: 88px 20px 48px; }
  .archive-content { padding: 0 20px 64px; }
}
```

- [ ] **Step 5: Typecheck and build**

Run: `npx tsc -b && npm run build`
Expected: no errors. The page is not routed yet, so nothing renders it — that is expected.

- [ ] **Step 6: Commit**

```bash
git add src/components/ArchiveBody.tsx src/pages/ArchiveProjectPage.tsx src/Skeletons.tsx src/styles.css
git commit -m "feat: add archive body renderer, page, skeleton, and styles"
```

---

### Task 8: Wire archive pages into routing and the work page

**Files:**
- Modify: `src/App.tsx`, `src/pages/WorkPage.tsx`, `src/data/site.ts`

**Interfaces:**
- Consumes: `archiveProjects`, `ArchiveProjectPage`
- Produces: `/work/<slug>` routes for all 14 archived projects; a reordered "...and more!" list

- [ ] **Step 1: Route archive projects in `App.tsx`**

Add the imports and one resolution line:

```tsx
import { archiveProjects } from './data/archiveProjects'
import { ArchiveProjectPage } from './pages/ArchiveProjectPage'
```

Inside `App`, after the existing `project` lookup:

```tsx
  const archived = archiveProjects.find(item => normalizedPath === `/work/${item.slug}`)
```

And in the routing chain, after the `project` branch:

```tsx
  else if (project) page = <ProjectDetailPage project={project} />
  else if (archived) page = <ArchiveProjectPage project={archived} />
  else page = <NotFoundPage />
```

- [ ] **Step 2: Replace `moreProjects` in `src/data/site.ts`**

The archived 14 now carry their own names and descriptions, so `moreProjects` shrinks to the one project with no page:

```ts
export const moreProjects: { name: string; description: string; npoUrl?: string }[] = [
  { name: 'SaveCanto', description: 'A web app to act as a volunteer management system and a refined map and table system for verifying/displaying Cantonese language learning programs.' },
]
```

- [ ] **Step 3: Render archived rows plus SaveCanto in `WorkPage.tsx`**

Replace the `work-more-list` block with archived rows first, in `order`, then the remaining static rows:

```tsx
import { archiveProjects } from '../data/archiveProjects'
// ...
<div className="work-more-list">
  {[...archiveProjects].sort((a, b) => a.order - b.order).map(project => (
    <Link className="work-more-row" href={`/work/${project.slug}`} key={project.slug}>
      <strong>{project.name}</strong>
      <span>{project.description}</span>
      <ArrowUpRight size={12} strokeWidth={1.5} />
    </Link>
  ))}
  {moreProjects.map(({ name, description, npoUrl }) => npoUrl
    ? <a className="work-more-row" href={npoUrl} target="_blank" rel="noopener noreferrer" key={name}><strong>{name}</strong><span>{description}</span><ArrowUpRight size={12} strokeWidth={1.5} /></a>
    : <div className="work-more-row work-more-row-static" key={name}><strong>{name}</strong><span>{description}</span></div>)}
</div>
```

- [ ] **Step 4: Typecheck, build, and check every route resolves**

```bash
npx tsc -b && npm run build
node -e "
const src = require('fs').readFileSync('src/data/archiveProjects.ts','utf8');
const slugs = [...src.matchAll(/\"slug\": \"([^\"]+)\"/g)].map(m => m[1]);
console.log(slugs.length, 'slugs:', slugs.join(' '));
"
```

Expected: 14 slugs listed.

- [ ] **Step 5: Verify in the browser**

Run `npm run dev`. Check that:
- `/work` lists 15 rows, the first three being Inner City Visions, L.A. Waterkeeper, Alzheimer's San Diego, and SaveCanto last
- every archived row navigates to its page rather than an external site
- SaveCanto renders as a non-clickable row
- `/work/project-ropa` shows the meta strip, body prose, and three images
- previous/next cycles through the 14 archived projects
- `/work/mending-kids` is unaffected

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx src/pages/WorkPage.tsx src/data/site.ts
git commit -m "feat: publish archived project pages and link them from /work"
```

---

### Task 9: Fidelity pass and final verification

**Files:**
- Modify: whichever files the checks below turn up problems in

- [ ] **Step 1: Compare each page against the archived original**

For all 14 slugs, diff the visible text of the new page's data against the old rendered HTML:

```bash
for slug in inner-city-visions la-waterkeeper alzheimers-san-diego project-ropa survival-kit-distribution iidecide global-lives-project risc oppia gladeo swipe-out-hunger westside-food-bank friends-of-semel beloved-beauty; do
  echo "=== $slug"
  git show 6ce137d:work/$slug/index.html | sed 's/<[^>]*>/ /g' | tr -s ' \n' ' ' | grep -o 'Background.\{0,120\}' | head -1
done
```

Spot-check the same opening text appears in `src/data/archiveProjects.ts` for each. Any project whose body converted to an empty array is a bug — investigate before shipping.

```bash
grep -c '"body": \[\]' src/data/archiveProjects.ts   # expect 0
```

- [ ] **Step 2: Check responsive layout**

With `npm run dev` running, load `/work/survival-kit-distribution` (the longest body, 4 images) and `/work/westside-food-bank` (the 2.1 MB GIF) at 390 px wide. Confirm no horizontal scrolling and that images fit their column.

- [ ] **Step 3: Confirm the asset budget**

```bash
du -sh public/assets/archive
git status --short
```

Expected: archive assets roughly 3 MB or less; no unintended files staged.

- [ ] **Step 4: Full build**

Run: `npx tsc -b && npm run build`
Expected: clean build.

- [ ] **Step 5: Commit any fixes**

```bash
git add -A
git commit -m "fix: archive page fidelity and responsive corrections"
```

Leave the work committed locally. Do not push — the user pushes deliberately, and deploying means rebuilding `dist` onto `master` separately.
