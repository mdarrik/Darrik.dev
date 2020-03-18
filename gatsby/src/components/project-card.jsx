import React from "react"
import PropTypes from "prop-types"

function ProjectCard({ el = "div", className = "", children }) {
  const CardTag = el
  return (
    <CardTag className={"mb-4 shadow-lg px-4 pb-2 " + className.trim()}>
      {children}
    </CardTag>
  )
}

ProjectCard.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The element type to use for the project card.
   * Written as a separate element for better semantics
   */
  el: PropTypes.elementType,
  className: PropTypes.string,
}

export default ProjectCard
