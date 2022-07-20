import React from "react"
import styled from "styled-components"
// import Wave from "../Wave"
import WaveBlue from "../Wave-Blue"

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  width: 128px;
  margin: 0 auto;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 40px;
  grid-template-rows: auto 100%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  font-size: 60px;
  margin: 0px;
  line-height: 1.2;
  background: linear-gradient(102.24deg, #ffffff 0%, #b49396 100%);
  text-align: center;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
  max-width: 500px;
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop>
      <WaveBlue />
    </WaveTop>
    <WaveBottom>
      <WaveBlue />
    </WaveBottom>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
