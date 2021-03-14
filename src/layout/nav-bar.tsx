import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { media } from "../theme"
import { NavLinks } from "./nav-links"
import { SimpleLink } from "../components/link"
import { Text } from "../components/Text"
import { ToggleTheme } from "../components/toggle-theme"
import MobileNav from "../components/mobile-nav"
import { Container } from "./container"

interface Props {
  siteTitle: string
  path: string
}

const NavBar = ({ siteTitle, path }: Props) => {
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
            alignItems: "center",
            justifyContent: "center"
          }}
        >          
          <Name variant="heading3" withComponent="h3">
            <SimpleLink
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </SimpleLink>
          </Name>          
          <Navigation path={path} />
          <MobileNav>
            <NavLinks path={path} />
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

const HeaderEl = styled.nav`
  background-color: var(--primary);
  a {
    color: var(--nav-links);
  }
  color: var(--nav-links);
  padding: 1rem;
  width: 100%;
`

const Name = styled(Text)`
  margin: 0; 
  flex-grow: 1; 
  flex-basis: 200px
`;

const Navigation = styled(NavLinks)`
  display: none;

  @media ${media.tablet} {
    display: flex;
    flex-grow: 2;
    justify-content: center;
  }
`

const TabletNav = styled.div`
  display: none;

  @media ${media.tablet} {
    flex-basis: 200px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`

export default NavBar
