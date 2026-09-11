// Converts Contentful rich-text documents (as stored in the old Gatsby build)
// into the small Block[] shape the site renders. See src/data/archive.ts.
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
