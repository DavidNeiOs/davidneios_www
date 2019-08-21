import React from "react"
import Link from "../components/styles/Link"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

interface Props {
  intl: any
}
const IndexPage = ({ intl }: Props) => (
  <Layout>
    <SEO title="Home" />
    <h1>{intl.formatMessage({ id: "index.h1.title" })}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default injectIntl(IndexPage)
