import React from "react"
import PropTypes from "prop-types"

export const ProjectStatusStates = {
  completed: "Completed",
  inProgress: "In Progress",
}

const ProjectStatus = ({ projectStatusState, className }) => {
  let colorClass = ""
  switch (projectStatusState) {
    case ProjectStatusStates.completed:
      colorClass = " text-green-700 "
      break
    case ProjectStatusStates.inProgress:
      colorClass = " text-orange-700 "
  }
  return (
    <span
      className={
        "text-sm flex justify-center md:inline" + colorClass + className
      }
    >
      {" "}
      ({projectStatusState})
    </span>
  )
}

ProjectStatus.propTypes = {
  projectStatusState: PropTypes.oneOf(Object.values(ProjectStatusStates))
    .isRequired,
}

export default ProjectStatus
