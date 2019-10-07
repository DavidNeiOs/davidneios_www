import React from "react"
import styled from "styled-components"
import Link from "../styles/Link"
import ToggleTheme from "../styles/ToggleTheme"
import LanguageSwitcher from "../languageSwitcher"
import MobileNav from "../mobileNav"

const HeaderEl = styled.header`
  background-color: ${props => props.theme.colors.primary};
  a {
    color: ${props => props.theme.colors.navLinks};
  }
  color: ${props => props.theme.colors.navLinks};
  z-index: 1;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* ${({ theme }) => `
  @media (min-width: ${theme.breakpoints.desktop}px) {
    background-color: rebeccapurple;
  }
  @media (min-width: ${theme.breakpoints.desktop_large}px) {
    background-color: palevioletred;
  }`} */
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
