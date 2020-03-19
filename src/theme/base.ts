import { createGlobalStyle } from "styled-components";

import RalewayLight from "../assets/fonts/Raleway-Light.ttf"
import RalewaySemiBold from "../assets/fonts/Raleway-SemiBold.ttf"
import RalewayBold from "../assets/fonts/Raleway-Bold.ttf"
import RalewayExtraBold from "../assets/fonts/Raleway-ExtraBold.ttf"

import InterLight from "../assets/fonts/Inter-Light.ttf"
import InterBold from "../assets/fonts/Inter-Bold.ttf"
import InterExtraBold from "../assets/fonts/Inter-ExtraBold.ttf"

export const Base = createGlobalStyle`
  @font-face {
    font-family: "Raleway";
    src: url(${RalewayLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  } 

  @font-face {
    font-family: "Raleway";
    src: url(${RalewayBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Raleway" ;
    src: url(${RalewaySemiBold});
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Raleway" ;
    src: url(${RalewayExtraBold});
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter" ;
    src: url(${InterLight});
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter" ;
    src: url(${InterBold});
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Inter" ;
    src: url(${InterExtraBold});
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
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