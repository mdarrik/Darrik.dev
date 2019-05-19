import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import "./layout.css"

import Header from "./header"

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
      <a href="#main" className="visually-hidden">
        Skip to Content
      </a>
      <Header siteTitle={title} />
      <main id="main">{children}</main>
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
