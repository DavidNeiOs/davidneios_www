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

const media = {
  phone_small: `(min-width: ${breakpoints.phone_small})`,
  phone: `(min-width: ${breakpoints.phone})`,
  phablet: `(min-width: ${breakpoints.phablet})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktop_medium: `(min-width: ${breakpoints.desktop_medium})`,
  desktop_large: `(min-width: ${breakpoints.desktop_large})`,
  desktop_xlarge: `(min-width: ${breakpoints.desktop_xlarge})`
};

export { media }