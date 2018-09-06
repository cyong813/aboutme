module.exports = {
  siteMetadata: {
    title: 'Gatsby React Portfolio',
    author: 'Corinna'
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
