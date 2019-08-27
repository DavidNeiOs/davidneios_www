import React, { ReactNode, PureComponent } from "react"
import styled from "styled-components"

const NavWrapper = styled.div``

const Backdrop = styled.div<{ show: boolean }>`
  position: fixed;
  display: ${props => (props.show ? "block" : "none")};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`

const NavBar = styled.nav<{ show: boolean }>`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  background: ${props => props.theme.navBackground};
  width: 60%;
  height: 100vh;
`

const Burger = styled.div`
  color: #000;
  position: absolute;
  margin-left: 2px;
  margin-top: 10px;
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.button};

  :before {
    content: "";
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.button};
  }
  :after {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.button};
  }
`
interface State {
  showOptions: boolean
}

interface Props {
  children: ReactNode
}

class MobileNav extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      showOptions: false,
    }
  }
  showBackdrop = () => {
    this.setState({ showOptions: true })
  }
  hideBackdrop = () => {
    this.setState({ showOptions: false })
  }
  navBarHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation()
  }
  render() {
    const { children } = this.props
    return (
      <NavWrapper>
        <div
          onClick={this.showBackdrop}
          style={{ height: "25px", width: "25px", position: "relative" }}
        >
          <Burger />
        </div>
        <Backdrop onClick={this.hideBackdrop} show={this.state.showOptions}>
          <NavBar show={this.state.showOptions} onClick={this.navBarHandler}>
            <div>{children}</div>
          </NavBar>
        </Backdrop>
      </NavWrapper>
    )
  }
}

export default MobileNav
