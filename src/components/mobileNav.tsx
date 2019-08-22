import React, { PureComponent } from "react"
import styled from "styled-components"

const NavWrapper = styled.div`
  background-color: yellowgreen;
`

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

interface State {
  showOptions: boolean
}

interface Props {}

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
    return (
      <>
        <NavWrapper>
          <button onClick={this.showBackdrop}>back</button>
          <Backdrop onClick={this.hideBackdrop} show={this.state.showOptions}>
            <NavBar show={this.state.showOptions} onClick={this.navBarHandler}>
              <ul>
                <li>heyyy</li>
                <li>suuup?</li>
              </ul>
            </NavBar>
          </Backdrop>
        </NavWrapper>
      </>
    )
  }
}

export default MobileNav
