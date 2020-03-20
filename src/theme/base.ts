import { createGlobalStyle } from "styled-components";
import { media } from "./breakpoints"

export const Base = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 50%;

    @media ${media.phablet} {
      font-size: 62.5%;
    } 
  }

  body {
    font-family: "Inter", "Arial", sans-serif;
    font-weight: 300;
    line-height: 1.6;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`