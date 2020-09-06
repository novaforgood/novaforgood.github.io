import styled from "@emotion/styled"
import { Link } from "gatsby"
import React, { useState } from "react"
import Sparkles from "./Sparkle"
import Fade from "react-reveal/fade"

const fonts = {
  main: "Prompt",
}

const mobile = `@media (max-width: 800px)`

export const NovaH1 = styled.div`
  font-family: ${fonts.main};
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 135%;
  /* identical to box height, or 65px */

  text-align: ${({ center }) => (center ? "center" : "left")};
  letter-spacing: 0.05em;

  ${mobile} {
    font-size: 32px;
  }
`
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
  color: ${({ color }) => color || "white"};

  ${mobile} {
    font-size: 24px;
  }
`

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
`

export const NovaDiv = styled.div`
  font-family: Rubik;
  line-height: ${({ lineHeight }) => `${lineHeight || "100%"}`};
  font-size: ${({ fontSize }) => `${fontSize || 20}px`};
  text-align: ${({ center }) => (center ? "center" : "left")};

  ${mobile} {
    font-size: ${({ fontSize }) => `${(2 / 3) * fontSize || 12}px`};
  }
`

export const NovaSpacer = styled.div`
  width: 100%;
  height: ${({ y }) => `${y}`}px;
  ${mobile} {
    height: ${({ mobileY, y }) => `${mobileY || (2 / 3) * y}`}px;
  }
`

export const MainBox = styled.div`
  margin-top: 100px;
  width: 70%;
  min-width: 760px;
  margin: 0 auto;

  ${mobile} {
    width: 95%;
    min-width: 0;
  }
`

export const NovaP = styled.p`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  width: ${({ width }) => width || "auto"};
  /* or 38px */
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: #ebebeb;
  margin: 0;
  ${mobile} {
    font-size: 16px;
  }
`

export const Button = styled(Link)`
  color: ${({ textColor }) => `${textColor || "#FFFFFF"}`};
  background-color: ${({ backgroundColor }) =>
    `${backgroundColor || "#FFC650"}`};
  border: ${({ borderColor }) => `1.5px solid ${borderColor || "#000000"}`};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => `${borderRadius || "10px"}`};
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  line-height: 160%;
  font-size: ${({ fontSize }) => `${fontSize || "20px"}`};
  padding: ${({ padding }) => `${padding || "15px 70px"}`};
  margin: 0 10px;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  ${mobile} {
    font-size: 14px;
    width: 250px;
    padding: 12px 15px;
    margin: 5px;
  }
`

export function SparklyButton(props) {
  const [hover, setHover] = useState(false)
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
  )
}

const SectionBoxStyled = styled.div`
  width: 50%;
  min-width: 760px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 1);
  ${mobile} {
    width: 95%;
    min-width: 0;
  }
`

export const SectionBox = ({ children }) => {
  return (
    <Fade>
      <SectionBoxStyled>{children}</SectionBoxStyled>
    </Fade>
  )
}

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
`

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
`

export const NovaLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  border-bottom: ${({ underline }) =>
    underline ? "2px solid #FFC650" : "none"};
  &:hover {
    color: #ffc650;
  }
`

export const NovaA = styled.a`
  color: #ffffff;
  text-decoration: none;
  border-bottom: ${({ underline }) =>
    underline ? "2px solid #FFC650" : "none"};

  &:hover {
    color: #ffc650;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 48px 0;
  max-height: ${({ maxHeight }) => maxHeight || "auto"};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  object-fit: cover;
  ${mobile} {
    margin: 32px 0;
  }
`

export const Span = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */
  color: #d7a3e1;
`

export const ListItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  text-indent: -1em;
  padding-left: 1em;
  &::before {
    content: "•\xa0\xa0";
  }
`

const ArrowStyled = styled.b`
  color: #ffc650;
  font-family: Prompt;
  font-size: 24px;
  font-weight: 900;
  ${mobile} {
    font-size: 14px;
  }
`
export const Arrow = () => {
  return <ArrowStyled>&#8594;&ensp;</ArrowStyled>
}
