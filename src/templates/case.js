import React from "react"
import Layout from "../components/Layout.js"
import { graphql } from "gatsby"
import {
  NovaH1,
  NovaH2,
  NovaH4,
  NovaSpacer,
  SectionBox,
  NovaP,
  NovaA,
  NovaLink,
  ListItem,
} from "../components/PageAssets"
import { parseImageUrl } from "notabase/src/utils"
import projectleft from "../assets/projectleft.svg"
import projectright from "../assets/projectright.svg"
import styled from "@emotion/styled"
import SEO from "../components/SEO"

import phoneFrame from "../assets/phone.png"
import distributionVideo from "../assets/distribution.mp4"
import distributionImage from "../assets/distribution.png"
import projectRopaVideo from "../assets/projectropa.mp4"
import projectRopaImage from "../assets/projectropa.png"
import HoverVideoPlayer from "react-hover-video-player"

const mobile = `@media (max-width: 700px)`

const ImgContainerContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ImgContainer = styled.figure`
  display: table;
  margin: 0;
`

const SpanDiv = styled.figcaption`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* or 22px */
  color: #d7a3e1;
  margin-top: 8px;
  width: 100%;
  display: table-caption;
  caption-side: bottom;
  ${mobile} {
    font-size: 14px;
  }
`
const NovaB = styled(NovaP)`
  font-weight: bold;
`

const CaseStudyTable = styled.table`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 200px auto;
  grid-row-gap: 12px;

  ${mobile} {
    grid-template-columns: 100px auto;
  }
`

const PageContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${projectleft}), url(${projectright});
  background-repeat: no-repeat;
  background-position: left 144px, right 144px;

  ${mobile} {
    background: none;
  }
`

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

const Content = ({ block, index }) => {
  switch (block.type) {
    /*
    case "meta":
      const { text } = block.properties[0].value[0]
      // if (text.startsWith("!!")) {
      //   return <div>{text.slice(2)}</div>
      // }
      break
	*/
    case "text":
      return (
        <>
          <NovaP>{block.properties[0].value.map(renderText)}</NovaP>
        </>
      )

    case "numbered_list":
      return (
        <>
          <NovaP>
            <ListItem>{block.properties[0].value.map(renderText)}</ListItem>
          </NovaP>
        </>
      )

    case "header":
      return (
        <>
          <NovaH2>{index}</NovaH2>
          <NovaH2>
            {block.properties[0].value.map(item => (
              <span>{item.text}</span>
            ))}
          </NovaH2>
        </>
      )

    case "sub_header":
      return (
        <>
          <NovaH4>
            {block.properties[0].value.map(item => (
              <span>{item.text}</span>
            ))}
          </NovaH4>
        </>
      )

    case "image":
      const url = block.properties[0].value[0].text
      var captionHtml = ""

      if (block.properties.length === 2) {
        captionHtml = <SpanDiv>{block.properties[1].value[0].text}</SpanDiv>
      }

      return (
        <ImgContainerContainer>
          <ImgContainer>
            <img
              src={parseImageUrl(url)}
              alt={captionHtml}
              style={{
                maxHeight: "50vh",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
            {captionHtml}
          </ImgContainer>
        </ImgContainerContainer>
      )

    // const imageNode = data.notionPageNovaProjects.imageNodes.find(
    //   v => v.imageUrl == url
    // )
    // if (!imageNode) return
    // const imageURL = imageNode.localFile.publicURL
    // return (
    //   <div>
    //     <img src={imageURL} style={{ width: "100px" }} />
    //   </div>
    // )
  }
  return <></>
}

const CaseStudyHeader = ({ metadata }) => {
  const { Name, Overview, Tech, Team, NPOs } = metadata
  // let imageURL = parseImageUrl(Image[0], 1000)

  return (
    <>
      {/* <Img alt={`${Name}`} src={imageURL} /> */}
      <NovaSpacer y={160} mobileY={50} />
      <NovaH1>{Name}</NovaH1>
      <NovaSpacer y={24} />
      <NovaP>{Overview}</NovaP>
      <NovaSpacer y={80} />
      <CaseStudyTable>
        {/* <NovaB>Medium</NovaB>
        <NovaP>{Medium}</NovaP> */}

        <NovaB>Technology</NovaB>
        <NovaP>{Tech && Tech.join(", ")}</NovaP>

        <NovaB>NPOs involved</NovaB>
        <NovaP>{NPOs}</NovaP>

        <NovaB>Team</NovaB>
        <NovaP>{Team && Team.join(", ")}</NovaP>
      </CaseStudyTable>
      {/* {Image && (
          <img src={parseImageUrl(Image[0])} style={{ width: "100%" }} />
        )} */}
    </>
  )
}

const Container = styled.div`
  height: 50vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -80px;
  ${mobile} {
    margin-bottom: -48px;
  }
`

const PhoneRecordingDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const PhoneImg = styled.img`
  height: 100%;
  z-index: 2;
  position: relative;
  pointer-events: none;
`

const VideoImage = styled.img`
  height: 100%;
`

const PhoneRecording = ({ video, image }) => {
  return (
    <React.Fragment>
      <NovaSpacer y={80} />
      <Container>
        <PhoneRecordingDiv>
          <PhoneImg src={phoneFrame}></PhoneImg>
          <HoverVideoPlayer
            restartOnPaused
            style={{
              width: "89%",
              top: "8.3%",
              position: "absolute",
              zIndex: 1,
              margin: "auto",
            }}
            videoSrc={video}
            pausedOverlay={<VideoImage src={image} alt="" />}
            loadingOverlay={<VideoImage src={image} alt="" />}
            loop={false}
          />
        </PhoneRecordingDiv>
      </Container>
    </React.Fragment>
  )
}

const CaseStudyVideoPreview = ({ name }) => {
  switch (name) {
    case "Coordinating Survival Kit Distribution":
      return (
        <PhoneRecording video={distributionVideo} image={distributionImage} />
      )
    case "Project Ropa Offline Forms App":
      return (
        <PhoneRecording video={projectRopaVideo} image={projectRopaImage} />
      )
  }
  return <></>
}

export default ({ data, pageContext }) => {
  // const {
  //   caseStudies: { Name, Overview, Tech, Team, Image, html, slug },
  // } = data
  const metadata = data.allNovaProjectsMetadata.nodes.filter(
    m => m.Slug === pageContext.pathSlug
  )[0]
  var prevSpacing
  var prevBlock
  var prevHeaders = false
  return (
    <Layout>
      <SEO
        metaTitle={"Nova | " + metadata.Name}
        metaDescription={metadata.Overview}
      />
      <PageContainer>
        <SectionBox>
          {metadata && <CaseStudyHeader metadata={metadata} />}
          <CaseStudyVideoPreview name={metadata.Name} />
          <NovaSpacer y={72} />
          {data.notionPageNovaProjects.blocks.map(block => {
            if (!block.properties || block.properties.length === 0) {
              return
            }
            if (
              !block.properties[0].value ||
              block.properties[0].value.length === 0
            ) {
              return
            }
            switch (block.type) {
              case "header":
                prevSpacing = prevHeaders ? 144 : 72
                prevHeaders = true
                break

              case "sub_header":
                prevSpacing = prevBlock === "image" ? 48 : 24
                break

              case "text":
                switch (prevBlock) {
                  case "header":
                    prevSpacing = 24
                    break
                  case "image":
                    prevSpacing = 48
                    break
                  default:
                    prevSpacing = 12
                }
                break

              case "image":
                prevSpacing = 48
                break

              case "numbered_list":
                prevSpacing = 24
                break

              default:
                prevSpacing = 0
            }

            prevBlock = block.type

            return (
              <>
                <NovaSpacer y={prevSpacing} />
                <Content block={block} />
              </>
            )
          })}
          <NovaSpacer y={96} />
          <NovaH2 center>
            <NovaLink underline to="#top">
              &#8593; Back to Top
            </NovaLink>
          </NovaH2>
        </SectionBox>
      </PageContainer>
    </Layout>
  )

  // function replaceHtmlWithReact({ attribs, children }) {
  //   if (!attribs) {
  //     return
  //   }

  //   switch (attribs.class) {
  //     case "notion-selectable notion-header-block":
  //       return (
  //         <SectionHeading>
  //           {domToReact(children, { replace: replaceHtmlWithReact })}
  //         </SectionHeading>
  //       )

  //     case "notion-selectable notion-sub_header-block":
  //       return <SectionSubHeading>{domToReact(children)}</SectionSubHeading>

  //     case "notion-selectable notion-sub_sub_header-block":
  //       return <SectionSubHeading>{domToReact(children)}</SectionSubHeading>

  //     case "notion-selectable notion-image-block":
  //       return <div style={{ width: "100%" }}>{domToReact(children)}</div>

  //     case "notion-selectable notion-text-block":
  //       return <SectionParagraph>{domToReact(children)}</SectionParagraph>
  //   }
  // }

  // return (
  //   <Layout>
  //     <a name="top" />
  //     <MainBox>
  //       <NovaH1>{Name}</NovaH1>
  //       <SectionParagraph>{Overview}</SectionParagraph>
  //     </MainBox>
  //     <SectionBox>
  //       <CaseStudyTable>
  //         <tr>
  //           <th>Nonprofit</th>
  //           <td>{Name}</td>
  //         </tr>
  //         <tr>
  //           <th>Technology</th>
  //           <td>{Tech && Tech.join(", ")}</td>
  //         </tr>
  //         <tr>
  //           <th>Team</th>
  //           <td>{Team && Team.join(", ")}</td>
  //         </tr>
  //       </CaseStudyTable>
  //     </SectionBox>
  //     <SectionBox>
  //       {parse(html, { replace: replaceHtmlWithReact })}
  //       <SectionHeading>
  //         &#8593;{" "}
  //         <a href="#top" style={{ color: "white" }}>
  //           Back to Top
  //         </a>
  //       </SectionHeading>
  //     </SectionBox>
  //   </Layout>
  // )
}

export const query = graphql`
  query($pageId: String) {
    allNovaProjectsMetadata {
      nodes {
        Name
        Slug
        Overview
        Team
        Tech
        NPOs
      }
    }
    notionPageNovaProjects(pageId: { eq: $pageId }) {
      blocks {
        blockId
        blockIds
        type
        attributes {
          att
          value
        }
        properties {
          propName
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
      }
      pageId
      slug
      title
      isDraft
      id
      indexPage
    }
  }
`
