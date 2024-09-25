import classNames from "classnames";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import coverstarsleft from "../assets/coverstarsleft.svg";
import coverstarsright from "../assets/coverstarsright.svg";
// import team from "../assets/team.png";
import workleft from "../assets/workleft.svg";
import workright from "../assets/workright.svg";
import HeaderColorGradient from "../assets/24-25/header-color-gradient.webp";
import NovaHeaderBg from "../assets/24-25/nova-header-bg.svg";
import NovaHeaderCircle from "../assets/24-25/nova-header-circle.svg";
import NovaHeaderFg from "../assets/24-25/nova-header-fg.svg";
import BlueBlur from "../assets/24-25/blue-blur.svg";
import NovaTeam from "../assets/24-25/nova-team.webp";
import GoldStars1 from "../assets/24-25/gold-stars-1.webp";
import GoldStars2 from "../assets/24-25/gold-stars-2.webp";
import CaseItem, { CaseDiv } from "../components/CaseItem";
import Layout from "../components/Layout";
import NetworkItem, { NetworkDiv } from "../components/NetworkItem";
import {
  NovaA,
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
      {/* <City src={city} /> */}

      <div
        className={classNames(
          "bg-white mobile:bg-black h-screen w-screen relative",
          "desktop:bg-gradient-to-b from-white via-[#FFE7FF] to-[#AFCFFF]"
        )}
      >
        <img
          src={NovaHeaderCircle}
          alt="Nova Header Circle"
          className="absolute top-0 left-0 w-screen h-screen object-cover mobile:hidden"
        />

        <img
          src={NovaHeaderBg}
          alt="Nova Header Background"
          className="absolute top-0 left-0 w-screen h-screen object-cover opacity-60 mix-blend-multiply mobile:hidden"
        />

        <img
          src={HeaderColorGradient}
          alt="Header Color Gradient"
          className="absolute top-0 left-0 w-screen h-screen object-cover mix-blend-color mobile:hidden"
        />

        <img
          src={NovaHeaderFg}
          alt="Nova Header Foreground"
          className="absolute top-0 left-0 w-screen h-screen object-cover opacity-60 mobile:hidden"
        />

        <img
          src={BlueBlur}
          alt="Blue Blur"
          className="absolute top-0 left-0 w-screen h-screen object-cover mix-blend-plus-darker mobile:hidden"
        />

        <div className="h-screen desktop:w-1/2 mobile:w-full flex flex-col justify-center items-center absolute top-0 left-0 desktop:pl-24 mobile:px-8">
          <h1
            className={classNames(
              "text-[10rem] font-normal text w-full font-display -ml-6 mobile:text-[6rem]",
              "text-white"
            )}
            style={{
              // text glow effect
              textShadow: "0px 0px 2rem #FB9D87",
            }}
          >
            NOVA
          </h1>
          <h2
            className={classNames(
              "desktop:text-[3rem] font-normal text w-full font-body text-white mobile: text-4xl"
            )}
          >
            TECH FOR GOOD
          </h2>

          <p
            className={classNames(
              "text-white text-2xl font-normal text mt-16 font-body"
            )}
          >
            We are a team of students at UCLA who aim to create high-impact
            technology that empowers nonprofits to better serve their
            communities.
          </p>

          <div className="flex  items-center flex-row w-full">
            <SparklyButton
              to="/join"
              textColor="#ffffff"
              backgroundColor="#78C7F6"
              borderColor="#78C7F6"
              className="!mt-8 !bg-transparent ring-2 ring-white !border-none !ml-0 mobile:!ml-2"
            >
              JOIN THE TEAM
            </SparklyButton>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 z-50">
          <p className="text-white text-lg font-normal text font-body">
            2024-2025
          </p>
          <p className="text-white text-lg font-normal text font-body">
            “TO THE MOON & BACK”
          </p>
        </div>

        <img
          src={GoldStars1}
          alt="Gold Stars 1"
          className="absolute top-[10vh] left-[50vw] h-[80vh] object-cover mobile:hidden"
        />
      </div>

      <div
        className={classNames(
          "bg-black min-h-screen w-screen flex flex-row desktop:pl-12 relative mobile:flex-col"
        )}
      >
        <div className="desktop:w-[40%] h-full desktop:h-screen desktop:px-12 mobile:px-8 flex justify-center items-center flex-col mobile:w-full">
          <h1
            className={classNames(
              " text-6xl font-normal text-center pt-20 w-full font-display"
              //   "bg-gradient-to-r from-[#F855C4] to-[#EF751D] bg-clip-text text-transparent"
            )}
            style={{
              // gradient text effect
              background: "linear-gradient(90deg, #F855C4, #EF751D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHO ARE WE?
          </h1>
          <ul className="text-white text-2xl font-normal text-left pt-20 w-full font-body list-disc pl-8">
            <li>
              Developers, designers, and businesspeople who{" "}
              <span className="text-[#F855C4]">love</span> to solve problems.
            </li>
            <li>
              Students who seek to{" "}
              <span className="text-[#DA8BE9]">better understand</span> the
              realities of under-resourced communities.
            </li>
            <li>
              A team that{" "}
              <span className="text-[#FB9D87]">strongly believes</span> in
              making a difference.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center flex-1 flex-col overflow-hidden">
          <img
            src={NovaTeam}
            alt="Nova Team"
            className="object-cover mobile:w-[200vw] mobile:max-w-none"
          />
        </div>

        <img
          src={GoldStars2}
          alt="Gold Stars 2"
          className="absolute top-[-10vh] right-[10vw] h-[120vh] object-cover mobile:hidden"
        />
      </div>

      {/* <PageHeightContainer height="90vh">
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
      </PageHeightContainer> */}

      {/* <NovaSpacer y={40} />

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
      </SectionBox> */}

      {/* <NovaSpacer y={160} /> */}

      <div
        className={classNames(
          "bg-black desktop:min-h-screen w-screen flex justify-center items-center flex-col mobile:pb-20"
        )}
      >
        <h1
          className={classNames(
            "text-6xl font-normal text-center w-full font-display"
            // "bg-gradient-to-r from-[#F855C4] to-[#EF751D] bg-clip-text text-transparent"
          )}
          style={{
            // gradient text effect
            background: "linear-gradient(90deg, #F855C4, #EF751D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WE CREATE SOLUTIONS
        </h1>

        <p
          className={classNames(
            "text-white text-2xl font-normal text-left pt-20 font-body",
            "w-3/4 px-12",
            "mobile:w-full mobile:px-8"
          )}
        >
          We were founded on the belief that even small solutions have the
          potential to create a large impact. We put together small
          interdisciplinary teams and work closely with nonprofits to bring a
          product vision to life through ideation, design, and implementation.
        </p>
      </div>

      {/* <BodyContainer>
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
      </BodyContainer> */}
      {/* <DesktopView>
        <NovaSpacer y={300} />
      </DesktopView> */}
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
