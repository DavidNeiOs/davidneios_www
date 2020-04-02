import React from "react"
import styled, { keyframes } from "styled-components"

import { LinkCmp } from "./Link"

interface Props {
  children: React.ReactNode
  to: string
  style?: object
  className?: string
}

const Link = ({ children, to, style, className }: Props) => {
  return (
    <LinkCmp to={to} style={style && style} className={className && className}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </LinkCmp>
  )
}

const borderTop = keyframes`
  0% {
    left: -100%;
  }
  50%, 100%{
    left: 100%;
  }
`
const borderBottom = keyframes`
  0% {
    right: -100%;
  }
  50%, 100%{
    right: 100%;
  }
`
const borderRight = keyframes`
  0% {
    top: -100%;
  }
  50%, 100%{
    top: 100%;
  }
`
const borderLeft = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100%{
    bottom: 100%;
  }
`

export const NeonLink = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 15px 20px;
  color: var(--nav-links);
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.4s;
  letter-spacing: 4px;
  margin-top: 2rem;

  &:hover {
    background: var(--nav-links);
    color: var(--inner-background);
    box-shadow: 0 0 5px var(--nav-links), 0 0 25px var(--nav-links),
      0 0 50px var(--nav-links), 0 0 200px var(--nav-links);
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--nav-links));
    animation: ${borderTop} 1s linear infinite;
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--nav-links));
    animation: ${borderRight} 1s linear infinite;
    animation-delay: 0.25s;
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--nav-links));
    animation: ${borderBottom} 1s linear infinite;
    animation-delay: 0.5s;
  }

  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--nav-links));
    animation: ${borderLeft} 1s linear infinite;
    animation-delay: 0.75s;
  }
`
