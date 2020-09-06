// Huge credit to Josh W Comeau
// Please see https://joshwcomeau.com/react/animated-sparkles-in-react/ for code's in-depth explanation

import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"

const mobile = `@media (max-width: 700px)`

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const range = (start, end, step = 1) => {
  let output = []
  if (typeof end === "undefined") {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}

const QUERY = "(prefers-reduced-motion: no-preference)"
const isRenderingOnServer = typeof window === "undefined"
const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    getInitialState
  )
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addListener(listener)
    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])
  return prefersReducedMotion
}

const useRandomInterval = (callback, minDelay, maxDelay) => {
  const timeoutId = React.useRef(null)
  const savedCallback = React.useRef(callback)
  React.useEffect(() => {
    savedCallback.current = callback
  })
  React.useEffect(() => {
    let isEnabled = typeof minDelay === "number" && typeof maxDelay === "number"
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => window.clearTimeout(timeoutId.current)
  }, [minDelay, maxDelay])
  const cancel = React.useCallback(function () {
    window.clearTimeout(timeoutId.current)
  }, [])
  return cancel
}

const colors = ["#FA522B", "#FFFFFF", "#FFC650", "#D7A3E1"]

const generateSparkle = () => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color: colors[random(0, colors.length)],
    size: random(10, 20),
    style: {
      top: random(-15, 115) + "%",
      left: random(-15, 115) + "%",
    },
  }
  return sparkle
}

const Sparkles = ({ hide, children }) => {
  const [sparkles, setSparkles] = React.useState(() => {
    return range(100).map(() => generateSparkle())
  })

  const prefersReducedMotion = usePrefersReducedMotion()
  useRandomInterval(
    () => {
      const sparkle = generateSparkle()
      const now = Date.now()
      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < 750
      })
      nextSparkles.push(sparkle)
      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 100
  )
  return (
    <Wrapper hide={hide}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  )
}
const Sparkle = ({ size, color, style }) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
  return (
    <SparkleWrapper style={style}>
      <SparkleSvg width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d={path} fill={color} />
      </SparkleSvg>
    </SparkleWrapper>
  )
}

const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  visibility: ${({ hide }) => (hide ? "hidden" : "visible")};
  ${mobile} {
    overflow: hidden;
  }
`

const SparkleWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${comeInOut} 700ms forwards;
  }
`
const SparkleSvg = styled.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 1000ms linear;
  }
`
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
  visibility: visible;
`
export default Sparkles
