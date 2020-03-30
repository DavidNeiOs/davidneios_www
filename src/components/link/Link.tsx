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
    color: var(--nav-links);
    text-decoration: none;
    transition: all 0.2s;
    padding: 2px 4px;
    border-radius: 3px;
  }

  &:hover {
    color: var(--inner-background);
    background-color: var(--nav-links);
    transform: translateY(-2px);
    box-shadow: 0 5px 1.5rem var(--shadow-light);
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem var(--shadow-light);
  }
`

export const NavLink = styled(LinkCmp)`
  &:link,
  &:visited {
    color: var(--nav-links);
    text-decoration: none;
  }
`

export const ButtonLink = styled(LinkCmp)<{ content: string }>`
  &:link,
  &:visited {
    text-decoration: none;
    background-color: var(--inner-background);
    color: transparent;
    font-size: 1.6rem;
    border: 2px solid var(--link);
    border-radius: 50px;
    padding: 1rem 2rem;
    position: relative;
    overflow: hidden;
  }

  &::before {
    content: ${props => (props.content ? `"${props.content}"` : "Click here")};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--nav-links);
    color: var(--link);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border-radius: 50px;
  }

  &::after {
    content: ${props => (props.content ? `"${props.content}"` : "Click here")};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--nav-links);
    color: var(--link);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: translate(-100%, 100%);
    border-radius: 50px;
  }

  &:hover {
    box-shadow: 0 5px 1.5rem var(--shadow-medium);
  }

  &:hover::before {
    transform: translate(100%, -100%);
  }

  &:hover::after {
    transform: translate(0, 0);
  }
`
