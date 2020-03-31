import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { media } from "../theme"
import { Nav } from "./nav"
import { SimpleLink } from "../components/link"
import { Text } from "../components/Text"
import { ToggleTheme } from "../components/toggle-theme"
import MobileNav from "../components/mobile-nav"
import { Container } from "./container"

interface Props {
  siteTitle: string
  path: string
}

const Header = ({ siteTitle, path }: Props) => {
  let websiteTheme: any
  if (typeof window !== "undefined") {
    websiteTheme = (window as any).__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme((window as any).__theme)
    ;(window as any).__onThemeChange = () => {
      setTheme((window as any).__theme)
    }
  }, [])

  const themeToggle = () => {
    ;(window as any).__setPreferredTheme(
      websiteTheme === "dark" ? "light" : "dark"
    )
  }

  return (
    <HeaderEl>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text variant="heading3" withComponent="h3" style={{ margin: 0 }}>
            <SimpleLink
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </SimpleLink>
          </Text>

          <Navigation path={path} />
          <MobileNav>
            <Nav path={path}></Nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Text variant="bodyMediumPrimary">Theme: </Text>
              <ToggleTheme changeTheme={themeToggle} theme={theme} />
            </div>
          </MobileNav>

          <TabletNav>
            <ToggleTheme changeTheme={themeToggle} theme={theme} />
          </TabletNav>
        </div>
      </Container>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
  background-color: var(--primary);
  a {
    color: var(--nav-links);
  }
  color: var(--nav-links);
  padding: 1rem;
  width: 100%;
`

const Navigation = styled(Nav)`
  display: none;

  @media ${media.tablet} {
    display: flex;
  }
`

const TabletNav = styled.div`
  display: none;

  @media ${media.tablet} {
    display: block;
  }
`

export default Header
