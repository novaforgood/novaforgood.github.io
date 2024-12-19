import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })  

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nova-site-24-25`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: "UA-177605898-1",
    },
  },{
    resolve: 'gatsby-source-contentful',
    options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
    }
  },{
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [
        `https://fonts.googleapis.com`,
        `https://fonts.gstatic.com`,
      ],
      web: [
        {
          name: `Syne`,
          file: `https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap`,
        },
        {
          name: `Inter`,
          file:
            "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        },
      ],
    },
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};

export default config;
