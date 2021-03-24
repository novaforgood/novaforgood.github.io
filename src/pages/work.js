import React, { useState } from "react"
import { graphql } from "gatsby"
import "../styles/global.css"
import Layout from "../components/Layout"
import CaseItem, { CaseDiv } from "../components/CaseItem"
import ProjectDropdown, { ProjectDiv } from "../components/ProjectDropdown"
import {
  NovaH1,
  NovaH2,
  SectionBox,
  NovaP,
  NovaSpacer,
} from "../components/PageAssets"
import workleft from "../assets/workleft.svg"
import workright from "../assets/workright.svg"
import workleft2 from "../assets/workleft2.svg"
import workright2 from "../assets/workright2.svg"
import styled from "@emotion/styled"
import SEO from "../components/SEO"

const mobile = `@media (max-width: 800px)`

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
`

const Work = ({ data, pageContext }) => {
  const [selectedDropdown, setSelectedDropdown] = useState(-1)

  const projectsData = data.allContentfulProjectCaseStudy.nodes;

  return (
    <Layout>
      <SEO metaTitle={"Nova | Our Work"} />
      <PageContainer>
        <NovaSpacer y={64} />
        <SectionBox>
          <NovaH1 center>
            Our Work
          </NovaH1>
          <NovaSpacer y={24} />
          <NovaP>
            Take a look at some of the projects we are working on now or have worked on in the past. 
            Whether they're web development, mobile development, data science, or design, our solutions 
            have been able to serve a wide variety of nonprofits.
          </NovaP>
          <NovaSpacer y={64} />
          <CaseDiv>
            {projectsData
              .filter(node => node.featured === true)
              .sort((a, b) => (a.name >= b.name ? 1 : -1)) // Distribution < Project Ropa LOLOL
              .map((node, idx) => (
                <React.Fragment key={idx}>
                  <CaseItem data={node} />
                </React.Fragment>
              ))}
          </CaseDiv>
          <NovaSpacer y={144} />
          <NovaH2>More of our work</NovaH2>
          <NovaSpacer y={36} />
          <ProjectDiv>
            {projectsData
              .filter(
                node => !node.featured
              )
              .map((node, i) => (
                <ProjectDropdown
                  data={node}
                  idx={i}
                  open={selectedDropdown === i}
                  onClick={() => {
                    if (selectedDropdown === i) setSelectedDropdown(-1)
                    else setSelectedDropdown(i)
                  }}
                />
              ))}
          </ProjectDiv>
        </SectionBox>
      </PageContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjectCaseStudy {
      nodes {
        id
        slug
        name
        featured
        description {
          description
        }
      }
    }
  }
`

export default Work
