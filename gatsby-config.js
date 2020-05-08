module.exports = {
  siteMetadata: {
    title: `DavidNeiOs`,
    description: `Web and Mobile Developer. Let's make something great.`,
    author: `@davidneios, @gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `sen`,
          `montserrat`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "3oo04e0l",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `davidneios.dev`,
        short_name: `davidneios`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logolittle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
