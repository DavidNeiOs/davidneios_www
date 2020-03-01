import styled from "styled-components"
import { media } from "../../theme"

export const Container = styled.div`
  max-width: 46rem;
  margin: auto;
  padding: 0 8px;
  @media ${media.tablet} {
    padding: 0;
  }
`
