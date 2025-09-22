import styled from "@emotion/styled";
import { graphql } from "gatsby";
import React from "react";
import aboutleft from "../assets/aboutleft.svg";
import aboutleft2 from "../assets/aboutleft2.svg";
import aboutright2 from "../assets/aboutright2.svg";
import backgroundgradient from "../assets/backgroundgradient.png";
import coloredstars from "../assets/coloredstars.svg";
import linkedinSvg from "../assets/linkedin.svg";

import whitestars from "../assets/whitestars.svg";
import workleft2 from "../assets/workleft2.svg";
import workright from "../assets/workright.svg";
import workright2 from "../assets/workright2.svg";
import zoom from "../assets/zoom.jpg";
import Layout from "../components/Layout";
import {
  NovaA,
  NovaDiv,
  NovaH1,
  NovaSub,
  NovaLink,
  NovaP,
  NovaSpacer,
  SectionBox,
} from "../components/PageAssets";
import SEO from "../components/SEO";
import "../styles/global.css";

const mobile = `@media (max-width: 800px)`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

/* Icon-only link; default solid, gradient on hover */
const LinkedInIcon = styled.a`
  --size: 22px;
  width: var(--size);
  height: var(--size);
  display: inline-block;
  line-height: 0;

  /* default solid color */
  background: #000;

  /* use the SVG as a mask so the fill can be a gradient */
  -webkit-mask: url(${linkedinSvg}) no-repeat center / contain;
  mask: url(${linkedinSvg}) no-repeat center / contain;

  transition: background 160ms ease, transform 160ms ease;
  &:hover {
    background: var(
      --Gradient,
      linear-gradient(270deg, var(--Purple, #b78df2) 0%, #6dbff2 100%)
    );
    transform: translateY(-2px);
  }
`;

const Name = styled.div`
  font-family: "Unbounded", system-ui, -apple-system, Segoe UI, Roboto,
    sans-serif;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: center;
  font-size: clamp(20px, 1.5vw, 26px); /* bigger than before */
  ${mobile} {
    font-size: clamp(18px, 1.5vw, 24px);
  }
`;

const RoleText = styled(NovaP)`
  text-align: center;
  margin-top: 6px;
  font-size: clamp(13px, 1.6vw, 15px); /* smaller than before */
  opacity: 0.9;
`;

const PDiv = styled.div`
  margin: 0 auto;
  max-width: 700px;
  ${mobile} {
    max-width: 500px;
  }
`;

const NameA = styled(NovaA)`
  line-height: 140%;
`;

const CW = 300; // Card width
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

const WhiteStars = styled.div`
  position: absolute;
  z-index: 0; /* under spotlight + text */
  left: 10%;
  top: 20%; /* your offset */
  width: 80%;
  height: 90%;
  pointer-events: none;

  /* stars image */
  background: url(${whitestars}) center / contain no-repeat;

  @media (max-width: 800px) {
    /* smaller, slightly lower on mobile (tweak to taste) */
  }
`;

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

const MemberCardLayout = styled("div")`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-column-gap: 5%;
  grid-row-gap: 72px;
  grid-template-columns: 30% 30% 30%;

  ${mobile} {
    grid-row-gap: 50px;
    grid-column-gap: 8%;
    grid-template-columns: 25% 25% 25%;
  }
`;

const MemberCardContainer = styled("div")`
  max-width: ${CW}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MemberCardImageContainer = styled("div")`
  display: flex;
  /* width: 80%;
  padding-top: 80%; */
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 2px;
  object-fit: cover;

  /* transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);  */

  /* non-essential styling */
  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);

  ${mobile} {
    width: 100px;
    height: 100px;
  }
`;
const MemberCardImage = styled("img")`
  object-fit: cover;
  height: 100%;
  width: 100%;
  /* display: flex;
  width: 150%;
  height: 150%;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  position: absolute;
  z-index: 10;
  object-fit: cover;
  top: -20%;
  left: -20%;
  pointer-events: none; */
`;

const JoinContain = styled.div`
  margin: 0 auto;
  text-align: center;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  ${mobile} {
    display: inline-grid;
    grid-template-columns: 100%;
    grid-row-gap: 48px;
  }
`;

const JoinDiv = styled.div`
  margin: 0 auto;
  display: inline-block;
  width: 45%;
  ${mobile} {
    width: 80%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const PageContainer = styled.div`
  position: relative;
  text-align: center;
  background-image: url(${workright}), url(${aboutleft}), url(${workright2}),
    url(${aboutleft2}), url(${aboutright2}), url(${workleft2}),
    url(${aboutleft}), url(${workright});
  background-repeat: no-repeat;
  background-position: left 96px, right 96px, -144px 33%, right -48px top 33%,
    -96px 70%, right -144px top 70%, left bottom -288px, right bottom -288px;
  ${mobile} {
    background: none;
  }
`;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const MemberCard = ({ name, imageURL, role, linkedin }) => {
  return (
    <MemberCardContainer>
      <MemberCardImageContainer>
        <MemberCardImage
          alt={name || "member photo"}
          src={
            imageURL ||
            "https://image.shutterstock.com/image-vector/smile-icon-vector-face-emoticon-260nw-1721368459.jpg"
          }
        />
      </MemberCardImageContainer>

      <NovaSpacer y={CW / 12} />

      {/* Bold, larger name (not a link) */}
      <Name>{name}</Name>

      {/* Smaller role */}
      <RoleText>{role}</RoleText>

      {/* LinkedIn button below, only if a URL exists */}
      {linkedin && (
        <SocialRow>
          <LinkedInIcon
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${name} on LinkedIn`}
            title="LinkedIn"
          />
        </SocialRow>
      )}
    </MemberCardContainer>
  );
};

const Team = ({ data }) => {
  const nodes = data.allContentfulMember.nodes;
  const memberData = shuffle(nodes);

  // --- Leadership helpers ---
  const LEADER_ROLES = [
    "President",
    "Internal Vice President",
    "External Vice President",
    "Design Director",
    "Finance Director",
  ];
  const roleOrder = LEADER_ROLES.reduce(
    (m, r, i) => ((m[r.toLowerCase()] = i), m),
    {}
  );
  const norm = (s) => (s || "").trim().toLowerCase();
  const isLeader = (p) => LEADER_ROLES.some((r) => norm(p.role) === norm(r));
  const picURL = (p) =>
    p?.profilePicture?.localFile?.publicURL ||
    (p?.profilePicture?.file?.url ? `https:${p.profilePicture.file.url}` : "");

  const leaders = nodes
    .filter((p) => p.name && isLeader(p))
    .sort(
      (a, b) =>
        (roleOrder[norm(a.role)] ?? 999) - (roleOrder[norm(b.role)] ?? 999)
    );
  const leaderNames = new Set(leaders.map((p) => p.name));
  console.log(memberData);

  return (
    <Layout>
      <SEO metaTitle={"Nova | Meet the Team"} />
      <PageContainer>
        <SectionBox>
          <ColoredStars />
          <NovaSpacer y={64} />
          <NovaH1 center>Meet The Team</NovaH1>
          <NovaSpacer y={24} />
          <PDiv>
            <NovaP center>
              We are a close-knit group of CS, design, and business students at
              UCLA, each actively participating in outreach, problem-solving,
              and development.
            </NovaP>
          </PDiv>
        </SectionBox>
        <NovaSpacer y={96} />
        <GradientToImage>
          <WhiteStars />

          <SectionBox>
            <NovaSpacer y={64} />
            <NovaSub center>25-26 Board</NovaSub>
            <NovaSpacer y={48} />
            <MemberCardLayout>
              {leaders.map((person) => (
                <MemberCard
                  key={person.name}
                  name={person.name}
                  imageURL={picURL(person)}
                  role={person.role}
                  linkedin={person.linkedinURL}
                />
              ))}
            </MemberCardLayout>
          </SectionBox>
          <NovaSpacer y={96} />
          <SectionBox>
            <NovaSpacer y={64} />
            <NovaSub center>Members</NovaSub>
            <NovaSpacer y={48} />
            <MemberCardLayout>
              {memberData
                .filter(
                  (person) =>
                    person.name &&
                    person.name !== "Example Content" &&
                    person.name.length !== 0 &&
                    person.active &&
                    !leaderNames.has(person.name)
                )
                .map((person) => {
                  console.log(person);
                  const projects =
                    person.project_case_study &&
                    person.project_case_study.map((p) => p.name).join(", ");
                  return (
                    <MemberCard
                      name={person.name}
                      imageURL={person.profilePicture.file.url}
                      role={person.role}
                      linkedin={person.linkedinURL}
                    />
                  );
                })}
            </MemberCardLayout>
          </SectionBox>
          <NovaSpacer y={144} />
          <SectionBox>
            <ColoredStars />

            <a id="join">
              <NovaSub center>Join The Team</NovaSub>
            </a>
            <NovaSpacer y={24} />
            <JoinContain>
              <JoinDiv>
                <NovaP>
                  We're always looking to grow the family with fellow UCLA
                  students eager to use their skills to do good. Don't worry too
                  much about experience &#8212; we like to see drive and
                  potential.
                </NovaP>
                <NovaSpacer y={24} />
                <NovaP>
                  Our Fall 2025 Recruitment is here! Visit the{" "}
                  <NovaLink underline to="/join">
                    recruitment page
                  </NovaLink>{" "}
                  for more information!
                </NovaP>
              </JoinDiv>
              <JoinDiv>
                <Img src={zoom} alt="remote meetings" />
              </JoinDiv>
            </JoinContain>
            <NovaSpacer y={20} />
            {/* <Button backgroundColor="#CFCFCF" textColor="#000000">
          Apply Here
        </Button> */}
          </SectionBox>
        </GradientToImage>

        <NovaSpacer y={144} />

        <SectionBox>
          <ColoredStars />

          <NovaH1 center>Alumni</NovaH1>
          <NovaSpacer y={96} />
          <MemberCardLayout>
            {memberData
              .filter(
                (person) =>
                  person.name &&
                  person.name !== "Example Content" &&
                  person.name.length !== 0 &&
                  !person.active
              )
              .map((person) => {
                return (
                  <AlumniCard
                    name={person.name}
                    linkedin={person.linkedinURL}
                  />
                );
              })}
          </MemberCardLayout>
        </SectionBox>
        <NovaSpacer y={96} />
      </PageContainer>
    </Layout>
  );
};

const AlumniCard = ({ name, linkedin }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <NovaP center>
        <NovaA href={linkedin} target="_blank">
          <b>{name}</b>
        </NovaA>
      </NovaP>
    </div>
  );
};

export default Team;

export const query = graphql`
  query {
    allContentfulMember {
      nodes {
        active
        name
        linkedinURL
        role
        project_case_study {
          name
        }
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
