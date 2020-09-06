const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }, options) => {
  const { createPage } = actions

  const caseStudy = await graphql(`
    query {
      allNotionPageNovaProjects {
        edges {
          node {
            pageId
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panic(result.errors)
    }
    result.data.allNotionPageNovaProjects.edges.forEach(({ node }) => {
      createPage({
        path: `work/${node.slug}`,
        component: path.resolve(`./src/templates/case.js`),
        context: {
          pathSlug: node.slug,
          pageId: node.pageId,
        },
      })
    })
  })

  const pages = await graphql(`
    query {
      allNotionPageNova {
        edges {
          node {
            pageId
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panic(result.errors)
    }
    result.data.allNotionPageNova.edges.forEach(({ node }) => {
      createPage({
        path: `${node.slug}`,
        component: path.resolve(`./src/templates/${node.slug}.js`),
        context: {
          pathSlug: node.slug,
          pageId: node.pageId,
        },
      })
    })
  })
}

// exports.sourceNodes = async ({
//   graphql,
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions

//   const result = await graphql(`
//     query {
//       allTeamMembers {
//         nodes {
//           Picture_of_Yourself__professional__high_res__facing_the_camera_
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panic("error loading shite", result.errors)
//     return
//   }

//   let imageURLs = []
//   result.data.allTeamMembers.nodes.map(member => {
//     const {
//       Picture_of_Yourself__professional__high_res__facing_the_camera_,
//     } = member
//     if (!Picture_of_Yourself__professional__high_res__facing_the_camera_) return
//     imageURLs.push(
//       Picture_of_Yourself__professional__high_res__facing_the_camera_
//     )
//   })

//   return imageURLs.map(url =>
//     createNode({
//       url,
//       id: createNodeId(url),
//       internal: {
//         type: `TeamMemberImage`,
//         contentDigest: createContentDigest(url),
//       },
//     })
//   )
// }
