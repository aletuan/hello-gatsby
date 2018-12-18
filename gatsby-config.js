module.exports = {
  siteMetadata: {
    title: `Web blog`,
    siteUrl: `https://www.andyfiles.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}