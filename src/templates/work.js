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
  NovaA,
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

  const renderText = item => {
    var content = item.text
    var att
    for (att of item.atts) {
      switch (att.att) {
        case "b":
          content = <b>{content}</b>
          break
        case "a":
          content = (
            <NovaA underline href={att.value}>
              {content}
            </NovaA>
          )
      }
    }
    return <span>{content}</span>
  }

  var processedIndex = 0

  return (
    <Layout>
      <SEO metaTitle={"Nova | Our Work"} />
      <PageContainer>
        <NovaSpacer y={64} />
        <SectionBox>
          {data.notionPageNova.blocks.map((block, index) => {
            if (processedIndex > index) {
              return
            }
            processedIndex++

            if (!block.properties || block.properties.length === 0) {
              return
            }

            if (
              !block.properties[0].value ||
              block.properties[0].value.length === 0
            ) {
              return
            }
            const { text } = block.properties[0].value[0]
            switch (block.type) {
              case "header":
                return (
                  <>
                    <NovaH1 center>{text}</NovaH1>
                    <NovaSpacer y={24} />
                  </>
                )
              case "sub_header":
                return (
                  <>
                    <NovaH2>{text}</NovaH2>
                  </>
                )
              case "text":
                return (
                  <>
                    <NovaP>{block.properties[0].value.map(renderText)}</NovaP>
                  </>
                )
              case "image":
                const pic = data.notionPageNova.imageNodes.find(
                  v => v.imageUrl === text
                )
                const imageURL = pic.localFile.publicURL
                const title = pic.id
                return <img src={imageURL} alt={title} />
            }
          })}
          <NovaSpacer y={64} />
          <CaseDiv>
            {data.allNovaProjectsMetadata.nodes
              .filter(node => node.Case_Study === "Yes")
              .sort((a, b) => (a.Name >= b.Name ? 1 : -1)) // Distribution < Project Ropa LOLOL
              .map(node => (
                <CaseItem data={node} />
              ))}
          </CaseDiv>
          <NovaSpacer y={144} />
          <NovaH2>More of our work</NovaH2>
          <NovaSpacer y={36} />
          <ProjectDiv>
            {data.allNovaProjectsMetadata.nodes
              .filter(
                node => node.Case_Study === "No" && node.Publish === "Yes"
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
  query($pageId: String) {
    notionPageNova(pageId: { eq: $pageId }) {
      blocks {
        type
        properties {
          value {
            text
            atts {
              att
              value
            }
          }
        }
      }
      imageNodes {
        imageUrl
        localFile {
          publicURL
        }
        id
      }
      pageId
      title
    }
    allNovaProjectsMetadata {
      nodes {
        Name
        Slug
        Overview
        Case_Study
        Publish
      }
    }
  }
`

export default Work
