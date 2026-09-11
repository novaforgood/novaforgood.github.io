import { useRef } from 'react'
import { useImagesLoaded } from '../useImagesLoaded'
import { Header } from './Header'
import { Footer } from './Footer'

export function AppShell({ children, skeleton }: { children: React.ReactNode; skeleton: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const loaded = useImagesLoaded(contentRef)
  return <main id="top">
    <Header />
    {!loaded && <div className="page-skeleton" aria-hidden="true">{skeleton}</div>}
    <div className={`page-content${loaded ? ' page-content-visible' : ''}`} ref={contentRef}>{children}</div>
    <Footer />
  </main>
}
