import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/project-card"
import ProjectStatus, {
  ProjectStatusStates,
} from "../components/project-status"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mb-4 flex flex-col justify-center mx-auto md:block">
      <h1 className="font-semibold md:text-3xl text-2xl mb-1 font-decorative md:inline">
        I'm Darrik Moberg &mdash;{" "}
        <span className="md:text-2xl text-xl font-sans font-normal md:inline">
          Full Stack Developer
        </span>
      </h1>
    </div>
    <div className="d-flex justify-center">
      <div className="shadow-lg mb-8 border-t-4 border-green-300 md:mx-8 md:px-8 px-2 pb-4 pt-2">
        <p className="ml-2">
          I have a life sciences background and am currently working in the
          public sector. I mostly code using web &amp; backend technologies. I
          enjoy working on user-centric products and using technology to
          streamline user experiences and workflows. I'm also strongly committed
          to building accessibility-first tools and products.
        </p>
      </div>
    </div>
    <section className="mb-4">
      <h2 className="mb-4 text-xl font-semibold font-decorative">
        Things I've Made
      </h2>
      <ul className="md:px-8">
        <ProjectCard el="li" className="border-t-4 border-red-600">
          <h3 className="text-lg mb-2">
            <a href="https://sharktank-collaboration-presentation.netlify.com">
              IT Shark Tank Presentation
            </a>
            <ProjectStatus projectStatusState={ProjectStatusStates.completed} />
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
            <span className="self-center">
              <a href="https://github.com/mdarrik/sharktank-collaboration-presentation">
                See Code
              </a>
            </span>
          </p>
        </ProjectCard>
        <ProjectCard el="li" className="border-t-4 border-teal-400">
          <h3 className="text-lg mb-2">
            <a href="https://gatsby-static-comments.netlify.com">
              Gatsby Static Comments
            </a>
            <ProjectStatus
              projectStatusState={ProjectStatusStates.inProgress}
            />
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
            <span className="self-center">
              <a
                href="https://github.com/mdarrik/gatsby-static-comments"
                className="self-center"
              >
                See Code
              </a>
            </span>
          </p>
        </ProjectCard>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
