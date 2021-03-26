import React from "react";
import Layout from "../components/Layout.js";
import { graphql } from "gatsby";
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
} from "../components/PageAssets";
import projectleft from "../assets/projectleft.svg";
import projectright from "../assets/projectright.svg";
import styled from "@emotion/styled";
import SEO from "../components/SEO";
import "../styles/global.css";

import phoneFrame from "../assets/phone.png";
import distributionVideo from "../assets/distribution.mp4";
import distributionImage from "../assets/distribution.png";
import projectRopaVideo from "../assets/projectropa.mp4";
import projectRopaImage from "../assets/projectropa.png";
import HoverVideoPlayer from "react-hover-video-player";

const mobile = `@media (max-width: 700px)`;

const ImgContainerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgContainer = styled.figure`
  display: table;
  margin: 0;
`;

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
  text-align: left;
  caption-side: bottom;
  ${mobile} {
    font-size: 14px;
  }
`;
const NovaB = styled(NovaP)`
  font-weight: bold;
`;

const CaseStudyTable = styled.table`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 200px auto;
  grid-row-gap: 12px;

  ${mobile} {
    grid-template-columns: 100px auto;
  }
`;

const PageContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${projectleft}), url(${projectright});
  background-repeat: no-repeat;
  background-position: left 144px, right 144px;

  ${mobile} {
    background: none;
  }
`;

const renderText = (item) => {
  console.log(item);
  var content = item.value;
  if (item.nodeType === "hyperlink") {
    content = (
      <NovaA underline href={item.data.uri} target="_blank">
        {item.content[0].value}
      </NovaA>
    );
  }
  if (item.marks)
    for (let mark of item.marks) {
      console.log(mark.type);
      switch (mark.type) {
        case "bold":
          content = <b>{content}</b>;
          break;
        default:
      }
    }
  return <span>{content}</span>;
};

const Content = ({ node, index, articleAssets }) => {
  switch (node.nodeType) {
    case "paragraph":
      return (
        <>
          <NovaP>{node.content.map(renderText)}</NovaP>
          <NovaSpacer y={16} />
        </>
      );

    case "unordered-list":
      return (
        <>
          <NovaP>
            {node.content.map((listItem) => {
              return (
                <React.Fragment>
                  <ListItem>
                    {listItem.content[0].content.map(renderText)}
                  </ListItem>
                  <NovaSpacer y={16} />
                </React.Fragment>
              );
            })}
          </NovaP>
          <NovaSpacer y={16} />
        </>
      );

    case "heading-1":
      return (
        <>
          <NovaSpacer y={64} />
          <NovaH2>{index}</NovaH2>
          <NovaH2>{node.content.map(renderText)}</NovaH2>
          <NovaSpacer y={24} />
        </>
      );

    case "heading-2":
      return (
        <>
          <NovaSpacer y={16} />
          <NovaH4>{node.content.map(renderText)}</NovaH4>
          <NovaSpacer y={16} />
        </>
      );

    case "embedded-asset-block":
      const contentful_id = node.data.target.sys.id;
      const imageData = articleAssets.get(contentful_id);

      const url = imageData.localFile.publicURL;
      const caption = imageData.description;

      return (
        <>
          <NovaSpacer y={24} />
          <ImgContainerContainer>
            <ImgContainer>
              <img
                src={url}
                alt={caption}
                style={{
                  maxHeight: "50vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
              <SpanDiv>{caption}</SpanDiv>
            </ImgContainer>
          </ImgContainerContainer>
          <NovaSpacer y={24} />
        </>
      );

    default:
      return <></>;
  }
};

const CaseStudyHeader = ({ pageData }) => {
  const { name, description, technology, team, nonprofits } = pageData;
  // let imageURL = parseImageUrl(Image[0], 1000)

  return (
    <>
      {/* <Img alt={`${Name}`} src={imageURL} /> */}
      <NovaSpacer y={160} mobileY={50} />
      <NovaH1>{name}</NovaH1>
      <NovaSpacer y={24} />
      <NovaP>{description.description}</NovaP>
      <NovaSpacer y={80} />
      <CaseStudyTable>
        {/* <NovaB>Medium</NovaB>
        <NovaP>{Medium}</NovaP> */}

        <NovaB>Technology</NovaB>
        <NovaP>{technology && technology.map((t) => t.name).join(", ")}</NovaP>

        <NovaB>NPOs involved</NovaB>
        <NovaP>{nonprofits && nonprofits.map((n) => n.name).join(", ")}</NovaP>

        <NovaB>Team</NovaB>
        <NovaP>{team && team.map((t) => t.name).join(", ")}</NovaP>
      </CaseStudyTable>
      {/* {Image && (
          <img src={parseImageUrl(Image[0])} style={{ width: "100%" }} />
        )} */}
    </>
  );
};

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
`;

const PhoneRecordingDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PhoneImg = styled.img`
  height: 100%;
  z-index: 2;
  position: relative;
  pointer-events: none;
`;

const VideoImage = styled.img`
  height: 100%;
`;

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
  );
};

const CaseStudyVideoPreview = ({ name }) => {
  console.log(name);
  switch (name) {
    case "Coordinating Survival Kit Distribution":
      return (
        <PhoneRecording video={distributionVideo} image={distributionImage} />
      );
    case "Project Ropa Offline Forms App":
      return (
        <PhoneRecording video={projectRopaVideo} image={projectRopaImage} />
      );
    default:
      return <></>;
  }
};

export default ({ data, pageContext }) => {
  const pageData = data.allContentfulProjectCaseStudy.nodes[0];

  const articleContent = JSON.parse(pageData.bodyArticle.raw).content;
  const articleAssets = new Map(
    pageData.bodyArticle.references.map((i) => [i.contentful_id, i])
  );
  console.log(articleAssets);
  console.log(articleContent);
  console.log(data);

  return (
    <Layout>
      <SEO
        metaTitle={"Nova | " + pageData.name}
        metaDescription={pageData.description.description}
      />
      <PageContainer>
        <SectionBox>
          {pageData && <CaseStudyHeader pageData={pageData} />}
          <CaseStudyVideoPreview name={pageData.name} />
          <NovaSpacer y={120} />
          {articleContent.map((node, idx) => {
            return (
              <React.Fragment key={idx}>
                <Content node={node} articleAssets={articleAssets} />
              </React.Fragment>
            );
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
  );
};

export const query = graphql`
  query($id: String) {
    allContentfulProjectCaseStudy(filter: { id: { eq: $id } }) {
      nodes {
        id
        slug
        name
        nonprofits {
          name
        }
        technology {
          name
        }
        team {
          name
        }
        description {
          description
        }
        bodyArticle {
          raw
          references {
            file {
              url
              fileName
            }
            localFile {
              publicURL
            }
            contentful_id
            title
            description
          }
        }
        sys {
          contentType {
            sys {
              id
              linkType
              type
            }
          }
          revision
          type
        }
      }
    }
  }
`;
