import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

interface LinkProps {
  children: React.ReactNode
  to: string
  style?: object
  className?: string
}

const LinkCmp = ({ children, to, style, className }: LinkProps) => {
  if (!to.startsWith("/")) {
    return (
      <a
        href={to}
        target="_blank"
        style={style && style}
        className={className && className}
      >
        {children}
      </a>
    )
  }
  return (
    <GatsbyLink
      to={to}
      style={style && style}
      className={className && className}
    >
      {children}
    </GatsbyLink>
  )
}

export const Link = styled(LinkCmp)`
  &:link,
  &:visited {
    color: ${props => props.theme.colors.navLinks};
    text-decoration: none;
    transition: all 0.2s;
    padding: 2px 4px;
  }

  &:hover {
    color: ${props => props.theme.colors.innerBackground};
    background-color: ${props => props.theme.colors.navLinks};
  }
`

export const NavLink = styled(LinkCmp)`
  &:link,
  &:visited {
    color: ${props => props.theme.colors.navLinks};
    text-decoration: none;
  }
`
