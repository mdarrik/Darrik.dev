import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-80ch">
      <h1>I&apos;m Darrik Moberg</h1>
      <div className="d-flex justify-center">
        <section className="text-card">
          <h2>About Me</h2>
          I&apos;m a full stack developer with a life sciences background
          currently working for the State of Washington. I enjoy working on
          user-centric products and using technology to streamline experiences
          and workflows.
        </section>
      </div>
      <section>
        <h2>Things I've Made</h2>
        <ul className="project-list">
          <li>
            <h3>
              <a href="https://sharktank-collaboration-presentation.netlify.com">
                L&I IT Shark Tank Presentation{" "}
                <span className="status">(Completed)</span>
              </a>
            </h3>
            <div>
              My work started a version of Shark Tank where employees could
              pitch ideas directly to IT management. I pitched an idea to
              improve collaboration and communication in the division by using a
              forum to centralize knowledge. Two other people submitted similar
              ideas, so they grouped us together. To help make our presentation
              stand out, I spun up a quick site using{" "}
              <a href="https://vuejs.org">Vue</a>,{" "}
              <a href="https://vuetifyjs.com">Vuetify</a>, &amp; hosted it with{" "}
              <a href="https://www.netlify.com/">Netlify</a>. This site served
              as the slideshow for our presentation and was a big hit among both
              the "Sharks" and the 2 peers I presented with.
              <a
                href="https://github.com/mdarrik/sharktank-collaboration-presentation"
                className="code-link"
              >
                See Code
              </a>
            </div>
          </li>
          <li>
            <h3>
              <a href="https://gatsby-static-comments.netlify.com">
                Gatsby Static Comments{" "}
                <span className="status">(In Progress)</span>
              </a>
            </h3>
            <div>
              Simple <abbr title="Proof Of Concept">POC</abbr> of a way to
              handle comments in <a href="https://www.gatsbyjs.org/">Gatsby</a>{" "}
              without depending on 3rd party storage/management solutions. Uses{" "}
              <a href="https://www.netlify.com/">Netlify</a> Forms &amp;
              Functions to handle comment submission, low-level spam filtering,
              sanitization, and saving.
              <a
                href="https://github.com/mdarrik/gatsby-static-comments"
                className="code-link"
              >
                See Code
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </Layout>
)

export default IndexPage
