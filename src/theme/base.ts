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
    font-family: "Montserrat", "Arial", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--bg);
    color: var(--textNormal);
    line-height: 1.6;

    &.dark {
      --primary: #210124;
      --inner-background: #0D0D0D;
      --nav-links: #36827F;
      --text: #FAFAFA ;
      --nav-background: #262626;
      --button: #DBF9F0;
      --link: #750D37;
      --terciary: #B3DEC1;

      --shadow-light: rgba(250, 250, 250, 0.2);
      --shadow-medium: rgba(250, 250, 250, 0.5);
      --shadow-strong: rgba(250, 250, 250, 0.7);
    }
    &.light {
      --primary: #464D77;
      --inner-background: #FAFAFA;
      --nav-links: #DEC364;
      --text: #121212;
      --nav-background: #F9F9ED;
      --button: #DBF9F0;
      --link: #750D37;
      --terciary: #B3DEC1;

      --shadow-light: rgba(0, 0, 0, 0.3);
      --shadow-medium: rgba(0, 0, 0, 0.5);
      --shadow-strong: rgba(0, 0, 0, 0.7);
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Sen", "Arial", sans-serif;
    }
    input,
    textarea,
    button,
    select,
    a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    img {
      padding: 0;
      margin: 0;
      user-select: none;
    }
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`