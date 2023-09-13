import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutleft2 from "../assets/aboutleft2.svg";
import aboutright2 from "../assets/aboutright2.svg";
import workleft2 from "../assets/workleft2.svg";
import workright from "../assets/workright.svg";
import workright2 from "../assets/workright2.svg";
import zoom from "../assets/zoom.jpg";
import Layout from "../components/Layout";
import {
  NovaA,
  NovaDiv,
  NovaH1,
  NovaLink,
  NovaP,
  NovaSpacer,
  SectionBox,
} from "../components/PageAssets";
import SEO from "../components/SEO";
import "../styles/global.css";

const mobile = `@media (max-width: 800px)`;

const PDiv = styled.div`
  margin: 0 auto;
  max-width: 700px;
  ${mobile} {
    max-width: 500px;
  }
`;

const NameA = styled(NovaA)`
  line-height: 140%;
`;

const CW = 300; // Card width

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
`;

const MemberCardContainer = styled("div")`
  max-width: ${CW}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

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
`;
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
`;

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
`;

const JoinDiv = styled.div`
  margin: 0 auto;
  display: inline-block;
  width: 45%;
  ${mobile} {
    width: 80%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

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
`;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const MemberCard = ({ name, imageURL, projectList, linkedin }) => {
  return (
    <MemberCardContainer>
      <MemberCardImageContainer>
        <MemberCardImage
          src={
            imageURL ||
            "https://image.shutterstock.com/image-vector/smile-icon-vector-face-emoticon-260nw-1721368459.jpg"
          }
        />
      </MemberCardImageContainer>
      <NovaSpacer y={CW / 12} />
      <NovaDiv center>
        <b>
          <NameA underline rel="noreferrer" target="_blank" href={linkedin}>
            {name}
          </NameA>
        </b>
      </NovaDiv>
      <NovaSpacer y={14} />
      <NovaDiv center>{projectList}</NovaDiv>
    </MemberCardContainer>
  );
};
const Team = (props) => {
  const memberData = shuffle(props.data.allContentfulMember.nodes);
  console.log(memberData);

  return (
    <Layout>
      <SEO metaTitle={"Nova | Meet the Team"} />
      <PageContainer>
        <SectionBox>
          <NovaSpacer y={64} />
          <NovaH1 center>meet the team</NovaH1>
          <NovaSpacer y={24} />
          <PDiv>
            <NovaP center>
              We are a close-knit group of CS, design, and business students at
              UCLA, each actively participating in outreach, problem-solving,
              and development.
            </NovaP>
          </PDiv>
        </SectionBox>
        <NovaSpacer y={96} />
        <SectionBox>
          <MemberCardLayout>
            {memberData
              .filter(
                (person) =>
                  person.name &&
                  person.name !== "Example Content" &&
                  person.name.length !== 0 &&
                  person.active
              )
              .map((person) => {
                console.log(person);
                const projects =
                  person.project_case_study &&
                  person.project_case_study.map((p) => p.name).join(", ");
                return (
                  <MemberCard
                    name={person.name}
                    imageURL={person.profilePicture.file.url}
                    // projectList={projects}
                    linkedin={person.linkedinURL}
                  />
                );
              })}
          </MemberCardLayout>
        </SectionBox>
        <NovaSpacer y={144} />
        <SectionBox>
          <a id="join">
            <NovaH1 center>join the team</NovaH1>
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
                Our Fall 2023 Recruitment events are coming up! Visit the{" "}
                <NovaLink underline to="/join">
                  recruitment page
                </NovaLink>{" "}
                for more information!
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

        <NovaSpacer y={144} />

        <SectionBox>
          <NovaH1 center>alumni</NovaH1>
          <NovaSpacer y={96} />
          <MemberCardLayout>
            {memberData
              .filter(
                (person) =>
                  person.name &&
                  person.name !== "Example Content" &&
                  person.name.length !== 0 &&
                  !person.active
              )
              .map((person) => {
                return (
                  <AlumniCard
                    name={person.name}
                    linkedin={person.linkedinURL}
                  />
                );
              })}
          </MemberCardLayout>
        </SectionBox>
        <NovaSpacer y={96} />
      </PageContainer>
    </Layout>
  );
};

const AlumniCard = ({ name, linkedin }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <NovaP center>
        <NovaA href={linkedin} target="_blank">
          <b>{name}</b>
        </NovaA>
      </NovaP>
    </div>
  );
};

export default Team;

export const query = graphql`
  query {
    allContentfulMember {
      nodes {
        active
        name
        linkedinURL
        role
        project_case_study {
          name
        }
        profilePicture {
          file {
            url
          }
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;
