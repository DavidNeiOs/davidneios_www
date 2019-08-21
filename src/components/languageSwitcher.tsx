import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from "gatsby-plugin-intl"
import React from "react"
import { Helmet } from "react-helmet"
import Dropdown from "antd/es/dropdown"
import "antd/es/dropdown/style/css"
import Menu from "antd/es/menu"
import "antd/es/menu/style/css"
import Button from "antd/es/button"
import "antd/es/button/style/css"

interface Languages {
  [key: string]: string
  en: string
  fr: string
  es: string
}

const languageNames: Languages = {
  en: "🇬🇧English",
  fr: "🇫🇷Francais",
  es: "🇨🇴Español",
}

interface IntlConsumer {
  languages: any[]
  language: string
}

const LanguageSwitcher = () => (
  <IntlContextConsumer>
    {({ languages, language: currentLocale }: IntlConsumer) => (
      <>
        <Helmet>
          <html lang={currentLocale} />
        </Helmet>
        <Dropdown
          overlay={
            <Menu>
              {languages.map((lng: string) => (
                <Menu.Item key={lng}>
                  <span
                    onClick={() => {
                      changeLocale(lng)
                    }}
                  >
                    {languageNames[lng]}
                  </span>
                </Menu.Item>
              ))}
            </Menu>
          }
          placement="bottomCenter"
          trigger={["click"]}
        >
          <Button>Lang</Button>
        </Dropdown>
      </>
    )}
  </IntlContextConsumer>
)

export default injectIntl(LanguageSwitcher)
