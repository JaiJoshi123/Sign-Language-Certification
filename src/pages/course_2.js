// import React from "react"
// import { Link } from "gatsby"
// import SEO from "../components_2/layout/seo"
// import '../styles/Course.css'


// const NotFoundPage = () => {
//   const list = []
//   for(let i=0;i<=20;i+=5){
//     list.push(<div className='card' >
//     <div className='card__body'>
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg6DmWabdl25szUHG9KWG_6uK_BnB7zFYUg&usqp=CAU" />
//         <h2 className='card__title' >Module {(i/5)+1}</h2>
//         <p className='card__description'>Break into this exciting module, designed exclusively for you. No prior experience necessary to get started.</p>
//     </div>
//     <Link to="/module" state={{ startValue: i, endValue: (i==20?25:i+4), type: "letters" }}><button className='course__btn'>Alphabet Set {(i/5)+1}</button></Link>
//     </div>)
//   }

//   return(
//   <div>
//     <SEO title="Course" />
//     <div className='course'>
//         <h1>American Sign Language</h1>
//         <p>Learn sign language and the evolution of the language today on edX with online courses and asl lessons! Whether or not you already have conversational ASL skills, take ASL courses to learn basic signs and even become an ASL pro.</p>
//         <Link to="/">
//             <button className='course__btn1'>Learn Course</button>
//         </Link>
//         <div className='module'>  
//             {list}
//             <div className='card' >
//                 <div className='card__body'>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg6DmWabdl25szUHG9KWG_6uK_BnB7zFYUg&usqp=CAU" />
//                     <h2 className='card__title' >Module 6</h2>
//                     <p className='card__description'>Break into this exciting module, designed exclusively for you. No prior experience necessary to get started.</p>
//                 </div>
//                 <Link to="/module" state={{ startValue: 0, endValue: 3, type: "words" }}><button className='course__btn'>Word Set 1</button></Link>
//             </div>
//         </div>
        
//     </div>
//   </div>
// )}

// export default NotFoundPage