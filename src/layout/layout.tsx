import React, { ReactNode } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import Header from "./header"
import { Footer } from "./footer"
import { Container } from "./container"
import { Base } from "../theme"

const LayoutEl = styled.div`
  background-color: var(--inner-background);
  color: var(--text);
  min-height: 100vh;
`
interface Props {
  children: ReactNode
  path: string
}

export const Layout = ({ children, path }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Base />
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
            <Header siteTitle={data.site.siteMetadata.title} path={path} />
          )}
        </StaticQuery>
        <main>
          <Container>{children}</Container>
        </main>
        <Footer path={path} />
      </LayoutEl>
    </ThemeProvider>
  )
}
