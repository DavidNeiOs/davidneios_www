import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

interface LinkProps {
  children: React.ReactNode
  to: string
  style?: object
  className?: string
}

export const Link = ({ children, to, style, className }: LinkProps) => {
  if (!to.startsWith("/")) {
    return (
      <OuterLink
        href={to}
        target="_blank"
        style={style && style}
        className={className && className}
      >
        {children}
      </OuterLink>
    )
  }
  return (
    <InnerLink
      to={to}
      className={className && className}
      style={style && style}
    >
      {children}
    </InnerLink>
  )
}

const InnerLink = styled(GatsbyLink)`
  &:link,
  &:visited {
    color: ${props => props.theme.colors.navLinks};
    text-decoration: none;
    color: ${props => props.theme.colors.navLinks};
  }
`

const OuterLink = styled.a`
  &:link,
  &:visited {
    color: ${props => props.theme.colors.navLinks};
    text-decoration: none;
    color: ${props => props.theme.colors.navLinks};
  }
`
