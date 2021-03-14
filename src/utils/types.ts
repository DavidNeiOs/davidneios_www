export type Languages = "en" | "fr" | "es"
export interface BaseGatsbyTypes {
  pageContext: {
    locale: Languages
  }
}

export const defaultLanguage: Languages = "en"
