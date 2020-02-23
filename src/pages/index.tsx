import React from "react"
import { Layout } from "../components/layout"
import Text from "../components/Text"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text withComponent="h1" variant="headerLargePrimarydBold">
      Full-Stack developer
    </Text>
    <Text variant="bodyLargePrimary">Born and raised in Colombia 🇨🇴</Text>
    <Text variant="bodyLargePrimary">
      I have been living in Montreal, CA for almost 4 years
    </Text>
  </Layout>
)

export default IndexPage
