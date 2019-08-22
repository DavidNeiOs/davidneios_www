export interface Theme {
  primary: string
  innerBackground: string
  navLinks: string
  navBackground: string
  text: string
  button: string
  link: string
  terciary: string
}
const dark: Theme = {
  primary: "#464D77", // purple navy
  innerBackground: "#121212", // black back
  navLinks: "#F9DB6D", // orange-yellow(crayola)
  text: "#FAFAFA", // white less bright
  navBackground: "#262626", // raisin black
  button: "#DBF9F0", // light cyan
  link: "#750D37", // claret (dark red)
  terciary: "#B3DEC1", // turquoise
}

const light: Theme = {
  primary: "#210124", // purple navy
  innerBackground: "#FAFAFA", // white back
  navLinks: "#36827F", // celadon green
  navBackground: "#F9F9ED", // linen
  text: "#0D0D0D", // dark purple
  button: "#DBF9F0", // light cyan
  link: "#750D37", // claret (dark red)
  terciary: "#B3DEC1", // turquoise
}

export { dark, light }