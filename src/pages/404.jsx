import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Page Not found" keywords={[""]} />
      <h1 className="text-2xl font-semibold my-4">NOT FOUND</h1>
      <p>The page you requested doesn&#39;t exist.</p>
      <img
        src={require("../images/undraw_page_not_found.svg")}
        alt=""
        className="w-full md:w-4/5"
      />
    </Layout>
  )
}

export default NotFoundPage
