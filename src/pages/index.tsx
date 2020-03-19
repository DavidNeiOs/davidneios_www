import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Typist from "react-typist"

import { Layout } from "../layout"
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
            <Title withComponent="h1" variant="heading1Bold">
              Hello, I'm David!
            </Title>
            <Text variant="bodyLargePrimary" withComponent="p">
              I'm a <strong>Software developer</strong>. Born and raised in
              Colombia. I live now in Montreal 🇨🇦 where I work at{" "}
              <Link to={"https://upletspace.com"}>Uplet</Link>.
            </Text>
          </IntroductionSection>
        </ProfileSection>
        <Text
          variant="heading3"
          withComponent="h3"
          style={{ textAlign: "center" }}
        >
          <Text>I develop applications in </Text>
          <Typist cursor={{ hideWhenDone: true }} startDelay={1500}>
            <Text>JavaScript</Text>
            <Typist.Backspace count={10} delay={2000} />
            <Text>TypeScript</Text>
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

const moveInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px)
  }
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  @media ${media.tablet} {
    margin: 4rem 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const ImgContainer = styled.div`
  width: 15rem;
  margin-bottom: 2rem;

  @media ${media.phablet} {
    width: 20rem;
  }

  @media ${media.tablet} {
    margin-bottom: 0;
  }
`

const Title = styled(Text)`
  animation: ${moveInTop} 1s ease-in;
  margin-bottom: 1.6rem;
`

const IntroductionSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.tablet} {
    margin-left: 20px;
  }

  @media ${media.desktop_large} {
    margin-left: 0;
  }
`
export default IndexPage
