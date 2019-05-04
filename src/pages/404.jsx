import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page Not found" keywords={['']} />
    <h1>NOT FOUND</h1>
    <p>The page you requested doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
