module.exports = {
  siteMetadata: {
    title: `Darrik Moberg`,
    description: `Darrik is a full-stack developer with a strong interest in the front end.`,
    author: `Darrik Moberg`,
    keywords: [`Web Development`, `HTMl`, `CSS`, `JavaScript`, `JS`]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DarrikMoberg`,
        short_name: `DMoberg`,
        start_url: `/`,
        background_color: `#4183d7`,
        theme_color: `#4183d7`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
