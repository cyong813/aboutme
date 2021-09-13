module.exports = {
  siteMetadata: {
    title: `Gatsby Mui Layout Starter`,
    description: `Supercharge your next project with Mui Treasury Layout, built on top of Material-UI`,
    author: `@gatsbyjs`,
  },
  pathPrefix: '/about-me',
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        },
      },
    }
  ],
}
