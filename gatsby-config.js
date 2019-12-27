const path = require('path')

module.exports = {
  siteMetadata: {
    author: `Vincedgy`,
    title: `Gatsby hello world`,
    description: `This is a Gatsby tutorialish website that talks about veganism`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
