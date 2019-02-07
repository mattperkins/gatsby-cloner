module.exports = {
  siteMetadata: {
    title: `gatsby-cloner`,
    description: `From here to there, we can make it.`,
    author: `@DORMshed`,
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
        name: `gatsby-cloner`,
        short_name: `gatclo`,
        start_url: `/`,
        background_color: `#a7a7a7`,
        theme_color: `#f33`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`,
        // This path is relative to the root of the site.
      },
    },
  ],
}
