﻿import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import city from "../assets/city.png";
import clouds from "../assets/clouds.png";
import coverstarsleft from "../assets/coverstarsleft.svg";
import coverstarsright from "../assets/coverstarsright.svg";
import mobileclouds from "../assets/mobileclouds.png";
// import team from "../assets/team.png";
import team from "../assets/team.jpg";
import workleft from "../assets/workleft.svg";
import workright from "../assets/workright.svg";
import CaseItem, { CaseDiv } from "../components/CaseItem";
import Layout from "../components/Layout";
import NetworkItem, { NetworkDiv } from "../components/NetworkItem";
import {
  Arrow,
  ListItem,
  NovaA,
  NovaH0,
  NovaH1,
  NovaSub,
  NovaH2,
  NovaLink,
  NovaP,
  NovaSpacer,
  SectionBox,
  SparklyButton,
} from "../components/PageAssets";
import SEO from "../components/SEO";
import "../styles/global.css";

const mobile = `@media (max-width: 800px)`;
const notMobile = `@media (min-width: 801px)`;

const MobileView = styled("div")`
  ${notMobile} {
    display: none;
  }
`;
const DesktopView = styled("div")`
  ${mobile} {
    display: none;
  }
`;

const ButtonDiv = styled.div`
  text-align: center;

  ${mobile} {
    margin: 0 auto;
  }
`;

const PageHeightContainer = styled.div`
  position: relative;
  min-height: ${({ height }) => `${height || "100vh"}`};
  ${mobile} {
    min-height: ${({ mobileHeight }) => `${mobileHeight || "100vh"}`};
  }
`;

const MobileClouds = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const City = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CoverStarsLeft = styled.img`
  position: absolute;
  top: 0;
  height: 80%;
  box-sizing: border-box;
  object-fit: contain;
  align-self: center;
  z-index: -1;
  left: 80px;
`;
const CoverStarsRight = styled.img`
  position: absolute;
  top: 0;
  height: 80%;
  box-sizing: border-box;
  object-fit: contain;
  align-self: center;
  z-index: -1;
  right: 80px;
`;

const Description = styled(NovaP)`
  width: 80%;
  max-width: 650px;
  margin: 0 auto;
`;

const BodyContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${coverstarsleft}), url(${coverstarsright}),
    url(${aboutleft}), url(${workleft}), url(${aboutright}), url(${aboutleft}),
    url(${workleft}), url(${workright});
  background-repeat: no-repeat;
  background-position: left top, right top, left 28%, right 28%, left 67%,
    right 67%, left 93%, right 93%;
  ${mobile} {
    background: none;
  }
`;

export const TeamImage = styled.img`
  width: 100%;
  margin: 48px 0;
  max-height: ${({ maxHeight }) => maxHeight || "auto"};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  object-fit: cover;
  object-position: left bottom;
  ${mobile} {
    margin: 32px 0;
  }
`;

export default function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <City src={city} />
      <PageHeightContainer height="90vh">
        <DesktopView>
          <CoverStarsLeft src={coverstarsleft} />
          <CoverStarsRight src={coverstarsright} />
          <MobileClouds src={clouds} />
        </DesktopView>

        <MobileView>
          <MobileClouds src={mobileclouds} />
        </MobileView>

        <div>
          <DesktopView>
            <NovaSpacer y={120} />
          </DesktopView>
          <MobileView>
            <NovaSpacer y={48} />
          </MobileView>
          <NovaH0 center>Nova</NovaH0>
          <NovaSub center>TECH FOR GOOD</NovaSub>
          <NovaSpacer y={36} />
          <Description center>
            We are a team of students at UCLA who aim to create high-impact
            technology that empowers nonprofits to better serve their
            communities.
          </Description>
        </div>

        <NovaSpacer y={64} />
        <ButtonDiv>
          <SparklyButton
            to="/join"
            textColor="#ffffff"
            backgroundColor="#78C7F6"
            borderColor="#78C7F6"
          >
            join the team
          </SparklyButton>
          <MobileView>
            <NovaSpacer y={12} />
          </MobileView>
          <SparklyButton
            to="/work"
            textColor="#ffffff"
            backgroundColor="#78C7F6"
            borderColor="#78C7F6"
          >
            see our work
          </SparklyButton>
        </ButtonDiv>

        <NovaSpacer y={160} />
      </PageHeightContainer>

      <NovaSpacer y={40} />

      <SectionBox>
        <NovaH2>who are we?</NovaH2>
        <NovaSpacer y={24} />
        <NovaP>
          <ListItem>
            Developers, designers, and businesspeople who love to solve
            problems.
          </ListItem>
          <ListItem>
            Students who seek to better understand the realities of
            under-resourced communities.
          </ListItem>
          <ListItem>
            A team that strongly believes in making a difference.
          </ListItem>
        </NovaP>
        {/* <NovaSpacer y={16} />
        <NovaP>
          Most importantly, we're a team that strongly believes that we can{" "}
          <b>change the world.</b>
        </NovaP> */}
        <TeamImage
          src={team}
          minHeight={"470px"}
          maxHeight={"45vh"}
          alt="The Team"
        />
        <NovaP>
          <Arrow />
          <NovaLink underline to="/about">
            Read more about us
          </NovaLink>
        </NovaP>
      </SectionBox>

      <NovaSpacer y={160} />

      <BodyContainer>
        <SectionBox>
          <NovaH2>we create solutions.</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>
            We were founded on the belief that even small solutions have the
            potential to create a large impact. We put together small
            interdisciplinary teams and work closely with nonprofits to bring a
            product vision to life through ideation, design, and implementation.
          </NovaP>
          <NovaSpacer y={48} />
          <CaseDiv>
            {data.allContentfulProjectCaseStudy.nodes
              .filter((node) => node.featured === true)
              .sort((a, b) => (a.name >= b.name ? 1 : -1)) // Distribution < Project Ropa LOLOL
              .map((node) => (
                <CaseItem data={node} />
              ))}
          </CaseDiv>
        </SectionBox>

        <NovaSpacer y={160} />

        <SectionBox>
          <PageHeightContainer>
            <NovaH2>our network</NovaH2>
            <NovaSpacer y={24} />
            <NovaP>
              We wouldn't be able to do what we love alone. We’re grateful for
              these organizations who have advised us and given us a hand in
              better understanding the social sector.
            </NovaP>
            <NovaSpacer y={12} />
            <NovaP>
              Interested in becoming a partner or advisor?{" "}
              <NovaLink
                underline
                rel="noreferrer"
                target="_blank"
                to="https://forms.gle/g6gmjG4uYwL1AP5T9"
              >
                Let us know
              </NovaLink>{" "}
              — we’d love to talk to you!
            </NovaP>
            <NovaSpacer y={24} />
            <NetworkDiv>
              {data.allContentfulNonprofitInOurNetwork.nodes.map(
                (node) => node.showOnHomepage && <NetworkItem data={node} />
              )}
            </NetworkDiv>
            <NovaSpacer y={48} />
            <SparklyButton
              rel="noreferrer"
              target="_blank"
              to="https://forms.gle/g6gmjG4uYwL1AP5T9"
              textColor="#013668"
              backgroundColor="#C5E6F5"
              borderColor="#C5E6F5"
            >
              work with us
            </SparklyButton>
          </PageHeightContainer>
        </SectionBox>

        <NovaSpacer y={160} />

        <SectionBox>
          <NovaH2>our partners</NovaH2>
          <NovaSpacer y={24} />
          <NovaP>
            A huge thanks to our generous partners for supporting us!
          </NovaP>
          <NovaSpacer y={12} />
          <NovaP>
            Interested in sponsoring Nova? Send us an e-mail at{" "}
            <NovaA underline href="mailto:sponsorships@novaforgood.org">
              sponsorships@novaforgood.org
            </NovaA>{" "}
            and we'll get back to you with details!
          </NovaP>
          <NovaSpacer y={12} />
          <NovaP>
            Interested in becoming a partner or advisor?{" "}
            <NovaLink
              underline
              rel="noreferrer"
              target="_blank"
              to="https://forms.gle/g6gmjG4uYwL1AP5T9"
            >
              Let us know
            </NovaLink>{" "}
            — we’d love to talk to you!
          </NovaP>
          <NovaSpacer y={24} />
          <NetworkDiv>
            {data.allContentfulSponsor.nodes.map((node) => (
              <NetworkItem data={node} />
            ))}
          </NetworkDiv>
          <NovaSpacer y={48} />
        </SectionBox>
      </BodyContainer>
      <DesktopView>
        <NovaSpacer y={300} />
      </DesktopView>
    </Layout>
  );
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
    allContentfulNonprofitInOurNetwork {
      nodes {
        showOnHomepage
        name
        website
        logo {
          file {
            url
          }
          localFile {
            publicURL
          }
        }
      }
    }
    allContentfulSponsor {
      nodes {
        name
        website
        logo {
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
