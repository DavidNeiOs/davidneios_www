import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../layout"
import SEO from "../components/seo"
import { Text } from "../components/Text"
import { LiquidLink } from "../components/link"
import { media } from "../theme"
import { getLocalText } from "../utils/get-local-text"
import { PortableText } from "../components/portable-text"

const Portfolio = (props: any) => {
  const { data } = props;

  const localize = getLocalText("en");
  const { allSanityProject: {nodes: projects}} = localize(data);
  
  return (
    <Layout path={props.path}>
      <SEO title="Portfolio" />
      <ProjectsContainer>
      {projects.map((project:any) => (
        <Project key={project.id}>
        <Title variant="heading3Bold" withComponent="h3">
          {project.name}
        </Title>
        <ImageContainer>
          <Image
            fluid={project.image.asset.fluid}
            style={{ height: "100%" }}
          />
        </ImageContainer>
        <Description>
          <Text variant="bodyMediumPrimary" withComponent="p">
            <PortableText blocks={project._rawLongDescription} />
          </Text>
          {project.isLive && (
            <LiquidLink to={project.link.link}>
            <Text variant="bodySmallPrimary">live</Text>
          </LiquidLink>
          )}  
        </Description>
        <TagsContainer>
          {project.tech.map((tag: any, index: number) => (
            <Tag key={index}>
              <Text variant="bodySmallPrimary">{tag}</Text>
          </Tag>
          ))}
        </TagsContainer>
      </Project>
      ))}
      </ProjectsContainer>
    </Layout>
  )
}

export const PORTFOLIO_QUERY = graphql`
  query {
    allSanityProject(sort: {fields: _updatedAt, order: DESC}) {
      nodes {
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
        link {
          _type
          link
        }
        name
        tech
        _rawLongDescription(resolveReferences: {maxDepth: 5})
        isLive
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
    background: var(--detail);
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
  background-color: var(--detail);
  padding: 4px 8px;
  border-radius: 100px;
  color: var(--text-inverted);
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`
export default Portfolio
