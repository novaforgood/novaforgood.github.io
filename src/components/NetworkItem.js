import React from "react"
import styled from "@emotion/styled"

const mobile = `@media (max-width: 800px)`

export const NetworkDiv = styled.div`
  margin: 48px auto;
  display: grid;
  grid-row-gap: 48px;
  grid-column-gap: 12%;
  grid-template-columns: 25% 25% 25%;

  ${mobile} {
    grid-template-columns: 48% 48%;
    grid-column-gap: 4%;
  }
`

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  opacity: 0.8;
  filter: saturate(50%);

  &:hover {
    opacity: 1;
    filter: saturate(100%);
  }
`

const NetworkImg = styled.img`
  width: 100%;
`

export default ({ data }) => {

  return (
    <a href={data.website} rel="noreferrer" target="_blank">
      <CenterDiv>
        <NetworkImg alt={`${data.name} Cover`} src={data.logo.file.url} />
      </CenterDiv>
    </a>
  )
}
