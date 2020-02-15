import { DefaultTheme } from "styled-components";

const LightTheme: DefaultTheme = {
  colors: {
    primary: "#464D77", // purple navy
    innerBackground: "#FAFAFA", // white less bright
    navLinks: "#F9DB6D", // orange-yellow(crayola)
    text: "#121212", // black back
    navBackground: "#F9F9ED", // linen
    button: "#DBF9F0", // light cyan
    link: "#750D37", // claret (dark red)
    terciary: "#B3DEC1", // turquoise
  },
  shadows: {
    light: "rgba(250, 250, 250, 0.3)",
    medium: "rgba(250, 250, 250, 0.5)",
    strong: "rgba(250, 250, 250, 0.7)"
  }
}

const DarkTheme: DefaultTheme = {
  colors: {
    primary: "#210124", // purple navy
    innerBackground: "#0D0D0D", // dark purple
    navLinks: "#36827F", // celadon green
    navBackground: "#262626", // raisin black
    text: "#FAFAFA", // white back
    button: "#DBF9F0", // light cyan
    link: "#750D37", // claret (dark red)
    terciary: "#B3DEC1", // turquoise
  },
  shadows: {
    light: "rgba(0, 0, 0, 0.3)",
    medium: "rgba(0, 0, 0, 0.5)",
    strong: "rgba(0, 0, 0, 0.7)"
  }
}

const breakpoints = {
  phone_small: '320px',
  phone: '376px',
  phablet: '540px',
  tablet: '735px',
  desktop: '1024px',
  desktop_medium: '1280px',
  desktop_large: '1440px',
  desktop_xlarge: '1920px'
}

const media = {
  phone_small: `(min-width: ${breakpoints.phone_small})`,
  phone: `(min-width: ${breakpoints.phone})`,
  phablet: `(min-width: ${breakpoints.phablet})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktop_medium: `(min-width: ${breakpoints.desktop_medium})`,
  desktop_large: `(min-width: ${breakpoints.desktop_large})`,
  desktop_xlarge: `(min-width: ${breakpoints.desktop_xlarge})`
};

export { LightTheme, DarkTheme, media }