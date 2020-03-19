import { DefaultTheme } from "styled-components";

const LightTheme: DefaultTheme = {
  colors: {
    primary: "#464D77", // purple navy
    innerBackground: "#FAFAFA", // white less bright
    navLinks: "#DEC364", // orange-yellow(crayola)
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

export { LightTheme, DarkTheme }