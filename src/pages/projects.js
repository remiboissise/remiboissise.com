import React from "react"
import { FormattedMessage } from "react-intl"
import projets from "../../data/projets"
import ProjectList from "../components/Project"
import Seo from "../components/Seo"

const ProjectsPage = () => (
  <div className="container page-projects">
    <h1>
      <FormattedMessage id="Project.Title" />
    </h1>
    <ProjectList categories={projets} />
  </div>
)

export default ProjectsPage

export const Head = ({ pageContext }) => (
  <Seo
    pageContext={pageContext}
    titleId="Project.SeoTitle"
    descriptionId="Project.Description"
  />
)
