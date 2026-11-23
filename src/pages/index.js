import React from "react"
import { Link, withPrefix } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import config from "../../data/config"
import parcours from "../../data/parcours"
import Seo from "../components/Seo"
import { localize, localizePath } from "../i18n"

const highlight = (chunks) => <span className="highlight">{chunks}</span>

const IndexPage = () => {
  const { locale } = useIntl()
  const pageLink = (path) => (chunks) => (
    <Link className="block-link" to={localizePath(locale, path)}>
      {chunks}
    </Link>
  )

  return (
    <div className="container page-index">
      <section className="hero">
        <div className="hero-text">
          <h1>
            <FormattedMessage
              id="Index.Presentation"
              values={{ hl: highlight }}
            />
          </h1>
          <p className="lead">
            <FormattedMessage id="Index.About" />
          </p>
        </div>
        <img
          className="portrait"
          src={withPrefix(config.profilePicture)}
          alt="Rémi Boissise"
          width={800}
          height={800}
        />
      </section>

      <section className="career" aria-labelledby="career-title">
        <h2 id="career-title">
          <FormattedMessage id="Index.Career" />
        </h2>
        <ol className="timeline">
          {parcours.map((step) => (
            <li key={step.id}>
              <span className="period">{localize(step.period, locale)}</span>
              <div className="entry">
                <h3>{step.organization}</h3>
                <p className="role">{localize(step.role, locale)}</p>
                <p className="summary">{localize(step.summary, locale)}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="closing">
        <FormattedMessage
          id="Index.Situation"
          values={{
            projects: pageLink("/projects/"),
            resume: (chunks) => (
              <a
                className="block-link"
                href={withPrefix(config.resumeSource)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
            contact: pageLink("/contact/"),
          }}
        />
      </p>
    </div>
  )
}

export default IndexPage

export const Head = ({ pageContext }) => (
  <Seo
    pageContext={pageContext}
    titleId="Index.Title"
    descriptionId="Index.Description"
  />
)
