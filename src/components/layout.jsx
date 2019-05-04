import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
        <footer>
          &copy;
        {author} {new Date().getFullYear()}
        </footer>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout
