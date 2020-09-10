import { createGlobalStyle } from "styled-components"
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

    --primary-100: #694878;
    --primary-200: #4A2B57;
    --primary-300: #36213E;
    --primary-400: #2C0D38;
    --primary-500: #271030;
    --neutral-100: #FAFAFA;
    --neutral-200: #F4F5F7;
    --neutral-300: #E4E8F0;
    --neutral-400: #737581;
    --neutral-500: #4A4B53;
    --neutral-600: #1B1C1E;
    --green-100: #DBF9F0;
    --green-200: #B3DEC1;
    --green-300: #36827F;
    --warning-100: #E8DB64;    
    --warning-200: #EDD926;    
    --warning-300: #C2B013;    
    --error-100: #D0454C;
    --error-200: #B54248;
    --error-300: #95353A;

    &.dark {
      --primary: var(--primary-500);
      --inner-background: var(--neutral-600);
      --title: var(--error-100);
      --text: var(--neutral-100);
      --text-inverted: var(--neutral-600);
      --nav-background: var(--neutral-500);
      --nav-links: var(--green-300);
      --links: var(--green-200);
      --button: var(--green-300);
      --terciary: var(--green-100);

      --shadow-light: rgba(250, 250, 250, 0.2);
      --shadow-medium: rgba(250, 250, 250, 0.5);
      --shadow-strong: rgba(250, 250, 250, 0.7);
      --shadow-background: rgba(27, 28, 30, .5);
    }
    &.light {
      --primary: var(--primary-200);
      --inner-background: var(--neutral-100);
      --title: var(--error-300);
      --text: var(--neutral-600);
      --text-inverted: var(--neutral-100);
      --nav-background: var(--neutral-500);
      --nav-links: var(--green-100);
      --links: var(--green-300);
      --button: var(--green-100);
      --terciary: var(--green-300);

      --shadow-light: rgba(0, 0, 0, 0.3);
      --shadow-medium: rgba(0, 0, 0, 0.5);
      --shadow-strong: rgba(0, 0, 0, 0.7);
      --shadow-background: rgba(250, 250, 250, .5);
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
