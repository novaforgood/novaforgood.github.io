import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { mobile, NovaH1 } from "./PageAssets";
import Sparkles from "./Sparkle";

// First pass: keyframes for the text slider will be fixed, so if user
// were to add more elements, they would need to change the keyframes
// accordingly.
// Huge credits to W.S. Toh
// https://code-boxx.com/responsive-pure-css-text-slider/#sec-v

const DimensionedDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 66px;

  ${mobile} {
    height: 49px;
  }
`;

// Vertical slider (move up)
// Keeping just in case we want to revert.
// const SlideV = keyframes`
//   0% { bottom: 0; }
//   16% { bottom: 0; }
//   20% { bottom: 100%; }
//   36% { bottom: 100%; }
//   40% { bottom: 200%; }
//   56% { bottom: 200%; }
//   60% { bottom: 300%; }
//   76% { bottom: 300%; }
//   80% { bottom: 400%; }
//   100% { bottom: 400%; }
// `;

// Vertical slider (move down)
const SlideV = keyframes`
  0% { bottom: 400%; }
  16% { bottom: 400%; }
  20% { bottom: 300%; }
  36% { bottom: 300%; }
  40% { bottom: 200%; }
  56% { bottom: 200%; }
  60% { bottom: 100%; }
  76% { bottom: 100%; }
  80% { bottom: 0%; }
  100% { bottom: 0%; }
`;

// TODO: "for Good" horizontal re-centering

const VWrap = styled(DimensionedDiv)`
  overflow: hidden;
`;

const VMove = styled.div`
  position: relative;
  bottom: 0%;
  animation: ${SlideV} 12s forwards;
`;

// VSlide is left as a somewhat redundant component for better semantics
// and easier styling in the future.
const VSlide = styled(DimensionedDiv)``;

const verbs = ["Build", "Code", "Design", "Innovate", "Nova"];

const TextVSlider = (params) => {
  return (
    <VWrap>
      <VMove>
        {verbs.map((verb, i, a) => {
          return (
            // <VSlide as={NovaH1} center>
            //   <NovaH1 as center>{verb} for Good</NovaH1>
            // </VSlide>
            <VSlide as={NovaH1} center>
              {a[a.length - i - 1]} for Good
            </VSlide>
          );
        })}
      </VMove>
    </VWrap>
  );
};

export default TextVSlider;
