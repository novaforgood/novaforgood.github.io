import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutright from "../assets/aboutright.svg";
import arrow from "../assets/arrow.svg";
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

/* Card shell */
const InfoCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1.5px solid #000;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: clamp(20px, 4vw, 48px);
`;

/* Layout: text on left, CTA on right */
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);

  ${mobile} {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

/* Heading + body */
const InfoTitle = styled(NovaSub)`
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.5px;
  font-size: clamp(28px, 6vw, 64px);
  color: #000;
`;

const InfoBody = styled(NovaP)`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  line-height: 1.6;
  margin: 0;
  color: #000;
`;

/* Ghost CTA (fills with gradient on hover) */
const GhostButton = styled(Link)`
  --grad: var(
    --Gradient,
    linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
  );

  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border: 1.5px solid #000;
  border-radius: 9999px;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-family: InstrumentSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0 10px;
  justify-content: center;

  transition: background 180ms ease, color 180ms ease, transform 180ms ease,
    border-color 180ms ease;

  &:hover {
    background: var(--grad);
    color: #fff;
    border-color: transparent;
    transform: translateY(-1px);
  }

  /* arrow */
  & > span {
    display: inline-block;
    transition: transform 180ms ease;
  }
  &:hover > span {
    transform: translateX(2px) rotate(45deg);
  }

  ${mobile} {
    justify-self: start; /* on mobile, button sits under text, left-aligned */
  }
`;

// Section shell
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
  const slideImages = (data.allContentfulPhoto?.nodes || [])
    .map(
      (p) =>
        p?.pic?.localFile?.publicURL ||
        (p?.pic?.file?.url ? `https:${p.pic.file.url}` : null)
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
        <NovaSpacer y={500} />
        <SectionFillWidth>
          {/* Row 1 — left-to-right (or default direction) */}
          <InfinitePhotoRow
            images={slideImages}
            duration="60s"
            rowHeight="30vh"
          />
          <NovaSpacer y={12} />
          {/* Row 2 — counter-rotating */}
          <InfinitePhotoRow
            images={[...slideImages].reverse()} // optional variety
            duration="70s"
            reverse // opposite direction
            rowHeight="30vh"
          />
        </SectionFillWidth>
        <NovaSpacer y={50} />
        <SectionBox>
          <InfoCard>
            <InfoRow>
              <div>
                <InfoTitle>Who We Are</InfoTitle>
                <NovaSpacer y={12} />
                <InfoBody>
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
                </InfoBody>
              </div>

              <GhostButton to="/about" aria-label="Learn more about us">
                Learn More <span>↗</span>
              </GhostButton>
            </InfoRow>
          </InfoCard>
        </SectionBox>
        <NovaSpacer y={50} />
        <SectionFillWidth>
          {/* Row 1 — left-to-right (or default direction) */}
          <InfinitePhotoRow
            images={slideImages}
            duration="70s"
            rowHeight="30vh"
          />
        </SectionFillWidth>
        {/* Mid-page decorative background stays the same */}

        <NovaSpacer y={500} />
      </GradientToImage>
      {/* Partners: back to white */}

      <WhiteSection>
        <NovaSpacer y={40} />
        <SectionBox>
          <ColoredStars />

          <ProjectsWrap>
            <ProjectsTitle center>Projects</ProjectsTitle>
            <ProjectsSubtitle center>
              We were founded on the belief that even small solutions have the
              potential to create a large impact. We put together small
              interdisciplinary teams and work closely with nonprofits to bring
              a product to life through ideation, design, and implementation.{" "}
            </ProjectsSubtitle>

            <ProjectsGrid>
              {(data.allContentfulProjectCaseStudy.nodes || [])
                .filter((n) => n.featured) // or slice(0,3)
                .slice(0, 3)
                .map((n, i) => {
                  const imgSrc = n?.preview?.localFile?.publicURL;
                  const desc =
                    n.description?.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum maximus risus ut.";
                  return (
                    <ProjectCard key={n.id} to={`/work#${n.slug || n.id}`}>
                      <ProjectImage src={imgSrc} />
                      <ProjectName>{n.name}</ProjectName>
                      <ProjectDesc>{desc}</ProjectDesc>
                    </ProjectCard>
                  );
                })}
            </ProjectsGrid>

            <NovaSpacer y={24} />
            <GhostButton to="/work">
              More Projects <span>↗</span>
            </GhostButton>
          </ProjectsWrap>
        </SectionBox>
        <NovaSpacer y={300} />
        <SectionBox>
          <ColoredStars />
          <PageHeightContainer>
            <ProjectsTitle center>Our Network</ProjectsTitle>
            <NovaSpacer y={56} />
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
            <NovaSpacer y={10} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <GhostButton to="/contact">
                Work with us <span>↗</span>
              </GhostButton>
            </div>
          </PageHeightContainer>
        </SectionBox>
      </WhiteSection>
      <NovaSpacer y={100} />
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
    allContentfulPhoto {
      nodes {
        pic {
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
