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

    --primary-100: hsl(161, 81%, 6%);
    --primary-200: hsl(161, 53%, 12%);
    --primary-300: hsl(161, 88%, 25%);
    --primary-400: hsl(161, 48%, 38%);
    --primary-500: hsl(161, 84%, 38%);
    --primary-600: hsl(161, 50%, 75%);
    --neutral-100: hsl(0, 0%, 98%);
    --neutral-200: hsl(220, 25%, 95%);
    --neutral-300: hsl(220, 29%, 92%);
    --neutral-400: hsl(231, 6%, 48%);
    --neutral-500: hsl(233, 6%, 31%);
    --neutral-600: hsl(220, 5%, 11%);
    --green-100: hsl(162, 71%, 92%);
    --green-200: hsl(140, 39%, 79%);
    --green-300: hsl(178, 41%, 36%);
    --warning-100: hsl(54, 74%, 65%);    
    --warning-200: hsl(54, 85%, 54%);    
    --warning-300: hsl(54, 82%, 42%);    
    --error-100: hsl(357, 60%, 54%);
    --error-200: hsl(357, 47%, 48%);
    --error-300: hsl(357, 48%, 40%);

    &.dark {
      --primary: var(--primary-100);
      --inner-background: var(--neutral-600);
      --nav-background: var(--neutral-500);
      --title: var(--primary-500);
      --text: var(--neutral-200);
      --text-inverted: var(--neutral-500);
      --nav-links: var(--neutral-300);
      --links: var(--primary-400);
      --button: var(--primary-400);
      --detail: var(--primary-500);

      --shadow-light: hsla(0, 0%, 98%, 0.2);
      --shadow-medium: hsla(0, 0%, 98%, 0.5);
      --shadow-strong: hsla(0, 0%, 98%, 0.7);
      --shadow-background: hsla(220, 5%, 11%, 0.5);
    }
    &.light {
      --primary: var(--primary-400);
      --inner-background: var(--neutral-100);
      --title: var(--primary-300);
      --text: var(--neutral-600);
      --text-inverted: var(--neutral-100);
      --nav-background: var(--neutral-500);
      --nav-links: var(--neutral-600);
      --links: var(--primary-300);
      --button: var(--primary-200);
      --detail: var(--primary-400);

      --shadow-light: hsla(0, 0%, 0%, 0.3);
      --shadow-medium: hsla(0, 0%, 0%, 0.5);
      --shadow-strong: hsla(0, 0%, 0%, 0.7);
      --shadow-background: hsla(0, 0%, 98%, 0.5);
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
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
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
