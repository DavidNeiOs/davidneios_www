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
      {children}
      <div className="liquid"></div>
    </LinkCmp>
  )
}

const waves = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`

export const LiquidLink = styled(Link)`
  position: relative;
  padding: 1rem 2.5rem;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  width: 10rem;
  overflow: hidden;

  & span {
    position: relative;
    z-index: 1;
    color: #fff;
    letter-spacing: 4px;
  }

  & .liquid {
    position: absolute;
    left: 0;
    top: -4rem;
    width: 10rem;
    height: 10rem;
    background: #4973ff;
    box-shadow: inset 0 0 2.5rem var(--shadow-background);
    transition: 0.5s;
  }

  &:hover .liquid {
    top: -5.7rem;
  }

  & .liquid::before,
  & .liquid::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  & .liquid::before {
    border-radius: 45%;
    background: var(--inner-background);
    animation: ${waves} 5s linear infinite;
  }
  & .liquid::after {
    border-radius: 40%;
    background: var(--shadow-background);
    animation: ${waves} 10s linear infinite;
  }
`
