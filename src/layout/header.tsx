import React from "react"
import styled from "styled-components"
import { media } from "../theme"
import { NavLink } from "../components/link"
import { Text } from "../components/Text"
import { ToggleTheme } from "../components/toggle-theme"
import MobileNav from "../components/mobile-nav"
import { Container } from "./container"

interface Props {
  siteTitle: string
  changeTheme: () => void
  lightTheme: boolean
}

const Header = ({ siteTitle, changeTheme, lightTheme }: Props) => {
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
            <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
          </MobileNav>

          <Nav>
            <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
          </Nav>
        </div>
      </Container>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
  background-color: ${props => props.theme.colors.primary};
  a {
    color: ${props => props.theme.colors.navLinks};
  }
  color: ${props => props.theme.colors.navLinks};
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
