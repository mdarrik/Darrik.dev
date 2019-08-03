/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"

const SocialMediaLink = ({ name, url, icon }) => (
  <a href={url} aria-label={`Darrik's ${name}`}>
    {icon && icon.publicURL ? (
      <img src={icon.publicURL} aria-hidden="true" alt="" />
    ) : (
      { name }
    )}
  </a>
)

export default SocialMediaLink
