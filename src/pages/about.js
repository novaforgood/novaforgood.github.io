import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import {
  NovaH1,
  SectionBox,
  NovaSub,
  NovaP,
  NovaLink,
  NovaA,
  NovaSpacer,
} from "../components/PageAssets";
import coloredstars from "../assets/coloredstars.svg";
import styled from "@emotion/styled";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import aboutleft2 from "../assets/aboutleft2.svg";
import aboutright2 from "../assets/aboutright2.svg";
import pic1 from "../assets/devsnova.jpg";
import pic2 from "../assets/willieholdsstar.jpg";
import pic3 from "../assets/heartstgt.jpg";
import pic4 from "../assets/designerstar.jpg";
import SEO from "../components/SEO";
import "../styles/global.css";

const mobile = `@media (max-width: 800px)`;

const ImageDiv = styled.div`
  margin: 72px 0 48px 0;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8px;
  ${mobile} {
    grid-template-columns: 100%;
    width: 90%;
    margin-top: 24px;
    grid-row-gap: 24px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  ${mobile} {
    height: auto;
  }
`;

const PageContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${aboutleft}), url(${aboutright}), url(${aboutleft2}),
    url(${aboutright2});
  background-repeat: no-repeat;
  background-position: left 10%, right 10%, left bottom, right bottom;
  ${mobile} {
    background: none;
  }
`;
const ColoredStars = styled.div`
  position: absolute;
  z-index: -1; /* under spotlight + text */
  left: 10%;
  top: 20%; /* your offset */
  width: 80%;
  height: 90%;
  pointer-events: none;

  /* stars image */
  background: url(${coloredstars}) center / contain no-repeat;

  @media (max-width: 800px) {
    /* smaller, slightly lower on mobile (tweak to taste) */
  }
`;

/* wrapper for the whole about content (wider than SectionBox + left-aligned) */
const AboutWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 48px) clamp(16px, 4vw, 24px);
  text-align: left;
`;

/* big section title — reuse NovaSub feel but as <h1> */
const StoryTitle = styled(NovaSub)`
  margin: 0 0 clamp(12px, 1.8vw, 18px);
  font-size: clamp(40px, 10vw, 120px); /* huge like the mock */
  line-height: 0.9;
  white-space: normal; /* allow wrapping */
`;

/* shared paragraph stack under titles */
const Blurb = styled(NovaP)`
  max-width: 48ch;
`;

/* media block */
const StoryImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  border: 1.5px solid #000;
  background: #d9d9d9;
`;

/* first 2-col section: text left, image right */
const GridTwo = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  /*align-items: start;*/
  gap: clamp(16px, 3vw, 40px);
  margin: clamp(16px, 4vw, 56px) 0;

  ${mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

/* second 2-col section: image left, text right */
const GridTwoAlt = styled(GridTwo)`
  grid-template-columns: 1fr 1.1fr;
`;

const About = ({ data, pageContext }) => {
  const renderText = (item) => {
    var content = item.text;
    var att;
    for (att of item.atts) {
      switch (att.att) {
        case "b":
          content = <b>{content}</b>;
          break;
        case "a":
          if (att.value && att.value.startsWith("/")) {
            content = (
              <NovaLink underline to={att.value}>
                {content}
              </NovaLink>
            );
          } else {
            content = (
              <NovaA underline href={att.value}>
                {content}
              </NovaA>
            );
          }
      }
    }
    return <span>{content}</span>;
  };

  var processedIndex = 0;

  var prevBlock = "";

  return (
    <Layout>
      <SEO metaTitle={"Nova | About"} />
      <PageContainer>
        <AboutWrap>
          {/* Grid #1: text left, image right */}
          <GridTwo>
            <ColoredStars />
            <div>
              <NovaSpacer y={100} />
              <StoryTitle>Our Story</StoryTitle>
              <Blurb>
                We were founded in November 2018, when our co-founders—Bryan,
                Jessica, Max, and Stephanie—wanted to use their technical skills
                to make an active impact in the LA community.
              </Blurb>
              <NovaSpacer y={12} />
              <Blurb>
                In the coming weeks, they cold-emailed nonprofits across the
                city, seeking out problems that technology could tackle.
              </Blurb>
            </div>

            <div>
              <StoryImage src={pic1} alt="Nova team working together" />
            </div>
          </GridTwo>

          {/* Grid #2: image left, copy right */}
          <GridTwoAlt>
            <div>
              <StoryImage src={pic3} alt="Nova volunteers and partners" />
            </div>

            <div>
              <Blurb>
                It’s this constant desire to learn and create that has brought
                together <b>40+ committed members</b> working year-round on
                projects to help nonprofits serve their communities more
                effectively.
              </Blurb>
              <NovaSpacer y={12} />
              <Blurb>
                We are a close-knit group of CS, design, and business students
                at UCLA, each actively participating in outreach,
                problem-solving, and development.
              </Blurb>
            </div>
          </GridTwoAlt>

          {/* Optional: one more alternating row if you want two images like the mock */}
          <GridTwo>
            <ColoredStars />
            <div>
              <Blurb>
                We strive to understand the reality of under-resourced
                communities by working closely with nonprofits. We represent an
                ambitious, fast-moving, and creative team aiming to make a
                lasting impact.
              </Blurb>
              <NovaSpacer y={12} />
              <Blurb>
                We believe that <b>anyone</b> can help bring change to the
                community. We are Nova.
              </Blurb>
            </div>

            <div>
              <StoryImage src={pic4} alt="Design review with the Nova team" />
            </div>
          </GridTwo>
        </AboutWrap>
      </PageContainer>
    </Layout>
  );
};

// export const query = graphql`

// `

export default About;
