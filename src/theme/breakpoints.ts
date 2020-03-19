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

export const media = {
  phone_small: `only screen and (min-width: ${breakpoints.phone_small})`,
  phone: `only screen and (min-width: ${breakpoints.phone})`,
  phablet: `only screen and (min-width: ${breakpoints.phablet})`,
  tablet: `only screen and (min-width: ${breakpoints.tablet})`,
  desktop: `only screen and (min-width: ${breakpoints.desktop})`,
  desktop_medium: `only screen and (min-width: ${breakpoints.desktop_medium})`,
  desktop_large: `only screen and (min-width: ${breakpoints.desktop_large})`,
  desktop_xlarge: `only screen and (min-width: ${breakpoints.desktop_xlarge})`
};