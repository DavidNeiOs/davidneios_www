/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const { createElement } = require("react")

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
          (() => {    
            window.__onThemeChange = function() {};                
            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('theme')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))

            window.__onBackdropOpen = () => {
              const body = document.querySelector('body')
              body.style.overflow = 'hidden'
              body.style.position = 'fixed'
              body.style.width = '100%'
              body.style.height = 'calc(100% + 0px)'
              body.style.top = '0px'
            }

            window.__onBackdropClose = () => {
              const body = document.querySelector('body')
              body.style.overflow = ''
              body.style.position = ''
              body.style.width = ''
              body.style.height = ''
              body.style.top = ''
            }
          })()
        `,
      },
    }),
  ])
}
