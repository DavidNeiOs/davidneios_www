import { defaultLanguage } from "./types"

export const getLocalText = (languageCode: string): any => {
  const languages = [languageCode, defaultLanguage] // last language in array is default;
  const localize = (value: any) => {
    if (!value) return
    if (Array.isArray(value)) {
      //@ts-ignore
      value = value.map(v => localize(v, languages))
    } else if (typeof value == "object") {
      if (/^locale[A-Z]/.test(value._type)) {
        const language = languages.find(lang => value[lang]) || "en"
        return value[language]
      }
      return Object.keys(value).reduce((result, key) => {
        //@ts-ignore
        result[key] = localize(value[key], languages)
        return result
      }, {})
    }
    return value
  }

  return localize
}
