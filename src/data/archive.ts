// Shapes for case studies recovered from the pre-2026 Nova site. The prose and
// images originated in Contentful and survive only in the old deployed build;
// scripts/import-archive.mjs regenerates archiveProjects.ts from it.
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
