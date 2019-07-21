import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <hgroup className="mb-4 flex flex-col justify-center mx-auto md:block">
      <h1 className="font-semibold md:text-3xl text-2xl mb-1 font-decorative md:inline">
        I'm Darrik Moberg &mdash;{" "}
      </h1>
      <h2 className="md:text-2xl text-xl font-sans md:inline">
        Full Stack Developer
      </h2>
    </hgroup>
    <div className="d-flex justify-center">
      <div className="shadow-lg mb-8 border-t-4 border-green-300 md:mx-8 md:px-8 px-2 pb-4 pt-2">
        <p className="ml-2">
          I have a life sciences background and am currently working in the
          public sector. I mostly do web &amp; backend stuff. I enjoy working on
          user-centric products and using technology to streamline user
          experiences and workflows.
        </p>
      </div>
    </div>
    <section className="mb-4">
      <h2 className="mb-4 text-xl font-semibold font-decorative">
        Things I've Made
      </h2>
      <ul className="md:px-8">
        <li className="mb-4 shadow-lg border-t-4 border-red-600 px-4">
          <h3 className="text-lg mb-2">
            <a href="https://sharktank-collaboration-presentation.netlify.com">
              IT Shark Tank Presentation
            </a>
            <span className="text-sm text-green-700 flex justify-center md:inline">
              {" "}
              (Completed)
            </span>
          </h3>
          <p className="flex flex-col">
            <span>
              My employer started a version of "Shark Tank" where employees
              could pitch ideas directly to IT management. I pitched an idea to
              improve collaboration and communication in the division by using a
              forum to centralize knowledge. Two other people submitted similar
              ideas, so they grouped us together. To help make our presentation
              stand out, I spun up a quick site using{" "}
              <a href="https://vuejs.org">Vue</a>,{" "}
              <a href="https://vuetifyjs.com">Vuetify</a>, &amp; hosted it with{" "}
              <a href="https://www.netlify.com/">Netlify</a>. This site served
              as the slideshow for our presentation and was a big hit among both
              the "Sharks" and the 2 peers I presented with.
            </span>
            <a
              href="https://github.com/mdarrik/sharktank-collaboration-presentation"
              className="self-center underline text-blue-600"
            >
              See Code
            </a>
          </p>
        </li>
        <li className="mb-4 shadow-lg border-t-4 border-teal-400 px-4">
          <h3 className="text-lg mb-2">
            <a href="https://gatsby-static-comments.netlify.com">
              Gatsby Static Comments
            </a>
            <span className="text-sm flex justify-center md:inline text-orange-700">
              {" "}
              (In Progress)
            </span>
          </h3>
          <p className="flex flex-col">
            <span>
              Simple <abbr title="Proof Of Concept">POC</abbr> of a way to
              handle comments in <a href="https://www.gatsbyjs.org/">Gatsby</a>{" "}
              without depending on 3rd party, non-static solutions. Uses{" "}
              <a href="https://www.netlify.com/">Netlify</a> Forms &amp;
              Functions to handle comment submission, low-level spam filtering,
              input sanitization, and saving.
            </span>
            <a
              href="https://github.com/mdarrik/gatsby-static-comments"
              className="self-center underline text-blue-600"
            >
              See Code
            </a>
          </p>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
