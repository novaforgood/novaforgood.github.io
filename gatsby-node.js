const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions;

  await graphql(`
    query {
      allContentfulProjectCaseStudy {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      reporter.panic(result.errors);
    }
    result.data.allContentfulProjectCaseStudy.edges.forEach(({ node }) => {
      createPage({
        path: `work/${node.slug}`,
        component: path.resolve(`./src/templates/case.js`),
        context: {
          pathSlug: node.slug,
          id: node.id,
        },
      });
    });
  });
};
