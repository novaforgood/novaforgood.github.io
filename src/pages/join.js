import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import LazyLoad from "react-lazyload";
import aboutleft from "../assets/aboutleft.svg";
import aboutleft2 from "../assets/aboutleft2.svg";
import aboutright2 from "../assets/aboutright2.svg";
import workleft2 from "../assets/workleft2.svg";
import workright from "../assets/workright.svg";
import workright2 from "../assets/workright2.svg";
import Layout from "../components/Layout";
import clouds from "../assets/clouds.png";
import {
  ListItem,
  NovaA,
  NovaDiv,
  NovaH1,
  NovaH2,
  NovaH4,
  NovaP,
  NovaSpacer,
  SectionBox,
} from "../components/PageAssets";
import ProjectDropdown, { ProjectDiv } from "../components/ProjectDropdown";
import SEO from "../components/SEO";
import "../styles/global.css";
import classNames from "classnames";

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

const MobileClouds = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const PageContainer = styled.div`
  min-height: 50vh;
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
  );
};
const Recruitment = ({ data }) => {
  const projectsData = data.allContentfulProjectCaseStudy.nodes;

  return (
    <Layout>
      <SEO metaTitle={"Nova | Join Us"} />
      <div className="min-h-screen w-screen bg-black px-12 flex flex-col items-center justify-center relative ">
        <h1
          className={classNames(
            "font-normal text-centerd font-display text-4xl"
            // "bg-gradient-to-r from-[#F855C4] to-[#EF751D] bg-clip-text text-transparent"
            // "md:text-2xl sm:text-2xl"
          )}
          style={{
            // gradient text effect
            background: "linear-gradient(90deg, #F855C4, #EF751D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          RECRUITMENT
        </h1>
        <p className="text-center text-white text-lg mt-4 font-body lg:w-1/2">
          At Nova, we’re building a team of developers and designers passionate
          about improving our communities through tech. We are so excited for
          you to join us this fall!
        </p>

        <ul className="text-white text-lg mt-8 font-body lg:w-1/2 pl-4 list-disc">
          <li>DUE BY FRIDAY, 10/4</li>
          <li>
            Make sure to follow us on{" "}
            <a
              href="https://www.instagram.com/novaforgood/"
              target="_blank"
              className="underline"
            >
              Instagram
            </a>{" "}
            to stay up to date on future recruitment announcements!
          </li>
        </ul>

        <a
          href="https://tinyurl.com/nova-f24app"
          target="_blank"
          className={classNames(
            " text-2xl mt-8 uppercase font-body"
            // "bg-gradient-to-r from-[#F855C4] to-[#EF751D] bg-clip-text text-transparent"
          )}
          style={{
            // gradient text effect
            background: "linear-gradient(90deg, #F855C4, #EF751D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          apply here
        </a>

        <div className="absolute bottom-8 left-8 z-50">
          <p className="text-white text-lg font-normal text font-body">
            2024-2025
          </p>
          <p className="text-white text-lg font-normal text font-body">
            “TO THE MOON & BACK”
          </p>
        </div>
      </div>
      {/* <PageContainer> */}
      {/* <SectionBox>
          <NovaSpacer y={64} />
          <NovaH1 center>recruitment</NovaH1>
          <NovaSpacer y={24} />
          <NovaP center>
            At Nova, we’re building a team of developers, designers, data
            analysts, product managers passionate about improving our
            communities through tech. We are so excited for you to join us this
            fall!
          </NovaP>
        </SectionBox> */}
      {/* fill out this{" "}<NovaA href = "https://docs.google.com/forms/d/e/1FAIpQLSfMp0p7tqPaNZqq-eQ3ery1VbtPNfn7Q0rvmOGwC6DG_oCreg/viewform" target="_blank" underline>interest form</NovaA>  */}{" "}
      {/* <SectionBox>
          <NovaSpacer y={64} />
          <NovaH2 center>fall 2024: to the moon & back</NovaH2>
          <NovaSpacer y={24} />
          <NovaH4 center>
            <NovaA href="https://tinyurl.com/nova-f24app">
              applications open now!
            </NovaA>
          </NovaH4>
          <NovaSpacer y={12} />
          <NovaP center>DUE BY FRIDAY, 10/4</NovaP>
          <NovaP center>
            Apply now @{" "}
            <NovaA
              href="https://tinyurl.com/nova-f24app"
              target="_blank"
              underline
              style={{ color: "#013668", borderBottomColor: "#013668" }}
            >
              https://tinyurl.com/nova-f24app
            </NovaA>{" "}
          </NovaP>
          <NovaP center>
            Make sure to follow us on{" "}
            <NovaA
              href="https://www.facebook.com/novaforgood"
              target="_blank"
              underline
              style={{ color: "#013668", borderBottomColor: "#013668" }}
            >
              Facebook
            </NovaA>{" "}
            and{" "}
            <NovaA
              href="https://www.instagram.com/novaforgood/"
              target="_blank"
              underline
              style={{ color: "#013668", borderBottomColor: "#013668" }}
            >
              Instagram
            </NovaA>{" "}
            to stay up to date on future recruitment announcements!
          </NovaP>

        </SectionBox> */}
      {/* <SectionBox>
          <NovaSpacer y={64} />
          <NovaH2>Links</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>
            <ListItem>
              <NovaA
                href="https://tinyurl.com/nova-fall2021app"
                target="_blank"
                underline
              >
                <b>Application</b>
              </NovaA>{" "}
              —{" "}
              <i>
                <b>Due:</b> Friday, 10/1 at 11:59pm PST!
              </i>
            </ListItem>

            <NovaSpacer y={12} />
            <ListItem>
              <NovaA href="https://fb.me/e/1n7cnmoMC" target="_blank" underline>
                <b>Infosession Facebook Event</b>
              </NovaA>{" "}
              — Don't miss out on our infosessions, as we will have super
              special guests from nonprofits to talk about our projects!{" "}
              <i>
                <b>Dates:</b> Sunday 9/26 from 5-6PM, Tuesday 9/28 from 8-9PM
              </i>
            </ListItem>
            <NovaSpacer y={12} />
            <ListItem>
              <NovaA
                href="https://tinyurl.com/nova-fall2021rsvp "
                target="_blank"
                underline
              >
                <b>Infosession RSVP</b>
              </NovaA>
            </ListItem>

            <NovaSpacer y={12} />
            <ListItem>
              <NovaA
                href="https://www.instagram.com/novaforgood/"
                underline
                target="_blank"
              >
                <b>Instagram</b>
              </NovaA>{" "}
              — We will be posting daily updates here during recruitment. Follow
              us!
            </ListItem>
          </NovaP>
          <NovaSpacer y={64} />
          <NovaH2>Ongoing Projects</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>Here's a glimpse at our current projects:</NovaP>
          <NovaSpacer y={36} />
          <ProjectDiv>
            {projectsData
              .filter((node) => !node.featured && node.inProgress)
              .sort((a, b) => (a.name < b.name ? 1 : -1))
              .map((node, i) => (
                <ProjectDropdown
                  data={node}
                  idx={i}
                  // open={selectedDropdown === i}
                  // onClick={() => {
                  //   if (selectedDropdown === i) setSelectedDropdown(-1);
                  //   else setSelectedDropdown(i);
                  // }}
                />
              ))}
          </ProjectDiv>
        </SectionBox> */}
      {/* <NovaSpacer y={24} /> */}
      {/* </PageContainer> */}
    </Layout>
  );
};

export default Recruitment;

export const query = graphql`
  query {
    allContentfulProjectCaseStudy {
      nodes {
        id
        slug
        name
        featured
        inProgress
        description {
          description
        }
      }
    }
  }
`;
