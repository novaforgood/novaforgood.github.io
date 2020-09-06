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
      resolve: "gatsby-source-notionso",
      options: {
        name: "Nova",
        rootPageUrl:
          "https://www.notion.so/Pages-88ab7b376b4349d0a5d67c98976b37a5",
        debug: false,
      },
    },
    {
      resolve: "gatsby-source-notionso",
      options: {
        name: "NovaProjects",
        rootPageUrl:
          "https://www.notion.so/Projects-71b94f9a4dfb4819a07c604902abfe0b",
        debug: false,
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
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: "teamMembers",
            table:
              "https://www.notion.so/3ff9b59164d44a0f964d0494344996e6?v=512883b460c44971a220738a9a40d53b",
            cacheType: "html",
          },
          {
            name: "NovaProjectsMetadata",
            table:
              "https://www.notion.so/141f953acc0346ecae4390f17bc72822?v=a78fc64b0b874b23b494055e46715d62",
            cacheType: "html",
          },
          {
            name: "NovaNetworkMetadata",
            table:
              "https://www.notion.so/e5e6a7a3f90f4ad48ae7845ca48b2ac8?v=b3ddd9e4612f4400892f047003bcf92e",
            cacheType: "html",
          },
        ],
      },
    },
  ],
}
