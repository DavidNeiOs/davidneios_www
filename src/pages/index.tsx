import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import Typist from "react-typist"

import { Layout } from "../layout"
import { Text } from "../components/Text"
import { Link, NeonLink } from "../components/link"
import { PortableText } from "../components/portable-text"
import SEO from "../components/seo"
import { media } from "../theme"
import { getLocalText } from "../utils/get-local-text"

const IndexPage = (props: any) => {
  const localize = getLocalText("en")
  const {
    introduction,
    typist,
    _rawIntroduction,
    _rawExperienceIntro,
    projectSection
  } = localize(props.data.sanity)

  return (
    <Layout path={props.path}>
      <SEO title="Home" />
      <PageContainer>
        <ProfileSection>
          <ImgContainer>
            <Img
              fluid={introduction.picture.asset.fluid}
              style={{ height: "100%", width: "100%" }}
            />
          </ImgContainer>
          <IntroductionSection>
            <Title withComponent="h1" variant="heading1Bold">
              {introduction.title}
            </Title>
            <Text variant="bodyLargePrimary">
              <PortableText blocks={_rawIntroduction.introText} />
            </Text>
          </IntroductionSection>
        </ProfileSection>
        <Link
          to={introduction.link.link}
          style={{ alignSelf: "flex-end", marginTop: "1rem" }}
        >
          <Text variant="bodyMediumPrimary">
            {introduction.link.text} &rarr;
          </Text>
        </Link>
        <SubTitle>
          <Text
            variant="heading3"
            withComponent="h3"
            style={{ textAlign: "center" }}
          >
            <Text>{typist.enterText}</Text>
            <Typist cursor={{ hideWhenDone: true }} startDelay={typist.delay}>
              <Text>{typist.startText}</Text>
              <Typist.Backspace
                count={typist.numOfCharsToDelete}
                delay={typist.backspaceDelay}
              />
              <Text>{typist.finalText}</Text>
            </Typist>
          </Text>
        </SubTitle>
        <Text variant="bodyLargePrimary" withComponent="p">
          <PortableText blocks={_rawExperienceIntro} />
        </Text>
        <ProjectsContainer>
          <Text variant="heading4" withComponent="h3">
            {projectSection.title}
          </Text>
          <ProjectsParent>
            {projectSection.projects.map((project: any) => (
              <Project key={project.id}>
                <Caption>
                  <ProjectTitle variant="heading4Bold"  withComponent="h4">
                    {project.name}
                  </ProjectTitle>
                  <Text
                    variant="bodyLargePrimary"
                    style={{ fontStyle: "italic" }}
                  >
                    {project.shortDescription}
                  </Text>
                </Caption>
                <Img fluid={project.image.asset.fluid} />
              </Project>
            ))}
          </ProjectsParent>
          <NeonLink to={projectSection.link.link} style={{ alignSelf: "center" }}>
            <Text variant="bodySmallPrimary" withComponent="p">
              {projectSection.link.text} &rarr;
            </Text>
          </NeonLink>
        </ProjectsContainer>
      </PageContainer>
    </Layout>
  )
}

export const INDEX_QUERY = graphql`
  query {
    sanity: sanityHomePage {
      introduction {
        picture {
          caption {
            en
            es
            fr
            _type
          }
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        title {
          _type
          en
          es
          fr
        }
        link {
          _type
          link
          text {
            _type
            en
            es
            fr
          }
        }
      }
      _rawIntroduction(resolveReferences: { maxDepth: 5 })
      typist {
        _type
        enterText {
          _type
          en
          es
          fr
        }
        delay
        startText
        numOfCharsToDelete
        backspaceDelay
        finalText
      }
      _rawExperienceIntro(resolveReferences: { maxDepth: 5 })
      projectSection {
      _type
      link {
        _type
        link
        text {
          en
          es
          fr
          _type
        }
      }
      projects {
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        id
        name
        shortDescription {
          _type
          en
          es
          fr
        }
      }
      title {
        en
        es
        fr
        _type
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
  padding: 1rem;
`

const ProfileSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media ${media.tablet} {
    margin-top: 4rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const ImgContainer = styled.div`
  width: 15rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  overflow: hidden;

  @media ${media.desktop} {
    width: 20rem;
  }

  @media ${media.tablet} {
    margin-bottom: 0;
  }
`

const IntroductionSection = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${media.tablet} {
    align-items: flex-start;
    flex: 0 0 80%;
  }

  @media ${media.desktop_large} {
    margin-left: 0;
  }
`

const Title = styled(Text)`
  animation: ${moveInTop} 1s ease-in;
  margin-bottom: 1.6rem;
`

const SubTitle = styled.div`
  margin: 2rem 0;
  @media ${media.phablet} {
    align-self: stretch;

    margin: 4rem 0;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    grid-column-gap: 2.5rem;

    &::before,
    &::after {
      content: "";
      height: 2px;
      display: block;
      background-color: var(--text);
    }
  }
`

const ProjectsContainer = styled.div`
  margin-top: 2rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

const ProjectsParent = styled.div`
  display: flex;
  flex-direction: column;

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${media.desktop} {
    flex-direction: row;
    justify-content: space-around;
  }
`

const Caption = styled.div`
  span {
    font-style: italic;
  }

  @media ${media.desktop} {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.5s;
    background: rgba(0, 0, 0, 0.8);

    span {
      text-align: center;
      color: #fff;
    }
  }
`

const Project = styled.div`
  margin: 1.5rem 0;
  border-radius: 5px;
  overflow: hidden;

  @media ${media.tablet} {
    margin: 1.5rem 1.5rem;
    width: 450px;
  }

  @media ${media.desktop} {
    margin: 2rem 0;
    position: relative;
    box-shadow: 0 5px 1.5rem var(--shadow-light);

    :hover ${Caption} {
      opacity: 1;
    }
  }
`

const ProjectTitle = styled(Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--title);
`

export default IndexPage
