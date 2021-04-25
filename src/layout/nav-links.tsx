import React from "react"
import styled from "styled-components"

import { media } from "../theme"
import { NavLink } from "../components/link"

interface Props {
  className?: string
  path: string
}

export const NavLinks = ({ className, path }: Props) => {
  return (
    <NavContainer className={className && className}>
      <NavItem>
        <NavLink
          to="/about"
          className={path === "/about/" ? "selected" : undefined}
        >
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="/portfolio"
          className={path === "/portfolio/" ? "selected" : undefined}
        >
          Portfolio
        </NavLink>
      </NavItem>
    </NavContainer>
  )
}

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${media.tablet} {
    flex-direction: row;
    align-self: center;
  }
`

const NavItem = styled.li`
  margin: 1rem 0;

  @media ${media.tablet} {
    &:not(:last-of-type) {
      margin: 0 1.5rem 0 0;
    }
  }
`
