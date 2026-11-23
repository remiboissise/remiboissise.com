import React from "react"
import { withPrefix } from "gatsby"
import { FormattedMessage } from "react-intl"
import config from "../../data/config"
import Seo from "../components/Seo"

const ContactPage = () => (
  <div className="container page-contact">
    <h1>
      <FormattedMessage id="Contact.Title" />
    </h1>
    <ul>
      <li>
        <a href={`mailto:${config.email}`}>
          <FormattedMessage id="Contact.Email" />
        </a>
      </li>
      <li>
        <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="Contact.Linkedin" />
        </a>
      </li>
      <li>
        <a href={config.gitUrl} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="Contact.Github" />
        </a>
      </li>
      <li>
        <a
          href={withPrefix(config.resumeSource)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="Contact.Resume" />
        </a>
      </li>
    </ul>
  </div>
)

export default ContactPage

export const Head = ({ pageContext }) => (
  <Seo
    pageContext={pageContext}
    titleId="Contact.SeoTitle"
    descriptionId="Contact.Description"
  />
)
