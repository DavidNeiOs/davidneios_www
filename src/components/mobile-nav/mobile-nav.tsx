import React, { ReactNode, useState } from "react"
import styled from "styled-components"

import { media } from "../../theme"

interface Props {
  children: ReactNode
}

export const MobileNav = ({ children }: Props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)

  const showBackdrop = () => {
    ;(window as any).__onBackdropOpen()
    setShowOptions(true)
  }

  const hideBackdrop = () => {
    ;(window as any).__onBackdropClose()
    setShowOptions(false)
  }

  const navBarHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <NavWrapper>
      <BurgerWrap onClick={showBackdrop}>
        <Burger />
      </BurgerWrap>
      <CheckBox type="checkbox" checked={showOptions} readOnly />
      <Backdrop onClick={hideBackdrop}>
        <NavBar onClick={navBarHandler}>{children}</NavBar>
      </Backdrop>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: block;

  @media ${media.tablet} {
    display: none;
  }
`

const CheckBox = styled.input`
  display: none;

  :checked {
    + div {
      opacity: 1;
      transform: translateX(0);
      & nav {
        transform: translateX(0);
      }
    }
  }
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  transform: translateX(100%);
  opacity: 0;
  transition: opacity 0.4s;
`

const NavBar = styled.nav`
  width: 60%;
  height: 100vh;
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  padding: 2rem 1rem;
  background: var(--nav-background);
  transform: translateX(100%);
  transition: transform 0.2s 0.2s;

  @media ${media.phablet} {
    width: 45%;
  }
`

const Burger = styled.div`
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 10px;
  width: 100%;
  height: 2px;
  background-color: var(--nav-links);

  ::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--nav-links);
  }
  ::after {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--nav-links);
  }
`

const BurgerWrap = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
  cursor: pointer;
`

export default MobileNav
