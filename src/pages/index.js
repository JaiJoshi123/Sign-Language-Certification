import React from "react"
import Card from "../components_2/cards/Card"
import Layout from "../components_2/layout/layout"
import SEO from "../components_2/layout/seo"
import HeroSection from "../components_2/sections/HeroSection"
// import styled from "styled-components"

// const SectionCaption = styled.p`
//   font-weight: 600;
//   font-size: 18px;
//   text-transform: uppercase;
//   color: #94a4ba;
//   text-align: center;
// `
// const SectionCellGroup = styled.div`
//   color: white;
//   max-width: 800px;
//   margin: 0 auto 100px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 20px;
//   padding: 0 20px;

//   @media (max-width: 800px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <div className="Cards">
        <div className="CardGroup">
          <Card
            title="American Sign Language"
            text="6 modules"
            image={require("../../static/images/app/gradient_5.jpg")}
          />
          <Card
            title="Indian Sign Language"
            text="20 sections"
            image={require("../../static/images/app/gradient_1.jpg")}
          />
          <Card
            title="Japanese Sign Language"
            text="12 sections"
            image={require("../../static/images/app/gradient_4.jpg")}
          />
          {/* <Card
            title="Create a Spritekit game"
            text="15 sections"
            image={require("../../static/images/app/spritekit.jpg")}
          />
          <Card
            title="Build an ARKit 2 app"
            text="10 sections"
            image={require("../../static/images/app/arkit2.jpg")}
          />
          <Card
            title="Sound Design with Cubase"
            text="11 sections"
            image={require("../../static/images/app/sound-design.jpg")}
          />
          <Card
            title="Motion Design in After Effects"
            text="15 sections"
            image={require("../../static/images/app/After_Effects.jpg")}
          />
          <Card
            title="Learn Swift"
            text="15 sections"
            image={require("../../static/images/app/swift2.jpg")}
          />
          <Card
            title="Swift UI for iOS 14"
            text="10 sections"
            image={require("../../static/images/app/SwiftUI.jpg")}
          />
          <Card
            title="Learn Sketch"
            text="20 sections"
            image={require("../../static/images/app/sketch.jpg")}
          /> */}
        </div>
      </div>

      {/* <Section
        image={require("../../static/images/app/wallpaper2.jpg")}
        logo={require("../../static/images/app/logo-react.png")}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      /> */}

      {/* <SectionCaption>12 Sections - 6 Hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell title={cell.title} image={cell.image} />
        ))}
      </SectionCellGroup> */}

      {/* <div class="buttonz">
        <Link to="">
          <button>About React course</button>
        </Link>
      </div> */}

      {/* <Section2
        image={require("../../static/images/app/Topography0044.jpg")}
        title2="Design for everyone"
        title3="Coding for designers"
      /> */}
    </Layout>
  )
}

export default IndexPage
