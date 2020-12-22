/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Ezgi",
    author: "Ezgi Hendrickx",
    siteUrl: `https://www.ezgihendrickx.dev/`,
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "src",
    //     path: `${__dirname}/src/`,
    //   },
    // },
  ],
}
