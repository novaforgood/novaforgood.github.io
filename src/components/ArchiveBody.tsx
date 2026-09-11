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
