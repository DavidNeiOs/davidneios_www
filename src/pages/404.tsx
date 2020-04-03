import React from "react"

import { Layout } from "../layout"
import SEO from "../components/seo"

const NotFoundPage = (props: any) => (
  <Layout path={props.path}>
    <SEO title="404: Not found" />
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </Layout>
)

export default NotFoundPage
