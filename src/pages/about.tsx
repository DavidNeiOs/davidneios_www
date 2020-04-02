import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes, css } from "styled-components"
import { FaMapPin } from "react-icons/fa"

import { Layout } from "../layout"
import SEO from "../components/seo"
import { Text } from "../components/Text"
import { media } from "../theme"

const AboutPage = (props: any) => {
  const { data } = props

  return (
    <Layout path={props.path}>
      <SEO title="About" />
      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          Intro:
        </SectionTitle>
        <Text variant="bodyLargePrimary" withComponent="p">
          I am originally from Colombia, where I found a passion for programming
          in my first year of computer science. As I wanted to broaden my
          horizons, I moved to Brisbane, Australia where I mastered English. I
          am now living in Montreal, where I have specialized in Web Development
          and acquired experience working with Javascript and Typescript. I’m
          always looking to learn more.
        </Text>
      </Section>
      <hr />

      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          Experience:
        </SectionTitle>
        <ExperienceContainer>
          <Selector current />
          <Experience>
            <ExperienceLocation>
              <Text variant="bodyMediumPrimary" style={{ marginRight: "2rem" }}>
                March 2020 - Current
              </Text>
              <Text variant="bodySmallPrimary">
                <FaMapPin /> Montreal 🇨🇦
              </Text>
            </ExperienceLocation>
            <Text variant="bodyLargeBoldPrimary">Full-Stack Developer</Text>
            <Text variant="bodyMediumPrimary">Freelance</Text>
          </Experience>
        </ExperienceContainer>

        <ExperienceContainer>
          <Selector />
          <Experience>
            <ExperienceLocation>
              <Text variant="bodyMediumPrimary" style={{ marginRight: "2rem" }}>
                September 2019 - March 2020
              </Text>
              <Text variant="bodySmallPrimary">
                <FaMapPin /> Montreal 🇨🇦
              </Text>
            </ExperienceLocation>
            <Text variant="bodyLargeBoldPrimary">Software Developer</Text>
            <Text variant="bodyMediumPrimary">Uplet</Text>
          </Experience>
        </ExperienceContainer>

        <ExperienceContainer>
          <Selector />
          <Experience>
            <ExperienceLocation>
              <Text variant="bodyMediumPrimary" style={{ marginRight: "2rem" }}>
                Juin 2019 - September 2019
              </Text>
              <Text variant="bodySmallPrimary">
                <FaMapPin /> Montreal 🇨🇦
              </Text>
            </ExperienceLocation>
            <Text variant="bodyLargeBoldPrimary">Teaching Coach</Text>
            <Text variant="bodyMediumPrimary">
              Journey Education - Concordia Bootcamps
            </Text>
          </Experience>
        </ExperienceContainer>

        <ExperienceContainer>
          <Selector />
          <Experience>
            <ExperienceLocation>
              <Text variant="bodyMediumPrimary" style={{ marginRight: "2rem" }}>
                January 2019 - August 2019
              </Text>
              <Text variant="bodySmallPrimary">
                <FaMapPin /> Montreal 🇨🇦
              </Text>
            </ExperienceLocation>
            <Text variant="bodyLargeBoldPrimary">Full-Stack Developer</Text>
            <Text variant="bodyMediumPrimary">Bureau Billy</Text>
          </Experience>
        </ExperienceContainer>
      </Section>
      <hr />

      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          Skills:
        </SectionTitle>
        <Text variant="heading3" withComponent="h4">
          Front-End:
        </Text>
        <SkillsContainer>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.react.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">React</Text>
          </Skill>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.html.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">HTML</Text>
          </Skill>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.css.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">CSS</Text>
          </Skill>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.sass.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">SASS</Text>
          </Skill>
          <Skill>
            <ImageWrapper background="linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87))">
              <Img fluid={data.styledc.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">Styled Components</Text>
          </Skill>
        </SkillsContainer>

        <Text variant="heading3" withComponent="h4">
          Mobile:
        </Text>
        <SkillsContainer>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.react.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">React-Native</Text>
          </Skill>
        </SkillsContainer>

        <Text variant="heading3" withComponent="h4">
          Back-End:
        </Text>
        <SkillsContainer>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.nodejs.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">NodeJS</Text>
          </Skill>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.mongodb.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">MongoDB</Text>
          </Skill>
        </SkillsContainer>

        <Text variant="heading3" withComponent="h4">
          Languages:
        </Text>
        <SkillsContainer>
          <Skill>
            <ImageWrapper>
              <Img
                fluid={data.javascript.childImageSharp.fluid}
                className="full-size"
              />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">JavaScript</Text>
          </Skill>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.typescript.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">TypeScript</Text>
          </Skill>
        </SkillsContainer>

        <Text variant="heading3" withComponent="h4">
          Source control:
        </Text>
        <SkillsContainer>
          <Skill>
            <ImageWrapper>
              <Img fluid={data.git.childImageSharp.fluid} />
            </ImageWrapper>
            <Text variant="bodyMediumPrimary">Git</Text>
          </Skill>
        </SkillsContainer>
      </Section>
    </Layout>
  )
}

export const ABOUT_QUERY = graphql`
  query {
    html: file(relativePath: { eq: "images/html5.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "images/react.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    css: file(relativePath: { eq: "images/css3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    javascript: file(relativePath: { eq: "images/javascript.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mongodb: file(relativePath: { eq: "images/mongodb.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodejs: file(relativePath: { eq: "images/nodejs.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sass: file(relativePath: { eq: "images/sass.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    styledc: file(relativePath: { eq: "images/styled-components.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    typescript: file(relativePath: { eq: "images/typescript.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    css: file(relativePath: { eq: "images/css3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    git: file(relativePath: { eq: "images/git.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Section = styled.section`
  margin: 3rem 0;

  @media ${media.tablet} {
    padding: 2rem;
  }
`

const SectionTitle = styled(Text)`
  margin-bottom: 1.5rem;
`

const bouncing = keyframes`
  0% {
		transform: translate3d(0, 10px, 0) scale(1.2, 0.85);
	}

	100% {
		transform: translate3d(0, -10px, 0) scale(0.9, 1.1);
	}
`

const animationMixin = css`
  animation: ${bouncing} 0.4s alternate infinite
    cubic-bezier(0.6, 0.05, 0.15, 0.95);
`

const Selector = styled.div<{ current?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.5rem;
  border-radius: 50%;
  background: var(--terciary);
  ${props =>
    props.current
      ? animationMixin
      : "animation: none 0 ease 0 1 normal none running"};
`

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }
`

const Experience = styled.div`
  display: flex;
  flex-direction: column;
`

const ExperienceLocation = styled.div`
  display: flex;
  align-items: center;
`

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 11rem;
  text-align: center;

  > div {
    margin-bottom: 1rem;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & ${Skill}:not(:last-child) {
    margin-right: 2.5rem;
  }
`

const ImageWrapper = styled.div<{ background?: string }>`
  height: 8rem;
  width: 8rem;
  background: ${props => (props.background ? props.background : "transparent")};
`

export default AboutPage
