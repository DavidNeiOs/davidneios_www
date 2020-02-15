import React, { ReactNode, PureComponent } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { LightTheme, DarkTheme } from "../../Theme"
import Header from "./header"
import "./layout.css"

const LayoutEl = styled.div`
  background-color: ${props => props.theme.colors.innerBackground};
  color: ${props => props.theme.colors.text};
`
interface Props {
  children: ReactNode
}
interface State {
  lightTheme: boolean
  loaded: boolean
}
class Layout extends PureComponent<Props, State> {
  state = {
    lightTheme: false,
    loaded: false,
  }

  componentDidMount() {
    this.setState({
      lightTheme: (window as any).__theme === "light",
      loaded: true,
    })
    ;(window as any).__onThemeChange = () => {
      this.setState({ lightTheme: (window as any).__theme === "light" })
    }
  }

  render() {
    const { children } = this.props
    if (!this.state.loaded) {
      return <div>LOADING...</div>
    }
    return (
      <ThemeProvider theme={this.state.lightTheme ? LightTheme : DarkTheme}>
        <LayoutEl>
          <StaticQuery
            query={graphql`
              query SiteTitleQuery {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
          >
            {data => (
              <Header
                siteTitle={data.site.siteMetadata.title}
                lightTheme={this.state.lightTheme}
                changeTheme={() => {
                  this.setState({ lightTheme: !this.state.lightTheme }, () => {
                    ;(window as any).__setPreferredTheme(
                      this.state.lightTheme ? "light" : "dark"
                    )
                    localStorage.setItem(
                      "lightTheme",
                      this.state.lightTheme ? "light" : "dark"
                    )
                  })
                }}
              />
            )}
          </StaticQuery>
          <main>{children}</main>
        </LayoutEl>
      </ThemeProvider>
    )
  }
}

export default Layout
