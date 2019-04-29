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
        }
      }
    }
    
    `
  )

  return  (
    <>
      <Header siteTitle={query.site.siteMetadata.title} />
      <div 
        style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>

          &copy; 
          {new Date().getFullYear()}
          , Built With
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
)
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// export default Layout
