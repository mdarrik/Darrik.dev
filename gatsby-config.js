module.exports = {
  siteMetadata: {
    title: `Darrik Moberg`,
    description: `Darrik is a full stack developer with an interest in developing user-focused, accessible products.`,
    author: `Darrik Moberg`,
    keywords: [`Web Development`, `HTMl`, `CSS`, `JavaScript`, `.NET`],
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
        background_color: `#63B3ED`,
        theme_color: `#63B3ED`,
        display: `minimal-ui`,
        icon: `src/images/DM-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    `gatsby-plugin-postcss`,
    {
      //This needs to come after all other postcss plugins
      //Otherwise it will not work correctly.
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        develop: false,
      },
    },
  ],
}
