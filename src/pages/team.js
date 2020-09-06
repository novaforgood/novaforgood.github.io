import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { parseImageUrl } from "notabase/src/utils"
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
  width: 80%;
  padding-top: 80%;
  overflow: hidden;
  border-radius: 20%;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Safari and Chrome */

  /* non-essential styling */
  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
`
const MemberCardImage = styled("img")`
  display: flex;
  width: 150%;
  height: 150%;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg); /* IE 9 */
  -webkit-transform: rotate(-45deg); /* Safari and Chrome */
  position: absolute;
  z-index: 10;
  object-fit: cover;
  top: -20%;
  left: -20%;
  pointer-events: none;
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

const MemberCard = ({ name, interests, imageURL, role, linkedin }) => {
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
      <NovaSpacer y={CW / 6} />
      <NovaDiv center>
        <b>
          <NameA underline rel="noreferrer" target="_blank" href={linkedin}>
            {name}
          </NameA>
        </b>
      </NovaDiv>
      <NovaSpacer y={10} />
      <NovaDiv center>{role}</NovaDiv>
    </MemberCardContainer>
  )
}
const Team = props => {
  console.log(props)
  const {
    data: { allTeamMembers },
  } = props

  const people = shuffle([...allTeamMembers.nodes])
  return (
    <Layout>
      <SEO metaTitle={"Nova | Meet the Team"} />
      <PageContainer>
        <SectionBox>
          <NovaSpacer y={64} />
          <NovaH1 center>Meet the Team</NovaH1>
          <NovaSpacer y={24} />
          <PDiv>
            <NovaP center>
              We are a close-knit group of CS, design, and business students at
              UCLA, each actively participating in outreach, problem-solving,
              and development. Come join us!
            </NovaP>
          </PDiv>
        </SectionBox>
        <NovaSpacer y={96} />
        <SectionBox>
          <MemberCardLayout>
            {people
              .filter(
                person =>
                  person.Name &&
                  person.Name !== "Example Content" &&
                  person.Name.length !== 0
              )
              .map(person => {
                let imageURL =
                  person.Picture_of_Yourself__professional__high_res__facing_the_camera_
                if (imageURL) {
                  imageURL = parseImageUrl(imageURL[0])
                }
                return (
                  <MemberCard
                    name={person.Name}
                    interests={person.Column}
                    imageURL={imageURL}
                    role={person.Role}
                    linkedin={person.LinkedIn_URL}
                  />
                )
              })}
          </MemberCardLayout>
        </SectionBox>
        <NovaSpacer y={144} />
        <SectionBox>
          <a id="join">
            <NovaH1 center>Join the Team</NovaH1>
          </a>
          <NovaSpacer y={24} />
          <JoinContain>
            <JoinDiv>
              <NovaP>
                We're always looking to grow the family with fellow UCLA
                students eager to use their skills to do good. Don't worry too
                much about experience &#8212; we like to see drive and
                potential.
              </NovaP>
              <NovaSpacer y={24} />
              <NovaP>
                Our next recruitment cycle starts{" "}
                <b>Week 2 of Fall Quarter 2020</b>. To stay updated, keep up
                with us on{" "}
                <NovaA underline href="https://www.facebook.com/novaforgood">
                  Facebook
                </NovaA>
                .
              </NovaP>
            </JoinDiv>
            <JoinDiv>
              <Img src={zoom} alt="remote meetings" />
            </JoinDiv>
          </JoinContain>
          <NovaSpacer y={20} />
          {/* <Button backgroundColor="#CFCFCF" textColor="#000000">
          Apply Here
        </Button> */}
        </SectionBox>
      </PageContainer>
    </Layout>
  )
}

export default Team

export const query = graphql`
  query {
    allTeamMembers {
      nodes {
        Column
        Future_Career_Goals
        LinkedIn_URL
        Name
        Picture_of_Yourself__professional__high_res__facing_the_camera_
        _1_Sentence_Bio_for_Prospective_Members_and_Nonprofits
        Role
      }
    }
  }
`
