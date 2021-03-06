import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { keyframes } from "styled-components"

interface LinkProps {
  children: React.ReactNode
  to: string
  style?: object
  className?: string
}

export const LinkCmp = ({ children, to, style, className }: LinkProps) => {
  if (!to.startsWith("/")) {
    return (
      <a
        href={to}
        target="_blank"
        style={style && style}
        className={className && className}
        rel="noopener"
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

const moveUpAndDown = keyframes`
  0% {
    left: -110%;
    top: 90%;
  }

  50% {
    left: 12%;
    top: -30%;
  }

  100% {
    left: -10%;
    top: -10%;
  }
`

export const Link = styled(LinkCmp)`
  &:link,
  &:visited {
    color: var(--links);
    text-decoration: none;
    transition: all 0.2s;
    padding: 2px 4px;
    border-radius: 3px;
  }

  &:hover {
    color: var(--inner-background);
    background-color: var(--links);
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

export const SimpleLink = styled(LinkCmp)`
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
    border: 2px solid var(--primary);
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
    color: var(--primary);
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
    background-color: var(--links);
    color: var(--primary);
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

export const SocialLink = styled(LinkCmp)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--button);
  margin: 0.5rem;
  border-radius: 1.3rem;
  color: var(--text-inverted);
  box-shadow: 0 5px 1.5rem var(--shadow-light);
  position: relative;
  overflow: hidden;

  .icon {
    font-size: 1.7rem;
    transition: all 0.2s;
  }

  &:hover .icon {
    transform: scale(1.3);
    color: var(--button);
  }

  &::before {
    content: "";
    width: 120%;
    height: 120%;
    background-color: var(--text-inverted);
    position: absolute;
    left: -110%;
    top: 90%;
    transform: rotate(45deg);
  }

  &:hover::before {
    animation: ${moveUpAndDown} 0.7s 1 forwards;
  }
`

export const NavLink = styled(LinkCmp)`
  color: var(--nav-links);
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.7rem 1rem;
  position: relative;
  transition: all 0.5s;
  font-size: 1.6rem;
  font-weight: 300;

  &:hover {
    background-color: var(--nav-links);
    color: var(--primary);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 1.2rem;
    left: 1.2rem;
    width: 1.2rem;
    height: 1.2rem;
    border: 3px solid var(--nav-links);
    border-width: 0 0 3px 3px;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::before {
    opacity: 1;
    bottom: -7px;
    left: -7px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1.2rem;
    height: 1.2rem;
    border: 3px solid var(--nav-links);
    border-width: 3px 3px 0 0;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 1;
    top: -7px;
    right: -7px;
  }

  &.selected {
    border-bottom: 1px solid var(--nav-links);
  }
`
