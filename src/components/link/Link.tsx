import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { DefaultTheme } from "styled-components"

export const Link = styled(GatsbyLink)<{ theme: DefaultTheme }>`
  color: ${props => props.theme.colors.navLinks};
  :visited {
    color: ${props => props.theme.colors.navLinks};
  }
`
