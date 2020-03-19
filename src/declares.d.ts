import 'styled-components'

declare module 'react-sizes';
declare module 'react-typist';

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
    shadows: {
      strong: string
      medium: string
      light: string
    }
  }
}