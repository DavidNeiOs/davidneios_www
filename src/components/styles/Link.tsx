import { Link } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Theme } from "../../theme"

export default styled(Link)<{ theme: Theme }>`
  color: ${props => props.theme.navLinks};
  :visited {
    color: ${props => props.theme.navLinks};
  }
`
