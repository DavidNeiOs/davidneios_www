import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import CityMp4 from "../assets/videos/montreal-720.mp4"
import CityWeb from "../assets/videos/Montreal-720.webm"
import Layout from "../components/layout"
import Text from "../components/Text"
import SEO from "../components/seo"
import styled from "styled-components"

interface Props {
  intl: any
}

const VideoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const MainVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const VideoInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.theme.shadows.light};
`

const IndexPage = ({ intl }: Props) => (
  <Layout>
    <SEO title="Home" />
    <VideoWrapper>
      <MainVideo muted loop id="myVideo" autoPlay>
        <source src={CityMp4} type="video/mp4" />
        <source src={CityWeb} type="video/webm" />
      </MainVideo>
      <VideoInfo>
        <Text withComponent="h1" variant="headerLargePrimarydBold">
          {intl.formatMessage({ id: "index.h1.title" })}
        </Text>
        <Text variant="bodyLargePrimary">Born and raised in Colombia 🇨🇴</Text>
        <Text variant="bodyLargePrimary">
          I have been living in Montreal, CA for almost 4 years
        </Text>
      </VideoInfo>
    </VideoWrapper>
  </Layout>
)

export default injectIntl(IndexPage)
