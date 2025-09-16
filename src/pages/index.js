import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import centerstar from "../assets/centerstar.svg";
import city from "../assets/city.png";
import clouds from "../assets/clouds.png";
import coloredstars from "../assets/coloredstars.svg";
import coverstarsleft from "../assets/coverstarsleft.svg";
import coverstarsright from "../assets/coverstarsright.svg";
import mobileclouds from "../assets/mobileclouds.png";
import backgroundgradient from "../assets/backgroundgradient.png";
import InfinitePhotoRow from "../components/photoRow";
import spotlight from "../assets/spotlight.svg";
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
  SectionFillWidth,
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

/* ===================== NEW WRAPPERS ===================== */

/** 1) Pure-white hero background (same structure as PageHeightContainer) */
const HeroSection = styled(PageHeightContainer)`
  position: relative; /* anchor abs layers */
  background: #fff;
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

/** 2) White → image → white band (fixed order) */
const GradientToImage = styled.div`
  background:
    /* top overlay (white → transparent) */ linear-gradient(
      white 0%,
      rgba(255, 255, 255, 0) 15%
    ),
    /* bottom overlay (transparent → white) */
      linear-gradient(rgba(255, 255, 255, 0) 70%, white 100%),
    /* image (at the very bottom layer) */ url(${backgroundgradient}) center top /
      cover no-repeat;
  position: relative;

  ${mobile} {
    background: linear-gradient(white 0%, rgba(255, 255, 255, 0) 10%),
      linear-gradient(rgba(255, 255, 255, 0) 80%, white 100%),
      url(${backgroundgradient}) center top / cover no-repeat;
  }
`;

/** 3) Guarantee a plain white backdrop for a block */
const WhiteSection = styled.div`
  background: #fff;
`;

/* ======================================================== */

const MobileClouds = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

// 1) Spotlight centered in the hero
const SpotlightLayer = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* dead center */
  width: 100vw;
  height: auto;
  pointer-events: none;
  z-index: 0; /* under decor + text */

  @media (max-width: 800px) {
    width: clamp(320px, 92vw, 640px);
  }
`;

// 2) A centered container for the title + subtitle
const HeroCenter = styled.div`
  position: absolute;
  left: 50%;
  top: 69.5%;
  transform: translate(-50%, -50%); /* match Spotlight center */
  z-index: 2; /* above spotlight */
`;

// 3) Title group + overlay star
const TitleGroup = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  gap: clamp(6px, 1.2vw, 14px); /* visual gap between lines */
`;

const H0 = styled(NovaH0)`
  position: relative;
  z-index: 2; /* text above the star if they overlap */
`;

const Sub = styled(NovaSub)`
  position: relative;
  z-index: 2;
`;

const CenterStarOverlay = styled.img`
  position: absolute;
  left: 50%;
  top: 50%; /* center of the title group */
  transform: translate(-50%, calc(-50% - 4px)); /* nudge up slightly */
  width: clamp(56px, 8.5vw, 140px);
  height: auto;
  pointer-events: none;
  z-index: 3; /* under text; use 3 to go above */

  @media (max-width: 800px) {
    width: clamp(48px, 14vw, 120px);
    transform: translate(-50%, calc(-50% - 1px));
  }
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
  width: 85%;
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
  const teamImages = (data.allContentfulMember?.nodes || [])
    .map(
      (m) =>
        m?.profilePicture?.localFile?.publicURL ||
        (m?.profilePicture?.file?.url
          ? `https:${m.profilePicture.file.url}`
          : null)
    )
    .filter(Boolean);
  return (
    <Layout home>
      <HeroSection height="100vh">
        <SEO />

        <City src={city} />
        <SpotlightLayer src={spotlight} />

        {/* HERO: pure white */}
        {/* <DesktopView>
          <CoverStarsLeft src={coverstarsleft} />
          <CoverStarsRight src={coverstarsright} />
          <MobileClouds src={clouds} />
        </DesktopView>

        <MobileView>
          <MobileClouds src={mobileclouds} />
        </MobileView>*/}

        <div>
          <ColoredStars />
          <HeroCenter>
            <TitleGroup>
              <H0 center>NOVA</H0>
              <CenterStarOverlay src={centerstar} alt="" aria-hidden="true" />
              <Sub center>Tech For Good</Sub>
            </TitleGroup>
            <NovaSpacer y={36} />
            <Description center>
              We are a team of students at UCLA who aim to create high-impact
              technology that empowers nonprofits to better serve their
              communities.
            </Description>
            <NovaSpacer y={32} />
            <ButtonDiv>
              <SparklyButton
                to="/work"
                textColor="#ffffff"
                background="linear-gradient(270deg, var(--Purple, #B78DF2) 0%, #6DBFF2 100%)"
                borderColor="#78C7F6"
                borderRadius="200px"
              >
                Learn more
              </SparklyButton>
            </ButtonDiv>

            <NovaSpacer y={160} />
          </HeroCenter>
        </div>
      </HeroSection>

      {/* WHITE → IMAGE → WHITE band behind "who are we?" */}
      <GradientToImage>
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
        <NovaSpacer y={40} />
        <SectionFillWidth>
          {/* Row 1 — left-to-right (or default direction) */}
          <InfinitePhotoRow
            images={teamImages}
            duration="600s"
            rowHeight="30vh"
          />
          <NovaSpacer y={12} />
          {/* Row 2 — counter-rotating */}
          <InfinitePhotoRow
            images={[...teamImages].reverse()} // optional variety
            duration="500s" // slightly different speed feels nicer
            reverse // opposite direction
            rowHeight="30vh"
          />
        </SectionFillWidth>
        <NovaSpacer y={160} />
        {/* Mid-page decorative background stays the same */}
        <BodyContainer>
          <SectionBox>
            <NovaH2>we create solutions.</NovaH2>
            <NovaSpacer y={24} />
            <NovaP>
              We were founded on the belief that even small solutions have the
              potential to create a large impact. We put together small
              interdisciplinary teams and work closely with nonprofits to bring
              a product vision to life through ideation, design, and
              implementation.
            </NovaP>
            <NovaSpacer y={48} />
            <CaseDiv>
              {data.allContentfulProjectCaseStudy.nodes
                .filter((node) => node.featured === true)
                .sort((a, b) => (a.name >= b.name ? 1 : -1))
                .map((node) => (
                  <CaseItem key={node.id} data={node} />
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
                  (node) =>
                    node.showOnHomepage && (
                      <NetworkItem key={node.name} data={node} />
                    )
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
        </BodyContainer>
        <NovaSpacer y={160} />
      </GradientToImage>
      {/* Partners: back to white */}
      <WhiteSection>
        <NovaSpacer y={40} />
        <SectionBox>
          <ColoredStars />
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
              <NetworkItem key={node.name} data={node} />
            ))}
          </NetworkDiv>
          <NovaSpacer y={48} />
        </SectionBox>

        <DesktopView>
          <NovaSpacer y={300} />
        </DesktopView>
      </WhiteSection>
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
    allContentfulMember {
      nodes {
        name
        profilePicture {
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
