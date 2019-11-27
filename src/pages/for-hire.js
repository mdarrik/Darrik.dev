import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import Headers from "../components/typography/headers"
import Lists from "../components/typography/lists"

const ForHire = ({ props }) => {
  return (
    <Layout>
      <Seo title="For Hire" />
      <Headers.H1>I'm looking for work</Headers.H1>
      <span className="block mb-2">
        I'm currently seeking full time and freelance/consulting opportunities.
      </span>
      <ProjectCard el="section" className="border-t-4 border-green-600">
        <Headers.H2>Full Time Work</Headers.H2>
        I'm currently looking for my next employment opportunity. I'm working
        for a position that is...
        <Lists.Ul>
          <Lists.Li>remote or in Washington State or Portland</Lists.Li>
          <Lists.Li>a front-end or fullstack position </Lists.Li>
          <Lists.Li>with a team that values accessibility</Lists.Li>
          <Lists.Li>with a team that has a strong growth mindset</Lists.Li>
        </Lists.Ul>
        It's even better if I can...
        <Lists.Ul>
          <Lists.Li>write/contribute to open source software</Lists.Li>
          <Lists.Li>have a chance to attend conferences</Lists.Li>
          <Lists.Li>
            get paid to work on personal projects and/or learning opportunities
          </Lists.Li>
          <Lists.Li>work closely with users to best meet their needs</Lists.Li>
          <Lists.Li>work with React or Vue</Lists.Li>
        </Lists.Ul>
        If you know of such a position, feel free to reach out to me on{" "}
        <a href="https://www.linkedin.com/in/darrikmoberg/">LinkedIn</a> or{" "}
        <a href="https://www.twitter.com/mdarrik">Twitter</a>!
      </ProjectCard>
      <ProjectCard el="section" className="border-t-4 border-blue-600">
        <Headers.H2>Freelance/Consulting</Headers.H2>
        In addition to fulltime work, I can be contracted to provide the
        following services:
        <Lists.Ul>
          <li>web development</li>
          <li>Vue or React development</li>
          <li>gatsby theme development</li>
          <li>serverless architecture integration and consultation</li>
          <li>web accessibility consulting</li>
          <li>technical writing</li>
          <li>livestream/community tooling development</li>
        </Lists.Ul>
        If you would like to hire me for any of these services, feel free to
        reach out to me on{" "}
        <a href="https://www.linkedin.com/in/darrikmoberg/">LinkedIn</a> or{" "}
        <a href="https://www.twitter.com/mdarrik">Twitter</a>.
      </ProjectCard>
    </Layout>
  )
}

export default ForHire
