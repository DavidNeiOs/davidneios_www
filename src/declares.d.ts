import 'styled-components'

declare module 'gatsby-plugin-intl' {
  import * as gatsby from 'gatsby';
  import React from 'react';

  export * from 'react-intl';

  export class Link<TState> extends gatsby.Link<TState> {}
  export const navigate: typeof gatsby.navigate;
  export const changeLocale: (language: string, to?: string) => void;
  export const IntlContextProvider: React.Provider;
  export const IntlContextConsumer: React.Consumer;
}
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