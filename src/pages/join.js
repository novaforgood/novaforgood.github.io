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
  NovaSub,
  NovaH1,
  NovaH2,
  NovaH4,
  NovaP,
  SectionFillWidth,
  NovaSpacer,
  SectionBox,
} from "../components/PageAssets";
import ProjectDropdown, { ProjectDiv } from "../components/ProjectDropdown";
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
/* ===== Recruitment Timeline styles ===== */
const TimelineWrap = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(32px, 6vw, 64px) clamp(16px, 4vw, 24px);
  text-align: left;
`;

const TimelineTitle = styled(NovaSub)`
  text-align: center;
  margin: 0 auto;
  font-size: clamp(44px, 7vw, 124px);
  line-height: 0.9;
  white-space: normal;

  ${mobile} {
    margin-left: 0;
  }
`;

const TimelineDesc = styled(NovaP)`
  max-width: 820px;
  margin: clamp(12px, 2.2vw, 24px) auto clamp(24px, 4vw, 48px);
`;

const TLGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* left label, right details */
  gap: clamp(18px, 2.6vw, 28px) clamp(20px, 8vw, 140px);
  align-items: start;

  ${mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* Left column label */
const TLLabel = styled.div`
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: clamp(22px, 3.2vw, 40px);
  color: #000;
`;

/* Right column details */
const TLDetail = styled.div`
  text-align: right;
  color: #000;
  ${mobile} {
    text-align: left;
  }
`;

const TLStrong = styled.div`
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(16px, 2.2vw, 22px);
  font-weight: 700;
`;

const TLSub = styled.div`
  font-family: InstrumentSans, system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-size: clamp(14px, 1.8vw, 18px);
  opacity: 0.9;
`;

const TLEmph = styled.div`
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: clamp(22px, 3.2vw, 40px);
  color: #b78df2;
`;

const TLLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

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
      <PageContainer>
        <SectionBox>
          <NovaSpacer y={64} />
          <NovaH1 center>Recruitment</NovaH1>
          <NovaSpacer y={24} />
          <NovaP center>
            At Nova, we’re building a team of developers, designers, data
            analysts, product managers passionate about improving our
            communities through tech. We are so excited for you to join us this
            fall!
            {/* fill out this{" "}<NovaA href = "https://docs.google.com/forms/d/e/1FAIpQLSfMp0p7tqPaNZqq-eQ3ery1VbtPNfn7Q0rvmOGwC6DG_oCreg/viewform" target="_blank" underline>interest form</NovaA>  */}{" "}
          </NovaP>
        </SectionBox>
        {/* --- Recruitment Timeline --- */}
        <SectionBox>
          <TimelineWrap>
            <NovaSub center>Fall 2025</NovaSub>
            <TimelineTitle>Chase the Horizon</TimelineTitle>
            <TimelineDesc>
              Interested in joining Nova? Here are the key dates for this cycle.
            </TimelineDesc>

            <TLGrid>
              {/* Row 1 */}
              <TLEmph>App Opens</TLEmph>
              <TLDetail>
                <TLStrong>Tues, 9/23 | 5PM</TLStrong>
                <TLSub>
                  <TLLink
                    href="https://tinyurl.com/nova2526"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tinyurl.com/nova2526
                  </TLLink>
                </TLSub>
              </TLDetail>

              {/* Row 2 */}
              <TLLabel>Infosesh #1</TLLabel>
              <TLDetail>
                <TLStrong>Tues, 9/30 | 8PM</TLStrong>
                <TLSub>in-person @ MS 5147</TLSub>
              </TLDetail>

              {/* Row 3 */}
              <TLLabel>Infosesh #2</TLLabel>
              <TLDetail>
                <TLStrong>Wed, 10/1 | 7PM</TLStrong>
                <TLSub>on Zoom</TLSub>
              </TLDetail>

              {/* Row 4 */}
              <TLEmph>App Due</TLEmph>
              <TLDetail>
                <TLStrong>Fri, 10/3 | 11:59PM</TLStrong>
              </TLDetail>

              {/* Row 5 */}
              <TLLabel>Meet &amp; Greet</TLLabel>
              <TLDetail>
                <TLStrong>Tues, 10/7</TLStrong>
                <TLSub>invite only</TLSub>
              </TLDetail>

              {/* Row 6 */}
              <TLLabel>Interview</TLLabel>
              <TLDetail>
                <TLStrong>10/13–16</TLStrong>
                <TLSub>invite only</TLSub>
              </TLDetail>
            </TLGrid>
          </TimelineWrap>
        </SectionBox>

        <SectionBox>
          <NovaSpacer y={64} />
          {/* <NovaH2 center>fall 2024: to the moon & back</NovaH2>
          <NovaSpacer y={24} />
          <NovaH4 center>applications open</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center>SEPTEMBER 23 | 2PM</NovaP>*/}
          {/* <NovaP center>
            Apply now @{" "}
            <NovaA
              href="https://tinyurl.com/nova-f23app"
              target="_blank"
              underline
              style={{ color: "#013668", borderBottomColor: "#013668" }}
            >
              https://tinyurl.com/nova-f23app
            </NovaA>{" "}
          </NovaP> */}
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
          <NovaSpacer y={64} />

          {/* uncomment this when apps open:  */}
          {/* <NovaSpacer y={24} />
          <NovaH4 center>infosession #1</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center> OCTOBER 1 | 7PM</NovaP>
          <NovaP center>
            Online @{" "}
            <NovaA
              href="https://tinyurl.com/nova-f23info"
              target="_blank"
              underline
              style={{ color: "#013668", borderBottomColor: "#013668" }}
            >
              https://tinyurl.com/nova-f23info
            </NovaA>{" "}
          </NovaP>
          <NovaSpacer y={24} />
          <NovaH4 center>infosession #2</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center> OCTOBER 3 | 8PM</NovaP>
          <NovaP center>In-person @ Startup UCLA (203 Covel Commons)</NovaP>
          <NovaSpacer y={24} />
          <NovaH4 center>applications due</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center> OCTOBER 6 | 11:59PM</NovaP>
          <NovaP center>
            The application is your chance to show us who you are and what
            you're passionate about!
          </NovaP>
          <NovaSpacer y={24} />
          <NovaH4 center>meet and greet</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center> OCTOBER 10 | 8PM</NovaP>
          <NovaP center>Invite only</NovaP>
          <NovaSpacer y={24} />
          <NovaH4 center>interviews</NovaH4>
          <NovaSpacer y={12} />
          <NovaP center> OCTOBER 15-20</NovaP>
          <NovaP center>Invite only</NovaP> */}

          {/* <NovaSpacer y={64} />
          <NovaH2>Links</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>
            <ListItem>
              <NovaA
                href="https://tinyurl.com/nova-fall2022app"
                target="_blank"
                underline
              >
                <b>Application</b>
              </NovaA>{" "}
              —{" "}
              <i>
                <b>Due:</b> Monday, 10/3 at 11:59pm PST!
              </i>
            </ListItem>
            <NovaSpacer y={12} />
            <ListItem>
              <NovaA
                href="https://tinyurl.com/nova-fall2022rsvp "
                target="_blank"
                underline
              >
                <b>Infosession RSVP</b>
              </NovaA>
            </ListItem>
            <NovaSpacer y={12} />
            <ListItem>
              <NovaA
                href="https://ucla.zoom.us/j/92038295876?pwd=cHlnQmdIYjVoTlVreCsySmNIemNIUT09"
                target="_blank"
                underline
              >
                <b>Infosession #1</b>
              </NovaA>{" "}
              — <i>Sunday, 9/25 from 7-8pm PST [Zoom] </i>
            </ListItem>
            <NovaSpacer y={12} />
            <ListItem>
              <NovaA href="https://fb.me/e/1n7cnmoMC" target="_blank" underline>
                <b>Infosession #2</b>
              </NovaA>{" "}
              —{" "}
              <i>
                Tuesday, 9/27 from 8-9pm PST [Startup UCLA | 203 Covel Commons]{" "}
              </i>
            </ListItem>
          </NovaP> */}
          {/* <NovaSpacer y={64} /> */}
          {/* <NovaH2>Ongoing Projects</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>Here's a glimpse at our current projects:</NovaP>
          <NovaSpacer y={36} /> */}
          {/* <ProjectDiv>
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
          </ProjectDiv> */}
        </SectionBox>
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
      </PageContainer>
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
