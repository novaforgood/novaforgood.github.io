import React from "react";
import styled from "@emotion/styled";
import { NovaP, NovaLink, NovaSpacer } from "./PageAssets";
import { FaExternalLinkAlt } from "react-icons/fa";
import { isMobile } from "react-device-detect";

const mobile = `@media (max-width: 800px)`;

const iconSize = isMobile ? 12 : 18;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid #e9bfe3;
`;

const ContainDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 150px auto 24px;
  grid-column-gap: 30px;
  ${mobile} {
    grid-template-columns: 74px auto 16px;
    grid-column-gap: 20px;
  }
`;

const LeftDiv = styled.div`
  place-self: start;
  font-family: SpaceGrotesk;
  font-size: 20px;
  text-align: left;
  ${mobile} {
    font-size: 14px;
  }
`;

const MiddleDiv = styled.div`
  place-self: left;
  ${mobile} {
  }
`;

const RightDiv = styled.div`
  place-self: right;
`;

const SubheaderContain = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  grid-column-gap: 30px;
  ${mobile} {
    grid-template-columns: 74px auto;
    grid-column-gap: 20px;
  }
`;

const Subheader = styled.div`
  font-family: SpaceGrotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  color: #ffffff;
  ${mobile} {
    font-size: 12px;
  }
`;

export function ProjectDiv({ children }) {
  return (
    <>
      <SubheaderContain>
        <Subheader>PARTNER</Subheader>
        <Subheader>PROJECT DESCRIPTION</Subheader>
      </SubheaderContain>
      {children}
      <Hr />
    </>
  );
}

// const Description = styled(NovaP)`
//   width: 70%;
//   display: inline;
//   /* white-space: ${({ extend }) => (extend ? "normal" : "nowrap")};
//   text-overflow: ${({ extend }) => (extend ? "clip" : "ellipsis")};
//   overflow: ${({ extend }) => (extend ? "visible" : "hidden")}; */
//   /* transform: ${({ extend }) => (extend ? "scaleY(1)" : "scaleY(0)")};  */
//   /* height: ${({ extend }) => (extend ? "auto" : "0px")}; */
//   height: auto;
//   overflow: hidden;
//   /* transform-origin: top;
//   transition: transform 0.26s ease; */

// 	${mobile} {
// 		width: 100%;
// 	}
// `

/*
const Body = styled.div`
  max-height: ${({ open, maxHeight }) => (open ? `${maxHeight}px` : "0px")};
  transition: max-height 0.3s ease-out;
  -moz-transition: max-height 0.3s ease-out;
  -webkit-transition: max-height 0.3s ease-out;
  -o-transition: max-height 0.3s ease-out;
  -ms-transition: max-height 0.3s ease-out;
  overflow: hidden;
`
*/

export default ({ data, onClick, open, idx }) => {
  const { name, description, slug } = data;

  // let ImageURL = parseImageUrl(Image[0], 1000)
  // const [maxHeight, setMaxHeight] = useState(0)
  // useEffect(() => {
  //   let el = document.getElementById(`accordion_${idx}`)
  //   setMaxHeight(el.scrollHeight + el.offsetHeight)
  // }, [])

  return (
    <div>
      <Hr />
      <NovaSpacer y={12} />

      <ContainDiv>
        <LeftDiv>
          <b>{name}</b>
        </LeftDiv>
        <MiddleDiv>
          <NovaP>{description && description.description}</NovaP>
        </MiddleDiv>
        <RightDiv>
          <NovaLink to={`/work/${slug}`}>
            <FaExternalLinkAlt size={iconSize} />
          </NovaLink>
        </RightDiv>
        {/* <Body open={open} maxHeight={maxHeight} id={`accordion_${idx}`}>
          <Img src={ImageURL} onLoad={() => {}}></Img>
        </Body> */}
      </ContainDiv>

      <NovaSpacer y={12} />
    </div>
  );
};
