import React from "react"
import styled from "styled-components"
import { media } from "../../Theme"
import Link from "../styles/Link"
import ToggleTheme from "../styles/ToggleTheme"
import MobileNav from "../mobileNav"

interface Props {
  siteTitle: string
  changeTheme: () => void
  lightTheme: boolean
}

const Header = ({ siteTitle, changeTheme, lightTheme }: Props) => {
  return (
    <HeaderEl>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <MobileNav>
          <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
        </MobileNav>

        <Nav>
          <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
        </Nav>
      </div>
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
