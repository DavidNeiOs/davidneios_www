import 'styled-components'

declare module 'gatsby-plugin-intl';

declare module 'react-sizes';

// extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      innerBackground: string
      navLinks: string
      text: string
      navBackground: string
      button: string
      link: string
      terciary: string
    }
    breakpoints: {
      phone_small: number
      phone: number
      phablet: number
      tablet: number
      desktop: number
      desktop_medium: number
      desktop_large: number
      desktop_xlarge: number
    }
    shadows: {
      strong: string
      medium: string
      light: string
    }
  }
}