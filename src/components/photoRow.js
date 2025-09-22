// src/components/photoRow.js
import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const mobile = `@media (max-width: 800px)`;

/* ---------- helpers: seeded RNG + Fisher–Yates shuffle ---------- */
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleArray(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Continuous scroll */
const scroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

/* Viewport */
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

/* Track */
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

/* Slide */
const SlideCard = styled.div`
  height: var(--row-h, 240px);
  flex: 0 0 auto;
  display: inline-block;
  border-radius: 20px;
  border: 1.5px solid #000;
  overflow: hidden;

  ${mobile} {
    height: var(--row-h-mobile, 180px);
  }
`;
const SlideImg = styled.img`
  height: 100%;
  width: auto;
  display: block;
`;

/**
 * InfinitePhotoRow
 * props:
 *  - images: Array<string | { src, alt? }>
 *  - duration, reverse, rowHeight, rowHeightMobile, gap, maskEdges
 *  - shuffle?: boolean (default true)
 *  - seed?: number (use to keep order stable across SSR/CSR)
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
  shuffle = true,
  seed,
}) {
  // normalize input
  const slides = useMemo(
    () =>
      (images || []).map((im) =>
        typeof im === "string"
          ? { src: im, alt: "" }
          : { src: im.src, alt: im.alt || "" }
      ),
    [images]
  );

  // optionally shuffle (seeded if provided)
  const ordered = useMemo(() => {
    if (!shuffle) return slides;
    const rng = typeof seed === "number" ? mulberry32(seed) : Math.random;
    return shuffleArray(slides, rng);
  }, [slides, shuffle, seed]);

  // duplicate for seamless loop
  const loop = useMemo(() => [...ordered, ...ordered], [ordered]);

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
            aria-label={alt || `Slide ${(i % ordered.length) + 1}`}
          >
            <SlideImg src={src} alt={alt || ""} loading="lazy" />
          </SlideCard>
        ))}
      </Track>
    </RowViewport>
  );
}
