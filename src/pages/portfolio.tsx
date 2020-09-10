import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../layout"
import SEO from "../components/seo"
import { Text } from "../components/Text"
import { LiquidLink } from "../components/link"
import { media } from "../theme"

const Portfolio = (props: any) => {
  const { data } = props
  return (
    <Layout path={props.path}>
      <SEO title="Portfolio" />
      <ProjectsContainer>
        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            COVID-19 Self-Assessment tool for people in the carebbean islands
          </Title>
          <ImageContainer>
            <Image
              fluid={data.covid.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              This tool was created for people to know wheter they need to be
              tested for COVID-19 or not. This will help avoid overloading on
              their country health systems.
            </Text>
            <LiquidLink to="https://covid.caribbeanhealth.info/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>
          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">Gatsby</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">JavaScript</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">MDX</Text>
            </Tag>
          </TagsContainer>
        </Project>

        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            Uplet
          </Title>
          <ImageContainer>
            <Image
              fluid={data.uplet.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              I was part of the team of developers that were creating a mobile
              solution for independant professionals who need to find space for
              their practice.
            </Text>
            <LiquidLink to="https://www.upletspace.com/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>

          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">React-Native</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Gatsby</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Firebase</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">TypeScript</Text>
            </Tag>
          </TagsContainer>
        </Project>

        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            Tolobi
          </Title>
          <ImageContainer>
            <Image
              fluid={data.tolobi.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              Full-Stack solution for a real state company in Ontario. I was
              part of the team who build it.
            </Text>
            <LiquidLink to="https://tolobi.com/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>

          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">React</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">GraphQL</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">TypeScript</Text>
            </Tag>
          </TagsContainer>
        </Project>

        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            Nexter
          </Title>
          <ImageContainer>
            <Image
              fluid={data.nexter.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              Dummy website (only styles).
            </Text>
            <LiquidLink to="http://nexter-david.surge.sh/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>

          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">React</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Styled-Components</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Personal</Text>
            </Tag>
          </TagsContainer>
        </Project>

        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            Trillo
          </Title>
          <ImageContainer>
            <Image
              fluid={data.trillo.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              Dummy website (only styles).
            </Text>
            <LiquidLink to="http://trillo-david.surge.sh/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>

          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">React</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">SASS</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Personal</Text>
            </Tag>
          </TagsContainer>
        </Project>

        <Project>
          <Title variant="heading3Bold" withComponent="h3">
            Natours
          </Title>
          <ImageContainer>
            <Image
              fluid={data.natours.childImageSharp.fluid}
              style={{ height: "100%" }}
            />
          </ImageContainer>
          <Description>
            <Text variant="bodyMediumPrimary" withComponent="p">
              Dummy website (only styles).
            </Text>
            <LiquidLink to="http://natours-david.surge.sh/">
              <Text variant="bodySmallPrimary">live</Text>
            </LiquidLink>
          </Description>

          <TagsContainer>
            <Tag>
              <Text variant="bodySmallPrimary">React</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">SASS</Text>
            </Tag>
            <Tag>
              <Text variant="bodySmallPrimary">Personal</Text>
            </Tag>
          </TagsContainer>
        </Project>
      </ProjectsContainer>
    </Layout>
  )
}

export const PORTFOLIO_QUERY = graphql`
  query {
    covid: file(relativePath: { eq: "images/covid19-sat.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uplet: file(relativePath: { eq: "images/upletspace.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tolobi: file(relativePath: { eq: "images/tolobi.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nexter: file(relativePath: { eq: "images/nexter.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trillo: file(relativePath: { eq: "images/trillo.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    natours: file(relativePath: { eq: "images/natours.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProjectsContainer = styled.div`
  margin: 4rem 0;
`

const Project = styled.div`
  display: grid;
  grid-row-gap: 1.6rem;
  margin-bottom: 2rem;

  @media ${media.tablet} {
    min-height: 300px;
    grid-template-columns: 1fr 0.9fr;
    grid-gap: 1rem;
    align-content: start;
    position: relative;
  }
`

const Title = styled(Text)`
  position: relative;
  margin-top: 1rem;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: start;
  padding-top: 2rem;
  margin-top: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 0;
    height: 1.8rem;
    width: 90%;
    background: var(--terciary);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`

const Description = styled.div`
  align-self: start;
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  & p {
    margin-bottom: 2rem;
  }
`

const ImageContainer = styled.div`
  height: 250px;
  width: 100%;

  @media ${media.tablet} {
    position: absolute;
    right: 0;
    height: 90%;
    width: 47%;
  }
`
const Image = styled(Img)`
  border-bottom-left-radius: 5rem;
  object-fit: cover;
  @media ${media.tablet} {
    border-bottom-left-radius: 10rem;
  }
`

const TagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${media.tablet} {
    position: absolute;
    top: 0.5rem;
    right: 0;
    width: 47%;
  }
`

const Tag = styled.li`
  display: inline-block;
  background-color: var(--terciary);
  padding: 4px 8px;
  border-radius: 100px;
  color: var(--text-inverted);
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`
export default Portfolio
