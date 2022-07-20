import React from "react"
import Card2 from "../components_2/cards/Card2"
import Footer from "../components_2/layout/Footer"
import SEO from "../components_2/layout/seo"
import HeroSection_2 from "../components_2/sections/HeroSection_2"
import { themes } from "../components_2/styles/ColorStyles"
import { H2 } from "../components_2/styles/TextStyles"
import styled from "styled-components"

function IndexPage() {
  var cardList = []
  for(let i=0;i<=20;i+=5){
      cardList.push(
        <Card2
            title={"Letters Set "+((i/5)+1)}
            text="5 Words"
            image={require("../../static/images/app/gradient_3.jpg")}
            startValue = {i}
            endValue = {i===20?25:i+4}
            type="letters"
            id={`l${((i/5)+1)}`}
        />
        )
  }
  return (
    <>
      <HeroSection_2/>
      <SEO title="Course" />
      <div className="Cards">
        <div className="CardGroup">
        {cardList}
        <Card2
            title="Words Set 1"
            text="3 Words"
            image={require("../../static/images/app/gradient_6.jpg")}
            startValue = {0}
            endValue = {3}
            type="words"
            id="w1"
        />
        <Card2
            title="Number Set 1"
            text="5 Numbers"
            image={require("../../static/images/app/gradient_4.jpg")}
            startValue = {0}
            endValue = {4}
            type="numbers"
            id="n1"
        />
        <Card2
            title="Number Set 2"
            text="5 Numbers"
            image={require("../../static/images/app/gradient_4.jpg")}
            startValue = {5}
            endValue = {9}
            type="numbers"
            id="n2"
        />
        </div>
      </div>
      <Footer/>
    </>
  )
}

const Title2 = styled(H2)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

export default IndexPage
