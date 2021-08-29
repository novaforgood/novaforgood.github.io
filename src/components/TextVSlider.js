import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { mobile, NovaH1 } from "./PageAssets";

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

const SlideV = keyframes`
  0% { bottom: 0; }
  18% { bottom: 0; }
  20% { bottom: 100%; }
  38% { bottom: 100%; }
  40% { bottom: 200%; }
  58% { bottom: 200%; }
  60% { bottom: 300%; }
  78% { bottom: 300%; }
  80% { bottom: 400%; }
  100% { bottom: 400%; }
`;

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
        {verbs.map((verb) => {
          return (
            // <VSlide as={NovaH1} center>
            //   <NovaH1 as center>{verb} for Good</NovaH1>
            // </VSlide>
            <VSlide as={NovaH1} center>
              {verb} for Good
            </VSlide>
          );
        })}
      </VMove>
    </VWrap>
  );
};

export default TextVSlider;
