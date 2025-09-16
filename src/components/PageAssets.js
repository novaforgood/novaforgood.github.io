import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { useState } from "react";
import Fade from "react-reveal/fade";
import Sparkles from "./Sparkle";

const fonts = {
  main: "InstrumentSans",
};

const mobile = `@media (max-width: 800px)`;

export const NovaH0 = styled.div`
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 900; /* Black */
  font-size: 158px;
  line-height: 60%;
  color: black;
  text-align: ${({ center }) => (center ? "center" : "left")};

  ${mobile} {
    font-size: 100px;
  }
`;

export const NovaSub = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 800; /* ExtraBold */
  font-size: 72px;
  line-height: 150%;
  width: ${({ width }) => width || "auto"};
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: black;
  margin-top: 1%;

  white-space: nowrap;
  word-break: keep-all; /* don’t break within words */
  overflow-wrap: normal;

  ${mobile} {
    margin-left: 10%;
    font-size: 13px;
  }
`;

export const NovaH1 = styled.div`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 135%;
  /* identical to box height, or 65px */
  color: #013668;

  text-align: ${({ center }) => (center ? "center" : "left")};
  letter-spacing: 0.05em;

  ${mobile} {
    font-size: 32px;
  }
`;
export const NovaH2 = styled.div`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 135%;
  /* identical to box height, or 49px */
  text-align: ${({ center }) => (center ? "center" : "left")};
  letter-spacing: 0.05em;
  margin: 0;
  color: #013668;

  ${mobile} {
    font-size: 24px;
  }
`;

export const NovaH4 = styled.div`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 135%;
  /* or 32px */

  text-align: ${({ center }) => (center ? "center" : "left")};
  letter-spacing: 0.05em;
  color: ${({ color }) => `${color || "white"}`};

  ${mobile} {
    font-size: 18px;
  }
`;

export const NovaDiv = styled.div`
  font-family: InstrumentSans;
  line-height: ${({ lineHeight }) => `${lineHeight || "100%"}`};
  font-size: ${({ fontSize }) => `${fontSize || 20}px`};
  text-align: ${({ center }) => (center ? "center" : "left")};

  ${mobile} {
    font-size: ${({ fontSize }) => `${(2 / 3) * fontSize || 12}px`};
  }
`;

export const NovaSpacer = styled.div`
  width: 100%;
  height: ${({ y }) => `${y}`}px;
  ${mobile} {
    height: ${({ mobileY, y }) => `${mobileY || (2 / 3) * y}`}px;
  }
`;

export const MainBox = styled.div`
  margin-top: 100px;
  width: 70%;
  min-width: 760px;
  margin: 0 auto;

  ${mobile} {
    width: 95%;
    min-width: 0;
  }
`;

export const NovaP = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  width: ${({ width }) => width || "auto"};
  /* or 38px */
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: black;
  margin: 0;
  ${mobile} {
    font-size: 16px;
  }
`;

export const Button = styled(Link)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: ${({ textColor }) => `${textColor || "#FFFFFF"}`};

  /* solid color fallback */
  ${({ backgroundColor }) =>
    backgroundColor && !`${backgroundColor}`.includes("gradient")
      ? `background-color: ${backgroundColor};`
      : ""}

  /* gradient or custom background */
  ${({ background, bg, backgroundColor }) => {
    const val = background || bg || backgroundColor;
    return val && `${val}`.includes("gradient") ? `background: ${val};` : "";
  }}

  border: ${({ borderColor }) => `1.5px solid ${borderColor || ""}`};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => `${borderRadius || "10px"}`};
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  font-size: ${({ fontSize }) => `${fontSize || "20px"}`};
  padding: ${({ padding }) => `${padding || "15px 70px"}`};
  margin: 0 10px;
  text-decoration: none;
  text-align: center;

  /* ✨ Hover micro-interactions */
  transition:
    transform 200ms ease,
    /*box-shadow 200ms ease,*/
    filter 200ms ease,
    background 200ms ease,
    color 200ms ease,
    border-color 200ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-2px);
    /*box-shadow: 0 10px 24px rgba(0,0,0,0.15);*/
  }
  &:active {
    transform: translateY(0);
    filter: brightness(0.98);
    /*box-shadow: 0 6px 16px rgba(0,0,0,0.12);*/
  }

  /* 💡 subtle “shine” sweep */
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,0.32),
      transparent
    );
    transform: translateX(-120%);
    transition: transform 300ms ease;
  }
  &:hover::before {
    transform: translateX(120%);
  }

  ${mobile} {
    font-size: 14px;
    width: 250px;
    padding: 12px 15px;
    margin: 5px;
  }
`;

export function SparklyButton(props) {
  const [hover, setHover] = useState(false);
  return (
    <Sparkles hide={!hover}>
      <Button
        // onMouseEnter={() => setHover(true)}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {props.children}
      </Button>
    </Sparkles>
  );
}

const SectionBoxStyled = styled.div`
  width: 50%;
  min-width: 760px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
  ${mobile} {
    width: 95%;
    min-width: 0;
  }
`;

export const SectionFillWidth = ({ children }) => {
  return <Fade>{children}</Fade>;
};

export const SectionBox = ({ children }) => {
  return (
    <Fade>
      <SectionBoxStyled>{children}</SectionBoxStyled>
    </Fade>
  );
};

export const SectionHeading = styled(NovaH2)`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  ${mobile} {
    font-size: 28px;
  }
  line-height: 135%;
  margin: 0;
  /* identical to box height, or 65px */
  letter-spacing: 0.05em;
`;

export const SectionSubHeading = styled.h2`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 135%;
  /* identical to box height, or 65px */

  letter-spacing: 0.05em;

  ${mobile} {
    font-size: 20px;
  }
`;

export const NovaLink = styled(Link)`
  color: #013668;
  text-decoration: none;
  border-bottom: ${({ underline }) =>
    underline ? "2px solid #013668" : "none"};
  &:hover {
    color: #013668;
  }
`;

export const NovaA = styled.a`
  /* base + theme vars */
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );

  position: relative;
  color: #000000;
  text-decoration: none;
  border-bottom: ${({ underline }) =>
    underline ? "2px solid #000000" : "none"};
  transition: color 200ms ease;

  /* Fallback hover color (for browsers without background-clip:text) */
  &:hover {
    color: #b78df2;
  }

  /* Gradient text on hover (where supported) */
  @supports (-webkit-background-clip: text) or (background-clip: text) {
    &:hover {
      background: var(--grad);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent; /* Safari/WebKit */
      color: transparent; /* others */
    }
  }

  /* Gradient underline on hover when underline=true */
  ${({ underline }) =>
    underline &&
    `
    &:hover {
      border-bottom: none; /* replace the solid underline */
    }
    &:hover::after {
      content: "";
      position: absolute;
      left: 0; right: 0;
      bottom: -2px;
      height: 2px;
      background: var(--grad);
      border-radius: 1px;
    }
  `}
`;

export const Img = styled.img`
  width: 100%;
  margin: 48px 0;
  max-height: ${({ maxHeight }) => maxHeight || "auto"};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  object-fit: cover;
  ${mobile} {
    margin: 32px 0;
  }
`;

export const Span = styled.span`
  font-family: InstrumentSans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  color: #ffffff;
`;

export const ListItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  text-indent: -1em;
  padding-left: 1em;
  &::before {
    content: "•\xa0\xa0";
  }
`;

const ArrowStyled = styled.b`
  color: #013668;
  font-family: Prompt;
  font-size: 24px;
  font-weight: 900;
  ${mobile} {
    font-size: 14px;
  }
`;
export const Arrow = () => {
  return <ArrowStyled>&#8594;&ensp;</ArrowStyled>;
};
