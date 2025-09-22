import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import "../styles/global.css";
import Layout from "../components/Layout";
import CaseItem, { CaseDiv } from "../components/CaseItem";
import coloredstars from "../assets/coloredstars.svg";
import ProjectDropdown, { ProjectDiv } from "../components/ProjectDropdown";
import {
  NovaH1,
  NovaH2,
  NovaSub,
  SectionBox,
  NovaP,
  NovaSpacer,
} from "../components/PageAssets";
import team from "../assets/team.jpg";
import workleft from "../assets/workleft.svg";
import workright from "../assets/workright.svg";
import workleft2 from "../assets/workleft2.svg";
import workright2 from "../assets/workright2.svg";
import styled from "@emotion/styled";
import SEO from "../components/SEO";

const mobile = `@media (max-width: 800px)`;

const PageContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${workleft}), url(${workright}), url(${workleft2}),
    url(${workright2});
  background-repeat: no-repeat;
  background-position: left 5%, left bottom, right -100px top 5%, right bottom;
  ${mobile} {
    background: none;
  }
`;

const ColoredStars = styled.div`
  position: absolute;
  z-index: 2; /* under spotlight + text */
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

const ProjectsWrap = styled.section`
  text-align: center;
`;

// Title styled like NovaSub but sized for the section
const ProjectsTitle = styled(NovaSub)`
  margin: 0;
  font-size: clamp(40px, 10vw, 120px);
  line-height: 0.9;
  white-space: normal; /* allow wrapping for long words here */
`;

// Subtitle under title
const ProjectsSubtitle = styled(NovaP)`
  max-width: 1000px;
  margin: 16px auto 40px;
`;

// Grid of cards
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 3vw, 32px);
  justify-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Card
const ProjectCard = styled(Link)`
  width: 270px;
  color: inherit;
  text-decoration: none;

  /* lift on hover */
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:hover {
    transform: translateY(-3px);
  }
`;

// Image block (1:1), rounded + black stroke like mock
const ProjectImage = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 22px;
  background: ${({ src }) =>
    src ? `url(${src}) center / cover no-repeat` : `#0e4a78`};
  /*box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);*/
`;

// Title + blurb under image
const ProjectName = styled.div`
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: clamp(20px, 2.2vw, 28px);
  margin-top: 18px;
`;

const ProjectDesc = styled(NovaP)`
  max-width: 28ch;
  margin: 8px auto 0;
  opacity: 0.9;
`;

const Work = ({ data, pageContext }) => {
  const [selectedDropdown, setSelectedDropdown] = useState(-1);

  const projectsData = data.allContentfulProjectCaseStudy.nodes;

  return (
    <Layout>
      <SEO metaTitle={"Nova | Our Work"} />
      <PageContainer>
        <NovaSpacer y={64} />
        <ColoredStars />

        <SectionBox>
          <ProjectsWrap>
            <ProjectsTitle center>Our Work</ProjectsTitle>
            <ProjectsSubtitle center>
              Take a look at some of the projects we are working on now or have
              worked on in the past. Whether they're web development, mobile
              development, data science, or design, our solutions have been able
              to serve a wide variety of nonprofits.{" "}
            </ProjectsSubtitle>

            <ProjectsGrid>
              {(data.allContentfulProjectCaseStudy.nodes || [])
                .filter((n) => n.featured) // or slice(0,3)
                .slice(0, 3)
                .map((n, i) => {
                  console.log(n);
                  const imgSrc = n?.preview?.localFile?.publicURL; // placeholder image import
                  const desc =
                    n.description?.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum maximus risus ut.";
                  return (
                    <ProjectCard key={n.id} to={`/work/${n.slug}`}>
                      <ProjectImage src={imgSrc} />
                      <ProjectName>{n.name}</ProjectName>
                      <ProjectDesc>{desc}</ProjectDesc>
                    </ProjectCard>
                  );
                })}
            </ProjectsGrid>

            <NovaSpacer y={24} />
          </ProjectsWrap>

          <NovaSpacer y={144} />
          <NovaSub>... and more!</NovaSub>
          <NovaSpacer y={36} />
          <ProjectDiv>
            {projectsData
              .filter((node) => !node.featured && !node.inProgress)
              .map((node, i) => (
                <ProjectDropdown
                  data={node}
                  idx={i}
                  open={selectedDropdown === i}
                  onClick={() => {
                    if (selectedDropdown === i) setSelectedDropdown(-1);
                    else setSelectedDropdown(i);
                  }}
                />
              ))}
          </ProjectDiv>
        </SectionBox>
        <NovaSpacer y={144} />
      </PageContainer>
    </Layout>
  );
};

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
        preview {
          # choose one or more of these depending on how you render images
          localFile {
            publicURL
          } # if you use plain <img> or bg url
          file {
            url
          } # CDN url fallback (prefix with https:)
        }
      }
    }
  }
`;

export default Work;
