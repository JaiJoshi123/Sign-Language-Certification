import React from "react"
import styled from "styled-components"
// import Wave from "../Wave"
import WaveBlue from "../Wave-Blue"

const SectionGroup2 = styled.div`
  background: url(${props => props.image});
  height: 720px;
  background-size: cover;
  position: relative;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionTitleGroup2 = styled.div`
  position: relative;
  height: 100%;
`

const SectionTitle2 = styled.h3`
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 60px;
  margin: 0;
  line-height: 1.2;
  background: linear-gradient(102.24deg, #f5a124 0%, #d82b63 100%);
  text-align: center;
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 720px) {
    font-size: 40px;
  }
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

const Section2 = props => (
  <SectionGroup2 image={props.image}>
    <WaveTop>
      <WaveBlue />
    </WaveTop>
    <WaveBottom>
      <WaveBlue />
    </WaveBottom>
    <SectionTitleGroup2>
      <SectionTitle2>{props.title2}</SectionTitle2>
      <SectionTitle2>{props.title3}</SectionTitle2>
    </SectionTitleGroup2>
  </SectionGroup2>
)

export default Section2
