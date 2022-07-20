import React from "react"
import {Link} from "gatsby"
import "./Card.css"

const Card = props => (
  <div className="Card">
    <Link to="/course">
      <img src={props.image} style={{width: "446px",height: "248px"}} alt="Card"/>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Link>
  </div>
)

export default Card
