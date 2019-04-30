import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css";

const Header = ({ siteTitle }) => (
  <header>
    <h1 className="site-name">
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
