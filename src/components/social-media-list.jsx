import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialMediaLink from "./social-media-link"

const SocialMediaList = ({}) => {
  // gets the social media links and their icons
  const {
    allSocialMediaSite: { nodes: socialMediaNodes },
  } = useStaticQuery(graphql`
    {
      allSocialMediaSite {
        nodes {
          id
          name
          url
          icon {
            publicURL
          }
        }
      }
    }
  `)

  return (
    <ul className="flex row shrink">
      {socialMediaNodes.map(node => (
        <li key={node.id} className=" mr-4 h-6 w-6">
          <SocialMediaLink {...node} />
        </li>
      ))}
    </ul>
  )
}

export default SocialMediaList
