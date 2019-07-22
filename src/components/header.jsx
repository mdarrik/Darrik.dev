import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="sticky top-0 z-10 bg-white px-2
   mb-2 flex justify-between 
   content-center border-t-4 
   border-blue-400 text-lg"
  >
    <span>
      <Link to="/" className="font-decorative text-black border-b-0">
        {siteTitle}
      </Link>
    </span>
    <nav className="flex content-between">
      <ul>
        <li>
          <a
            href="https://www.github.com/mdarrik"
            aria-label="view my work on github"
            className="border-b-0 text-black"
          >
            <svg
              className="w-4 h-4 inline mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M16 .4a16 16 0 0 0-5 31.2c.7.1 1-.4 1-.8v-3c-4.4 1-5.4-1.9-5.4-1.9-.7-1.8-1.8-2.3-1.8-2.3-1.4-1 .2-1 .2-1 1.6.1 2.4 1.7 2.4 1.7 1.4 2.4 3.8 1.7 4.7 1.3.1-1 .5-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-8 0-1.7.6-3.1 1.6-4.2-.1-.4-.7-2 .2-4.3 0 0 1.3-.4 4.4 1.7a15.4 15.4 0 0 1 8 0C23 6.6 24.4 7 24.4 7c.9 2.2.3 3.9.2 4.3 1 1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.4 1 1.4 1 3v4.3c0 .4.4 1 1.2.8A16 16 0 0 0 16 .4z" />
            </svg>
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
