import React from "react"

export const H1 = ({ children, ...props }) => (
  <h1
    className="font-semibold md:text-3xl text-2xl mb-1 font-decorative"
    {...props}
  >
    {children}
  </h1>
)

export const H2 = ({ children, ...props }) => (
  <h2 className="mb-3 text-xl font-semibold font-decorative" {...props}>
    {children}
  </h2>
)

export default { H1, H2 }
