import React from "react"
import styled from "styled-components"
import Link from "./styles/Link"
import ToggleTheme from "./styles/ToggleTheme"
import { Theme } from "../theme"
import LanguageSwitcher from "./languageSwitcher"
import MobileNav from "./mobileNav"

const HeaderEl = styled.header<{ theme: Theme }>`
  background-color: ${props => props.theme.primary};
  a {
    color: ${props => props.theme.navLinks};
  }
  color: ${props => props.theme.navLinks};
  z-index: 99;
  padding: 1rem;
`

interface Props {
  siteTitle: string
  changeTheme: () => void
  lightTheme: boolean
  isMobile: boolean
}

const Header = ({ siteTitle, changeTheme, lightTheme, isMobile }: Props) => {
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

        {isMobile ? (
          <MobileNav>
            <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
            <LanguageSwitcher />
          </MobileNav>
        ) : (
          <div>
            <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </HeaderEl>
  )
}

export default Header
