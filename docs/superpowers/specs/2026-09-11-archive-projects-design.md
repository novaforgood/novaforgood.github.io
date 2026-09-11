# Archive Project Pages + App.tsx Refactor

Date: 2026-09-11
Status: Approved for planning

## Problem

The site shows three current projects (Mending Kids, Wags & Walks, CRJW) as full
detail pages. Fourteen earlier Nova projects appear only as one-line rows in the
"...and more!" section of `/work`, each linking away to the nonprofit's own
website. Their case studies — written by past members — are not on the site.

Separately, `src/App.tsx` is 785 lines holding data, routing, layout shell, and
all eight pages. Adding fourteen pages to that file is not viable.

## What was recovered, and from where

The old site was Gatsby and pulled case studies from Contentful
(`allContentfulProjectCaseStudy`). Source history contains only templates — no
content. Contentful credentials are not in the repo and the space may no longer
be accessible.

The content survives in the **deployed build** on `master`, commit `6ce137d`
(2025-09-25, pushed by a past member). That tree holds:

- `page-data/work/<slug>/page-data.json` — 14 case studies, Contentful content
  frozen at build time
- `page-data/work/page-data.json` — the work index, including `featured` /
  `inProgress` flags and a `preview` cover image per project
- `static/**` — 203 files; every image the case studies reference is present

Per project the archive provides: `name`, `slug`, `description`, `nonprofits[]`
(name only), `technology[]`, `team[]`, and `bodyArticle.raw`, a Contentful
rich-text document.

Body sizes range from 1,612 characters (Alzheimer's San Diego) to 8,631
(Coordinating Survival Kit Distribution). The two projects flagged
`inProgress: true` on the old site — Global Lives Project and UChicago RISC —
have 2,820 and 3,373 characters respectively, so they are publishable despite
never having been listed publicly.

Rich text uses only these node types: `document`, `paragraph`, `heading-1`
(39), `heading-2` (16), `heading-3` (3), `heading-6` (3), `unordered-list` (9),
`list-item` (21), `hyperlink` (18), `embedded-asset-block` (15), `text`. The
only mark used is `bold` (20).

### Images

15 unique images, 9.6 MB total, all present in git. Notable:

| File | Size | Dimensions |
|---|---|---|
| `vwIgl4c.png` (Project Ropa) | 2,636 KB | 750 × 1334 |
| `wsfb.gif` (Westside Food Bank) | 2,184 KB | 480 × 275 |
| `gladeo-cover.jpeg` | 1,173 KB | 5000 × 2625 |

Two different projects (Global Lives, RISC) both use an asset named
`image.png`, so imported files must be named per slug.

Only three projects have a `preview` cover image, all 2000 × 2000: Inner City
Visions, L.A. Waterkeeper, Alzheimer's San Diego. The other eleven have none.

### Nonprofit URLs

The archive stores nonprofit names only; its `url` fields are Contentful CDN
paths for images. Twelve org URLs come from the existing `moreProjects` array in
`App.tsx`. The two new projects' URLs are recoverable from links inside their own
bodies: `globallives.org` and `risc.uchicago.edu`.

## Decisions

1. All 14 archived projects get pages. SaveCanto has no archived content and
   remains a row linking to its nonprofit.
2. Pages use the current site's visual language with a simpler article layout —
   not the Mending Kids / Wags / CRJW template, which expects Timeline,
   Problem/Solution, and metrics the archive does not contain.
3. Rows in "...and more!" link to the internal page; the nonprofit's website
   moves to the page's meta strip.
4. Content is converted once by a committed script into typed TypeScript data.
   No CMS dependency at runtime.
5. Body prose is reproduced verbatim. No section is invented to fill a template.

## Data model

`src/data/archive.ts`:

```ts
export type Span = { text: string; bold?: boolean; href?: string }

export type Block =
  | { type: 'heading';   level: 2 | 3 | 4; text: string }
  | { type: 'paragraph'; spans: Span[] }
  | { type: 'list';      items: Span[][] }
  | { type: 'image';     src: string; alt: string; caption?: string; width: number; height: number }

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

Heading mapping, because the page `<h1>` is the project name: body `heading-1` →
level 2, `heading-2` → level 3, `heading-3` and `heading-6` → level 4.

## Conversion script

`scripts/import-archive.mjs`, committed and re-runnable. Reads the old build out
of git (`git show 6ce137d:...`) — no network, no Contentful account.

Outputs:

- `src/data/archiveProjects.ts` — the 14 projects as `ArchiveProject[]`
- `public/assets/archive/<slug>/<name>.<ext>` — images, slug-scoped

Image handling, corrected after measuring the actual files (the original
estimate of "about 3 MB via resizing" was wrong — the heavy files are badly
compressed, not large in pixels; the worst is 2.6 MB at only 750 px wide):

1. Cap dimensions at 1600 px with `sips`. This only helps the 5000 px cover art.
2. Re-encode a PNG as JPEG (quality 80) **only when transparency is absent or
   entirely unused**, determined by inspecting the alpha channel with Pillow.
   This is where the savings are: 2,636 KB → 208 KB on the Project Ropa
   screenshot, 603 KB → 79 KB on the Global Lives prototype. The three cover
   images have genuine transparency (minimum alpha 0) and stay PNG, since
   flattening them would put black boxes behind logo art.
3. GIFs are copied untouched and lazy-loaded. `sips` cannot even read their
   frame count, and re-encoding would need `ffmpeg` for two files.

The 2.1 MB Westside Food Bank GIF therefore remains the single heaviest asset.

## Pages and routing

`/work/<slug>` for all 14, resolved after the three current projects. No slug
collides. The old site used the same `/work/<slug>` paths, so old inbound links
resolve again.

Page structure:

1. Gradient hero — project name, description. No laptop mockup; no screen art
   exists for these.
2. Meta strip — nonprofit (linked), technology, team.
3. Body — rendered from `Block[]`, images inline with captions.
4. Nav — previous / view all / next, cycling within the archive.

A dedicated skeleton matching this layout, alongside the existing ones.

### Work page

Fifteen rows, the archived fourteen ranked by how substantial each case study
is, then SaveCanto last. The old site's own order is not used: it led with the
three projects it happened to feature, all of which have no recorded tech stack
and among the thinnest write-ups.

Rank is computed in the import script from four measured signals, weighted
visuals-first because `/work` is a browsing surface:

| Signal | Weight |
|---|---|
| Images (body images plus cover) | 0.45 |
| Body words (paragraphs, lists, headings) | 0.30 |
| Technologies, excluding placeholders | 0.15 |
| Team members credited | 0.10 |

Each signal is normalised against the strongest project, and ties fall back to
word count and then the archive's original position, so repeated runs are
deterministic. Four entries store the literal string `TBA` as their technology
and score as having none: Inner City Visions, L.A. Waterkeeper, Alzheimer's San
Diego, Beloved Beauty. Their pages render no tech line, which is honest to the
archive — no stack is invented to fill the gap.

Resulting order: Coordinating Survival Kit Distribution, Project Ropa, Westside
Food Bank, Swipe Out Hunger, Gladeo, UChicago RISC, Beloved Beauty, Global Lives
Project, iiDecide, L.A. Waterkeeper, Alzheimer's San Diego, Oppia, Inner City
Visions, Friends of the Semel Institute.

The generated array is written in this same order, because `ArchiveProjectPage`
derives previous/next from array position — if the two disagreed, the list and
the page navigation would lead readers in different directions.

Fourteen rows link internally. SaveCanto keeps its external link.

## Refactor

Done first, before any archive code, so new pages land in the right place.

```
src/
  main.tsx
  App.tsx              routing only
  router.tsx           usePath, go, Link
  data/
    projects.ts        Project type + the 3 current projects
    archive.ts         archive types
    archiveProjects.ts generated
    site.ts            landingPartners, landingPhotos, teamPortraits,
                       board/general/alumni members, moreProjects
  components/
    Logo, SocialIcon, Header, Footer, AppShell,
    PhotoStrip, NetworkSection, CtaSection, ArchiveBody
  pages/
    Landing, Work, About, Team, Nonprofits, Students,
    ProjectDetail, ArchiveProject, NotFound
  Skeletons.tsx        imports Project from data/projects
  LandingAbduction.tsx unchanged
```

Rules and cleanups:

- JSX moves verbatim. No behavior changes in this step.
- `ProjectCard` and `partnerLogos` are deleted. Each is referenced exactly once,
  by its own definition; nothing renders them.
- `Skeletons.tsx` currently imports `type { Project }` from `App.tsx`. The type
  moves to `data/projects.ts`.
- `data/` imports nothing from `components/` or `pages/`, so no import cycles.
- `styles.css` is not split. It is 1,256 lines but already sectioned by page with
  Figma frame references; splitting it risks cascade-order regressions for no
  functional gain. Archive styles are appended as a new section.

## Verification

The project has no test framework, no linter, and no formatter. `tsc -b && vite
build` is the only automated gate that exists.

- Refactor step: build must pass, and the built CSS and HTML should be identical
  to the current build apart from chunk hashes. Diff them to prove the move
  changed nothing.
- Archive step: build passes; each of the 14 pages loads; spot-check rendered
  text and images against the archived HTML in `6ce137d:work/<slug>/index.html`.
- Responsive check at phone width for the pages with wide images.

**Known verification gap:** phone-width rendering could not be confirmed in this
environment. `resize_window` shrinks the browser window (`outerWidth` 328) without
changing the rendered viewport (`innerWidth` stays 1512), so `@media (max-width:
700px)` never activates and no screenshot reflects a real phone layout. The
narrow-width layout still needs a manual check in a real browser. Horizontal
overflow *was* verified at desktop width via `documentElement.scrollWidth` vs
`clientWidth`, which caught the decorative-star overflow on archive pages.

## Out of scope

- Adding a test framework, linter, or formatter.
- Splitting `styles.css`.
- The 154 MB of existing `public/assets`, which ships to `master` on every
  deploy. Worth addressing separately.
- Content for SaveCanto.
- Pinning dependencies, all currently `"latest"`.
