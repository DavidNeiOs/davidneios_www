import React from "react"
import { Link } from "../components/link"

import { Layout } from "../layout"
import SEO from "../components/seo"

const SecondPage = (props: any) => (
  <Layout path={props.path}>
    <SEO title="About" />
    <h1>Hello from the about page</h1>
    <p>Nothing here just yet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
