// src/components/photoRow.js
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const mobile = `@media (max-width: 800px)`;

/* Continuous scroll */
const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/* Viewport: exposes CSS vars for duration + row heights, optional edge mask */
const RowViewport = styled("div", {
  shouldForwardProp: (p) =>
    !["duration", "rowHeight", "rowHeightMobile", "gap", "maskEdges"].includes(
      p
    ),
})`
  position: relative;
  overflow: hidden;
  width: 100%;
  --gap: ${({ gap }) => gap || "16px"};
  --duration: ${({ duration }) => duration || "40s"};
  --row-h: ${({ rowHeight }) => rowHeight || "240px"};
  --row-h-mobile: ${({ rowHeightMobile }) => rowHeightMobile || "180px"};

  ${({ maskEdges = true }) =>
    maskEdges
      ? `
  -webkit-mask-image: linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%);`
      : ""}
`;

/* Track: duplicates slides externally; reverses direction when asked */
const Track = styled("div", {
  shouldForwardProp: (p) => p !== "reverse",
})`
  display: flex;
  gap: var(--gap);
  width: max-content;
  animation: ${scroll} var(--duration) linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
  ${({ reverse }) => reverse && `animation-direction: reverse;`}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
  }
`;

/* Slide: fixed height, width = height × ratio; uses bg image; no DOM prop leaks */
const SlideCard = styled.div`
  /* Same row height for every card */
  height: var(--row-h, 240px);

  /* Let content (the <img>) define width from its intrinsic ratio */
  flex: 0 0 auto;
  display: inline-block;

  border-radius: 20px;
  border: 1px solid #000;
  overflow: hidden; /* keep rounded corners clean */

  ${mobile} {
    height: var(--row-h-mobile, 180px);
  }
`;

const SlideImg = styled.img`
  height: 100%;
  width: auto; /* ⬅️ keeps intrinsic aspect */
  display: block; /* avoid baseline gap */
`;

/**
 * InfinitePhotoRow
 * images: Array<string | { src: string, alt?: string, ratio?: number }>
 *   - ratio = width/height per card (e.g., 1 for square, 1.6 for wide)
 * duration: CSS time (e.g., "30s")
 * reverse: boolean (flip direction)
 * rowHeight / rowHeightMobile: CSS sizes (e.g., "220px")
 * gap: CSS size between cards (default 16px)
 * maskEdges: fade viewport edges (default true)
 */
export default function InfinitePhotoRow({
  images,
  duration = "40s",
  reverse = false,
  rowHeight,
  rowHeightMobile,
  gap,
  maskEdges = true,
  className,
  ariaLabel = "Rotating photo row",
}) {
  // Normalize input -> {src, alt, ratio}
  const slides = useMemo(
    () =>
      (images || []).map((im) =>
        typeof im === "string"
          ? { src: im, alt: "", ratio: 1.333 }
          : {
              src: im.src,
              alt: im.alt || "",
              ratio: typeof im.ratio === "number" ? im.ratio : 1.333,
            }
      ),
    [images]
  );

  // Duplicate once for seamless loop
  const loop = [...slides, ...slides];

  return (
    <RowViewport
      className={className}
      duration={duration}
      rowHeight={rowHeight}
      rowHeightMobile={rowHeightMobile}
      gap={gap}
      maskEdges={maskEdges}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <Track reverse={reverse}>
        {loop.map(({ src, alt }, i) => (
          <SlideCard
            key={i}
            aria-label={alt || `Slide ${(i % slides.length) + 1}`}
          >
            <SlideImg src={src} alt={alt || ""} loading="lazy" />
          </SlideCard>
        ))}
      </Track>
    </RowViewport>
  );
}
