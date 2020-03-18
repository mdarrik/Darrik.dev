/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//create the SocialMediaSite type.
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
        type SocialMediaSite implements Node {
            icon: File @link(by: "relativePath") #create a link to the icon with relativePath = imgName. 
        }
    `)
}
