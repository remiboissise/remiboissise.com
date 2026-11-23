import React from "react"
import { withPrefix } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import { localize } from "../i18n"

const ExternalLink = ({ href, className, children }) => (
  <a
    className={className}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

const ProjectCard = ({ project, locale }) => {
  const intl = useIntl()
  const title = localize(project.title, locale)
  const mainLink = project.source || project.path || project.appStoreLink

  return (
    <article className="card">
      <div className="card-header">
        <h3>
          {mainLink ? (
            <ExternalLink href={mainLink}>{title}</ExternalLink>
          ) : (
            title
          )}
        </h3>
        {project.img && (
          <img
            className={project.whiteBackground ? "logo white-background" : "logo"}
            src={withPrefix(project.img)}
            height={project.logoHeight || 35}
            alt=""
          />
        )}
      </div>
      <div className="card-main">
        {project.description[locale].map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="card-footer">
        {project.path && (
          <ExternalLink href={project.path}>
            <FormattedMessage id="Project.Website" />
          </ExternalLink>
        )}
        {project.source && (
          <ExternalLink href={project.source}>
            <FormattedMessage id="Project.Source" />
          </ExternalLink>
        )}
        {project.appStoreLink && (
          <ExternalLink className="store" href={project.appStoreLink}>
            <img
              src={withPrefix("/logos/apple.svg")}
              height={20}
              alt={intl.formatMessage({ id: "Project.AppStore" })}
            />
          </ExternalLink>
        )}
        {project.playStoreLink && (
          <ExternalLink className="store" href={project.playStoreLink}>
            <img
              src={withPrefix("/logos/android.svg")}
              height={20}
              alt={intl.formatMessage({ id: "Project.PlayStore" })}
            />
          </ExternalLink>
        )}
      </div>
    </article>
  )
}

const ProjectList = ({ categories }) => {
  const { locale } = useIntl()

  return categories.map((category) => (
    <section
      className="category"
      key={category.id}
      aria-labelledby={`category-${category.id}`}
    >
      <h2 id={`category-${category.id}`}>{localize(category.title, locale)}</h2>
      <div className="cards">
        {category.projects.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} />
        ))}
      </div>
    </section>
  ))
}

export default ProjectList
