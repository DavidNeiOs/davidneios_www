import React from "react"
import styled from "styled-components"
import Link from "./styles/Link"
import ToggleTheme from "./styles/ToggleTheme"
import { Theme } from "../theme"
import LanguageSwitcher from "./languageSwitcher"
import MobileNav from "./mobileNav"

interface Props {
  siteTitle: string
  changeTheme: () => void
  lightTheme: boolean
}

const HeaderEl = styled.header<{ theme: Theme }>`
  background-color: ${props => props.theme.primary};
  a {
    color: ${props => props.theme.navLinks};
  }
  color: ${props => props.theme.navLinks};
  z-index: 99;
  padding: 2rem;
`

const Header = ({ siteTitle, changeTheme, lightTheme }: Props) => {
  console.log(MobileNav)
  return (
    <HeaderEl>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
        <ToggleTheme changeTheme={changeTheme} lightTheme={lightTheme} />
        <LanguageSwitcher />
        <MobileNav />
      </div>
    </HeaderEl>
  )
}

export default Header
