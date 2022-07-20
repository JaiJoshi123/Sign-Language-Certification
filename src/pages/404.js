import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Checkout App</Link>
  </div>
)

export default NotFoundPage
