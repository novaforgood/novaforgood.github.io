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
