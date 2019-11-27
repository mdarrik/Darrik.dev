import React from "react"

export const Ul = props => (
  <ul className="list-disc list-inside mb-2 px-2" {...props} />
)

export const Li = props => <li className="" {...props} />

export default {
  Ul,
  Li,
}
