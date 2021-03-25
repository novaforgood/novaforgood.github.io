import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import zoom from "../assets/zoom.svg"
import {
  NovaSpacer,
  NovaH1,
  NovaDiv,
  NovaP,
  NovaA,
  SectionBox,
} from "../components/PageAssets"
import styled from "@emotion/styled"
import aboutleft from "../assets/aboutleft.svg"
import workright from "../assets/workright.svg"
import aboutleft2 from "../assets/aboutleft2.svg"
import aboutright2 from "../assets/aboutright2.svg"
import workleft2 from "../assets/workleft2.svg"
import workright2 from "../assets/workright2.svg"
import SEO from "../components/SEO"
import LazyLoad from "react-lazyload"
import "../styles/global.css"

const mobile = `@media (max-width: 800px)`

const PDiv = styled.div`
  margin: 0 auto;
  max-width: 700px;
  ${mobile} {
    max-width: 500px;
  }
`

const NameA = styled(NovaA)`
  line-height: 140%;
`

const CW = 300 // Card width

const MemberCardLayout = styled("div")`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-column-gap: 12%;
  grid-row-gap: 72px;
  grid-template-columns: 25% 25% 25%;

  ${mobile} {
    grid-row-gap: 50px;
    grid-column-gap: 8%;
  }
`

const MemberCardContainer = styled("div")`
  max-width: ${CW}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const MemberCardImageContainer = styled("div")`
  display: flex;
  /* width: 80%;
  padding-top: 80%; */
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 2px;
  object-fit: cover;

  /* transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);  */

  /* non-essential styling */
  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);

  ${mobile} {
    width: 100px;
    height: 100px;
  }
`
const MemberCardImage = styled("img")`
  object-fit: cover;
  height: 100%;
  width: 100%;
  /* display: flex;
  width: 150%;
  height: 150%;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg); 
  position: absolute;
  z-index: 10;
  object-fit: cover;
  top: -20%;
  left: -20%;
  pointer-events: none; */
`

const JoinContain = styled.div`
  margin: 0 auto;
  text-align: center;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  ${mobile} {
    display: inline-grid;
    grid-template-columns: 100%;
    grid-row-gap: 48px;
  }
`

const JoinDiv = styled.div`
  margin: 0 auto;
  display: inline-block;
  width: 45%;
  ${mobile} {
    width: 80%;
  }
`

const Img = styled.img`
  width: 100%;
`

const PageContainer = styled.div`
  height: 100vh;
  position: relative;
  text-align: center;
  background-image: url(${workright}), url(${aboutleft}), url(${workright2}),
    url(${aboutleft2}), url(${aboutright2}), url(${workleft2}),
    url(${aboutleft}), url(${workright});
  background-repeat: no-repeat;
  background-position: left 96px, right 96px, -144px 33%, right -48px top 33%,
    -96px 70%, right -144px top 70%, left bottom -288px, right bottom -288px;
  ${mobile} {
    background: none;
  }
`

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

const MemberCard = ({ name, imageURL, role, linkedin }) => {
  return (
    <MemberCardContainer>
      <MemberCardImageContainer>
        <LazyLoad height={"100%"} once offset={100}>
          <MemberCardImage
            src={
              imageURL ||
              "https://image.shutterstock.com/image-vector/smile-icon-vector-face-emoticon-260nw-1721368459.jpg"
            }
          />
        </LazyLoad>
      </MemberCardImageContainer>
      <NovaSpacer y={CW / 12} />
      <NovaDiv center>
        <b>
          <NameA underline rel="noreferrer" target="_blank" href={linkedin}>
            {name}
          </NameA>
        </b>
      </NovaDiv>
      <NovaSpacer y={20} />
      <NovaDiv center>{role}</NovaDiv>
    </MemberCardContainer>
  )
}
const Recruitment = props => {

  return (
    <Layout>
      <SEO metaTitle={"Nova | Recruitment"} />
      <PageContainer>
        <SectionBox>
          <NovaSpacer y={64} />
          <NovaH1 center>Spring 2021 Recruitment</NovaH1>
          <NovaSpacer y={24} />
          <PDiv>
            <NovaP center>
              Information coming soon.
            </NovaP>
          </PDiv>
        </SectionBox>
       </PageContainer>
    </Layout>
  )
}

export default Recruitment

