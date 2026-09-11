import type { LandingPhoto } from '../data/site'

// Narrower viewports slow the photo carousels down: 1440px+ plays at normal
// speed, down to 3x slower (i.e. 1/3 speed) around phone-width viewports.
export function carouselSpeedForWidth(width: number) {
  return Math.min(3, Math.max(1, 1440 / width))
}

export function PhotoStrip({ photos, widths, stripId, repeatsPerHalf, speed = 1, className = '' }: { photos: LandingPhoto[]; widths: number[]; stripId: string; repeatsPerHalf: number; speed?: number; className?: string }) {
  // Two identical halves make the CSS loop seamless. Normal viewports only need
  // one photo set per half; ultra-wide viewports get a second set to prevent gaps.
  const half = Array.from({ length: repeatsPerHalf }, () => photos).flat()
  const sequence = [...half, ...half]
  const duration = (stripId === 'middle' ? 22 : 19) * repeatsPerHalf * speed
  return <div className={`landing-carousel ${className}`} data-strip-id={stripId}>
    <div className="landing-photo-track" style={{ animationDuration: `${duration}s` }}>{sequence.map((photo, index) =>
      <picture key={`${photo.id}-${index}`} style={{ width: widths[index % widths.length] ?? 342.56 }}>
        <source type="image/avif" srcSet={photo.avifSrcSet} sizes={`${Math.ceil(widths[index % widths.length] ?? 342.56)}px`} />
        <img
          src={photo.jpegSrc}
          srcSet={photo.jpegSrcSet}
          sizes={`${Math.ceil(widths[index % widths.length] ?? 342.56)}px`}
          data-photo-id={photo.id}
          data-copy-index={Math.floor(index / photos.length)}
          data-logical-index={index % photos.length}
          loading={stripId === 'bottom' || index >= photos.length ? 'lazy' : 'eager'}
          decoding="async"
          alt={index < photos.length ? 'Nova team' : ''}
        />
      </picture>)}</div>
  </div>
}
