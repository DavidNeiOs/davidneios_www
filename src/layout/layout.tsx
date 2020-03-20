import React, { ReactNode, useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { LightTheme, DarkTheme } from "../theme"
import Header from "./header"
import { Container } from "./container"
import { Base } from "../theme"

const LayoutEl = styled.div`
  background-color: ${props => props.theme.colors.innerBackground};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
`
interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const [lightTheme, setLightTheme] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLightTheme((window as any).__theme === "light")
    setLoaded(true)
    ;(window as any).__onThemeChange = () => {
      setLightTheme((window as any).__theme === "light")
    }
  }, [])

  useEffect(() => {
    if (!loaded) {
      ;(window as any).__setPreferredTheme(
        (window as any).__theme === "light" ? "light" : "dark"
      )
    } else {
      ;(window as any).__setPreferredTheme(lightTheme ? "light" : "dark")
    }
    localStorage.setItem("lightTheme", lightTheme ? "light" : "dark")
  }, [lightTheme])

  return !loaded ? (
    // TODO CREATE A LOADING SCREEN HERE
    <div>LOADING...</div>
  ) : (
    <ThemeProvider theme={lightTheme ? LightTheme : DarkTheme}>
      <Base />
      <LayoutEl>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
        >
          {data => (
            <Header
              siteTitle={data.site.siteMetadata.title}
              lightTheme={lightTheme}
              changeTheme={() => {
                setLightTheme(isLightTheme => !isLightTheme)
              }}
            />
          )}
        </StaticQuery>
        <main>
          <Container>{children}</Container>
        </main>
      </LayoutEl>
    </ThemeProvider>
  )
}