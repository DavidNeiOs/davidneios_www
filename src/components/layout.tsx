import React, { ReactNode, PureComponent } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import withSizes from "react-sizes"
import { dark, light, Theme } from "../Theme"
import Header from "./header"
import "./layout.css"

const LayoutEl = styled.div<{ theme: Theme }>`
  background-color: ${props => props.theme.innerBackground};
  color: ${props => props.theme.text};
  height: 100vh;
`

interface Props {
  children: ReactNode
  isMobile: boolean
}
interface State {
  lightTheme: boolean
}
class Layout extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      lightTheme: true,
    }
  }

  componentDidMount() {
    const localStorageLayout = localStorage.getItem("lightTheme")
    if (localStorageLayout) {
      this.setState({
        lightTheme: JSON.parse(localStorageLayout),
      })
    }
  }
  changeTheme = () => {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
    localStorage.setItem("lightTheme", !this.state.lightTheme + "")
  }
  render() {
    const { children, isMobile } = this.props
    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark}>
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
                changeTheme={this.changeTheme}
                isMobile={this.props.isMobile}
              />
            )}
          </StaticQuery>

          <div
            style={{
              margin: isMobile ? `0 0` : `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
          </div>
        </LayoutEl>
      </ThemeProvider>
    )
  }
}

interface Args {
  width: number
}

const mapSizesToProps = ({ width }: Args) => {
  return {
    isMobile: width < 992,
  }
}

export default withSizes(mapSizesToProps)(Layout)
