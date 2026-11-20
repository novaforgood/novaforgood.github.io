import { useEffect, useState, type RefObject } from 'react'

const SAFETY_TIMEOUT_MS = 2000

export function useImagesLoaded(containerRef: RefObject<HTMLElement | null>): boolean {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const container = containerRef.current
    if (!container) return

    // Images marked loading="lazy" are deliberately deferred until they near the
    // viewport; while content sits hidden (display:none) they have no layout box
    // and may never fire load, so they're excluded from the loaded-gate.
    const images = Array.from(container.querySelectorAll<HTMLImageElement>('img:not([loading="lazy"])'))
    if (images.length === 0) {
      setLoaded(true)
      return
    }

    let remaining = images.length
    let cancelled = false

    const resolveOne = () => {
      if (cancelled) return
      remaining -= 1
      if (remaining <= 0) setLoaded(true)
    }

    images.forEach((img) => {
      if (img.complete) {
        resolveOne()
      } else {
        img.addEventListener('load', resolveOne)
        img.addEventListener('error', resolveOne)
      }
    })

    const timeoutId = window.setTimeout(() => {
      if (!cancelled) setLoaded(true)
    }, SAFETY_TIMEOUT_MS)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      images.forEach((img) => {
        img.removeEventListener('load', resolveOne)
        img.removeEventListener('error', resolveOne)
      })
    }
  }, [containerRef])

  return loaded
}
