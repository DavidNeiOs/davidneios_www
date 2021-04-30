import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes, css } from "styled-components"
import { FaMapPin } from "react-icons/fa"

import { Layout } from "../layout"
import SEO from "../components/seo"
import { PortableText } from "../components/portable-text"
import { Text } from "../components/Text"
import { media } from "../theme"
import { getLocalText } from "../utils/get-local-text"
import { groupArrayToObj } from "../utils/group-array-to-object"
import { modifyExperienceArray } from "../utils/modify-experience-array"

const skillsOrder = [
  "frontend",
  "mobile",
  "backend",
  "languages",
  "sourceControl",
]
const skillNames = [
  "Front-End",
  "Mobile",
  "Back-End",
  "Languages",
  "Source Control",
]

const AboutPage = (props: any) => {
  const { data } = props

  const localize = getLocalText("en")
  const {
    allSanitySkills: { group: skills },
    allSanityExperience: { nodes: experienceArr },
    sanityAboutPage: page,
  } = localize(data)

  const skillsObj = groupArrayToObj(skills)
  const experiences = modifyExperienceArray(experienceArr, "en")

  useEffect(() => {
    ;(window as any).__onBackdropClose()
  }, [])

  return (
    <Layout path={props.path}>
      <SEO title="About" />
      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          {page.introduction.title}
        </SectionTitle>
        <Text variant="bodyLargePrimary" withComponent="p">
          <PortableText blocks={page._rawIntroduction.introText} />
        </Text>
      </Section>
      <hr />

      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          {page.experienceTitle}
        </SectionTitle>
        {experiences.map(
          ({ isCurrent, timeString, place, position, company, id }) => (
            <ExperienceContainer key={id}>
              <Selector current={isCurrent} />
              <Experience>
                <ExperienceLocation>
                  <Text
                    variant="bodyMediumPrimary"
                    style={{ marginRight: "2rem" }}
                  >
                    {timeString}
                  </Text>
                  <Text variant="bodySmallPrimary">
                    <FaMapPin /> {place} 🇨🇦
                  </Text>
                </ExperienceLocation>
                <Text variant="bodyLargeBoldPrimary">{position}</Text>
                <Text variant="bodyMediumPrimary">{company}</Text>
              </Experience>
            </ExperienceContainer>
          )
        )}
      </Section>
      <hr />

      <Section>
        <SectionTitle variant="heading2" withComponent="h2">
          {page.skillsTitle}
        </SectionTitle>
        {skillsOrder.map((skill, index: number) => (
          <>
            <Text variant="heading3" withComponent="h4">
              {skillNames[index]}:
            </Text>
            <SkillsContainer>
              {skillsObj[skill].map((obj: any) => (
                <Skill>
                  <ImageWrapper>
                    <Img fluid={obj.image.asset.fluid} />
                  </ImageWrapper>
                  <Text variant="bodyMediumPrimary">{obj.name}</Text>
                </Skill>
              ))}
            </SkillsContainer>
          </>
        ))}
      </Section>
    </Layout>
  )
}

export const ABOUT_QUERY = graphql`
  query {
    allSanitySkills {
      group(field: skillSet) {
        nodes {
          image {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
          name
          id
        }
        fieldValue
      }
    }
    allSanityExperience(sort: { fields: endDate, order: DESC }) {
      nodes {
        company
        endDate
        isCurrent
        place
        position
        startDate
        id
      }
    }
    sanityAboutPage {
      experienceTitle {
        _type
        en
        es
        fr
      }
      skillsTitle {
        _type
        en
        es
        fr
      }
      introduction {
        title {
          _type
          en
          es
          fr
        }
      }
      _rawIntroduction(resolveReferences: { maxDepth: 5 })
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
  background: var(--detail);
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
