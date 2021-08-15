import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import {
  NovaH1,
  SectionBox,
  NovaP,
  NovaLink,
  NovaA,
  NovaSpacer,
} from "../components/PageAssets";
import styled from "@emotion/styled";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import aboutleft2 from "../assets/aboutleft2.svg";
import aboutright2 from "../assets/aboutright2.svg";
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
      <NovaSpacer y={64} />
      <PageContainer>
        <SectionBox>
          <NovaH1 center>About</NovaH1>
          <NovaSpacer y={24} />
          <NovaP>Hey there, we're Nova!</NovaP>
          <NovaSpacer y={12} />
          <NovaP>
            We were founded in November 2018, when our co-founders—Bryan,
            Jessica, Max, and Stephanie—wanted to use their technical skills to
            make an active impact in the LA community. In the coming weeks, they
            cold-emailed nonprofits across the city, seeking out problems that
            technology could tackle. Four months later, the team rolled out
            their first prototypes: a food pantry locator for the food-insecure
            and an app coordinating care-package delivery for the homeless.
          </NovaP>

          <ImageDiv>
            {/* <Img src={"https://i.imgur.com/sWmJ2c8.png"} alt={"cannot load image"} /> */}
            <Img
              src={"https://i.imgur.com/5PEUGBB.jpg"}
              alt={"cannot load image"}
            />
            <Img
              src={"https://i.imgur.com/mzNGAU0.png"}
              alt={"cannot load image"}
            />
          </ImageDiv>

          <NovaSpacer y={24} />
          <NovaP>
            It's this constant desire to learn and create that has brought
            together{" "}
            <NovaLink underline to={"/team"}>
              30+ committed members
            </NovaLink>{" "}
            working year-round on projects to help nonprofits serve their
            communities more effectively. We are a close-knit group of CS,
            design, and business students at UCLA, each actively participating
            in outreach, problem-solving, and development.
          </NovaP>

          <ImageDiv>
            <Img
              src={"https://i.imgur.com/H9y64NF.png"}
              alt={"cannot load image"}
            />
            <Img
              src={"https://i.imgur.com/QMVhakQ.png"}
              alt={"cannot load image"}
            />
          </ImageDiv>

          <NovaSpacer y={24} />
          <NovaP>
            We strive to understand the reality of under-resourced communities
            by working closely with nonprofits. We represent an ambitious,
            fast-moving, and creative team aiming to make a lasting impact.
          </NovaP>
          <NovaSpacer y={24} />
          <NovaP>
            We believe in the idea that <b>anyone</b> can help bring change to
            the community.
          </NovaP>
          <NovaSpacer y={24} />
          <NovaSpacer y={24} />
          <NovaSpacer y={24} />
          <NovaP>We are Nova.</NovaP>

          {/* {data.notionPageNova.blocks.map((block, index) => {
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

            const temp = prevBlock
            prevBlock = block.type

            const { text } = block.properties[0].value[0]
            switch (block.type) {
              case "page":
                if (text !== "novaforgood.com") {
                  return (
                    <>
                      <NovaH1 center>{text}</NovaH1>
                      <NovaSpacer y={12} />
                    </>
                  )
                } else {
                  return
                }

              case "text":
                var height = 12
                if (text.match("We are Nova.")) {
                  height = 72
                } else if (temp === "image") {
                  height = 24
                }
                return (
                  <>
                    <NovaSpacer y={height} />
                    <NovaP>{block.properties[0].value.map(renderText)}</NovaP>
                  </>
                )

              case "image":
                // const pic = data.notionPageNova.imageNodes.find(
                //   v => v.imageUrl === text
                // )
                // const imageURL = pic.localFile.publicURL
                // const title = pic.id
                const imageURL = parseImageUrl(text)

                const nextImageUrl = parseImageUrl(
                  data.notionPageNova.blocks[index + 1].properties[0].value[0]
                    .text
                )
                processedIndex++

                return (
                  <ImageDiv>
                    <Img src={imageURL} alt={"cannot load image"} />
                    <Img src={nextImageUrl} alt={"cannot load image"} />
                  </ImageDiv>
                )

              case "numbered_list":
                var properHTML = "<li>" + text + "</li>"
                var nextBlock
                while (true) {
                  index++
                  nextBlock = data.notionPageNova.blocks[index]
                  if (
                    !nextBlock.properties ||
                    nextBlock.properties.length === 0
                  ) {
                    break
                  }
                  if (
                    !nextBlock.properties[0].value ||
                    nextBlock.properties[0].value.length === 0
                  ) {
                    break
                  }
                  if (nextBlock.type !== "numbered_list") {
                    break
                  }
                  properHTML +=
                    "<li>" + nextBlock.properties[0].value[0].text + "</li>"
                }
                processedIndex = index
                return <ol>{parse(properHTML)}</ol>
            }
          })} */}
        </SectionBox>
      </PageContainer>
    </Layout>
  );
};

// export const query = graphql`

// `

export default About;
