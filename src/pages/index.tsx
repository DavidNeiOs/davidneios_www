import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Typist from "react-typist"

import { Layout } from "../components/layout"
import { Text } from "../components/Text"
import { Link } from "../components/link"
import SEO from "../components/seo"
import { media } from "../theme"

const IndexPage = (props: any) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PageContainer>
        <ProfileSection>
          <ImgContainer>
            <Img
              fluid={props.data.profile_img.childImageSharp.fluid}
              style={{ borderRadius: "50%" }}
            />
          </ImgContainer>
          <IntroductionSection>
            <Text withComponent="h1" variant="headerLargePrimarydBold">
              Hello, I'm David!
            </Text>
            <Text variant="bodyLargePrimary">
              I'm a Software developer. Born and raised in Colombia. I live now
              in Montreal 🇨🇦 where I work at{" "}
              <Link to={"https://upletspace.com"}>Uplet</Link>.
            </Text>
          </IntroductionSection>
        </ProfileSection>
        <Text
          variant="bodyLargePrimary"
          style={{ marginBottom: "32px", textAlign: "center" }}
        >
          <Typist cursor={{ hideWhenDone: true }}>
            I develop applications in JavaScript
            <Typist.Backspace count={10} delay={3000} />
            <span>TypeScript</span>
          </Typist>
        </Text>
        <Text variant="bodyLargePrimary">
          I have experience working with React, Node(Express) and React Native
          for mobile development. Some of the technologies I use include Gatsby,
          GraphQL and firebase.
        </Text>
      </PageContainer>
    </Layout>
  )
}

export const INDEX_QUERY = graphql`
  query {
    profile_img: file(relativePath: { eq: "images/profile_square.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;

  @media ${media.tablet} {
    flex-direction: row;
    align-items: center;
  }
`

const ImgContainer = styled.div`
  width: 203px;
  margin: 20px auto;
`

const IntroductionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 16px; */
  @media ${media.tablet} {
    margin-left: 20px;
  }
`
export default IndexPage
