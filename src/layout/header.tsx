import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { media } from "../theme"
import { NavLink } from "../components/link"
import { Text } from "../components/Text"
import { ToggleTheme } from "../components/toggle-theme"
import MobileNav from "../components/mobile-nav"
import { Container } from "./container"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
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
            <NavLink
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </NavLink>
          </Text>
          <MobileNav>
            <ToggleTheme changeTheme={themeToggle} theme={theme} />
          </MobileNav>

          <Nav>
            <ToggleTheme changeTheme={themeToggle} theme={theme} />
          </Nav>
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

const Nav = styled.div`
  display: none;

  @media ${media.tablet} {
    display: block;
  }
`

export default Header
