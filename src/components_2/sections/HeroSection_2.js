import React from "react"
import styled, { keyframes } from "styled-components"
import WaveBackground from "../backgrounds/WaveBackground"
// import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1,H2, H3 } from "../styles/TextStyles"
import Header from "../layout/Header"

function HeroSection() {
  return (
    <Wrapper>
      <Header/>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <span>American Sign Language</span>
          </Title>
          <Title2>
            8 Modules
          </Title2>
          <Description>
          Learn <span>sign language</span> and the evolution of the language today with 
          online courses and ASL lessons! Whether or not you already have <span>conversational</span> ASL skills, 
          take ASL courses to learn basic signs and even become an ASL pro.
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  ${'' /* max-width: 1234px; */}
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  ${'' /* grid-template-columns: 360px auto; */}

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  ${'' /* max-width: 360px; */}
  display: grid;
  gap: 10px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
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

const Description = styled(H3)`
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
