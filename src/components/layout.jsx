import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import SocialMediaList from "./social-media-list"

export default function Layout({ children }) {
  const query = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )

  const {
    site: {
      siteMetadata: { author, title },
    },
  } = query

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <a href="#main" className="visually-hidden flex-none">
        Skip to Content
      </a>
      <Header siteTitle={title} />
      <main id="main" className="flex-grow px-8">
        {children}
      </main>
      <footer className="mt-8 py-1 mr-4 bg-gray-200 w-full flex-shrink flex justify-between">
        &copy;
        {author} {new Date().getFullYear()}
        <SocialMediaList />
      </footer>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
