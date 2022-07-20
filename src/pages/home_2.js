// // import React from "react"

// // import { ChakraProvider } from '@chakra-ui/react'
// // import App from "./app"

// // const IndexPage = ({ location }) => (
// //   <ChakraProvider id="chakra-provider">
// //     <App startValue={location.state.startValue} endValue={location.state.endValue}/>
// //   </ChakraProvider>
// // )

// // export default IndexPage

// import React from "react"
// import { Link } from "gatsby"
// import '../styles/Home.css'
// import SEO from "../components_2/layout/seo"

// const IndexPage = () => (
//   <div>
//     <SEO title="Home" />
//     <div className='pageTop'>
//       <span>Sign Language Courses</span>
//     </div>
//     <div className='card' >

//       <div className='card__body'>
//         <img src="data:image/png;base64,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" />
//         <h2 className='card__title' >Sign Language</h2>
//         <p className='card__description'>Break into a new field like information technology or data science. No prior experience necessary to get started.</p>
//       </div>
//       <Link to="/course">
//         <button className='card__btn'>View Course</button>
//       </Link>
//     </div>

//   </div>
// )

// export default IndexPage