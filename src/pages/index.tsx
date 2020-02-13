import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Text from "../components/Text"
import SEO from "../components/seo"

interface Props {
  intl: any
}

const IndexPage = ({ intl }: Props) => (
  <Layout>
    <SEO title="Home" />
    <Text withComponent="h1" variant="headerLargePrimarydBold">
      {intl.formatMessage({ id: "index.h1.title" })}
    </Text>
    <Text variant="bodyLargePrimary">Born and raised in Colombia 🇨🇴</Text>
    <Text variant="bodyLargePrimary">
      I have been living in Montreal, CA for almost 4 years
    </Text>
  </Layout>
)

export default injectIntl(IndexPage)
