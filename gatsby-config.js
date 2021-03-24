/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Nova",
    description: "It's Nova",
    basePath: "/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-177605898-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7rtxeab51ajj`,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: "WB_MQbJBHUrJJK61Hcw7C-reZK50qdNnBR-GuFOGSNo"
        // downloadLocal: true,
      },
    },
  ],
}
