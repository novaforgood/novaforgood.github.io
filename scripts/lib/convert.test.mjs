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
