import React from "react"
import { NovaLink, NovaSpacer, NovaP, NovaH2, Arrow } from "./PageAssets"
import styled from "@emotion/styled"
import phoneFrame from "../assets/phone.png"
import distributionVideo from "../assets/distribution.mp4"
import distributionImage from "../assets/distribution.png"
import distributionPhoto1 from "../assets/distributionphoto1.png"
import projectRopaVideo from "../assets/projectropa.mp4"
import projectRopaImage from "../assets/projectropa.png"
import projectRopaPhoto1 from "../assets/projectropaphoto1.png"
import HoverVideoPlayer from "react-hover-video-player"
import { isMobile } from "react-device-detect"

const mobile = `@media (max-width: 800px)`

const Container = styled.div`
  height: 65vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PhoneRecordingContainer = styled.div`
  position: absolute;
  height: 100%;
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

const Photo = styled.img`
  width: 100%;
  max-height: 70%;
  min-height: 60%;
  z-index: 0;
  object-fit: cover;
  position: absolute;
`

export const CaseDiv = styled.div`
  /* display: inline-grid;
  grid-template-columns: 100%;
  grid-row-gap: 160px;
  ${mobile} {
    grid-row-gap: 120px;
  } */
`

const PhoneRecording = ({ video, image }) => {
  return (
    <PhoneRecordingDiv>
      <PhoneImg src={phoneFrame} />
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
  )
}

const ProjectRopa = () => {
  return (
    <React.Fragment>
      <NovaSpacer y={160} />
      <Container>
        <PhoneRecordingContainer>
          <PhoneRecording video={projectRopaVideo} image={projectRopaImage} />
        </PhoneRecordingContainer>
        <Photo src={projectRopaPhoto1} />
      </Container>
    </React.Fragment>
  )
}

const DistributionTracker = () => {
  return (
    <Container>
      <PhoneRecordingContainer>
        <PhoneRecording video={distributionVideo} image={distributionImage} />
      </PhoneRecordingContainer>
      <Photo src={distributionPhoto1} />
    </Container>
  )
}

const CaseStudyImages = ({ name }) => {
  console.log(name)
  switch (name) {
    case "Coordinating Survival Kit Distribution":
      return <DistributionTracker />
    case "Project Ropa Offline Forms App":
      return <ProjectRopa />
  }
  return <></>
}

const HoverBubble = styled.div`
  position: relative;
  background: #282547;
  border-radius: 10px;
  width: 200px;
  padding: 0 12px;
  margin: 0 auto;
  margin-bottom: 18px;

  ${mobile} {
    padding: 0;
    margin-bottom: 12px;
    border-radius: 6px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #282547;
    border-bottom: 0;
    margin-left: -8px;
    margin-bottom: -8px;
  }
`

const HoverP = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 250%;
  /* or 26px */

  text-align: center;
  color: #d7a3e1;
  ${mobile} {
    font-size: 12px;
  }
`

export default ({ data }) => {
  const { name, description, slug } = data

  return (
    <div>
      {name === "Coordinating Survival Kit Distribution" && (
        <HoverBubble>
          <HoverP>{isMobile ? "Click" : "Hover"} to see it in action!</HoverP>
        </HoverBubble>
      )}
      <CaseStudyImages name={name} />
      <NovaSpacer y={32} />
      <NovaH2>{name}</NovaH2>
      <NovaSpacer y={16} />
      <NovaP>{description.description}</NovaP>
      <NovaSpacer y={24} />
      <NovaP>
        <Arrow />
        <NovaLink underline to={`/work/${slug}`}>
          View the case study
        </NovaLink>
      </NovaP>
    </div>
  )
}
