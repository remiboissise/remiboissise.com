import React from "react"
import { FormattedMessage } from "react-intl"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <div className="container page-404">
    <div className="inner-container">
      <div className="row">
        <span className="number">
          <FormattedMessage id="404.First_number" />
        </span>
        <span className="letters">
          <FormattedMessage id="404.First_word" />
        </span>
      </div>
      <div className="row">
        <span className="letters">
          <FormattedMessage id="404.Second_word_1" />
        </span>
        <span className="number">
          <FormattedMessage id="404.Second_number" />
        </span>
        <span className="letters">
          <FormattedMessage id="404.Second_word_2" />
        </span>
      </div>
      <div className="row">
        <span className="letters">
          <FormattedMessage id="404.Third_word" />
        </span>
        <span className="number">
          <FormattedMessage id="404.Third_number" />
        </span>
      </div>
    </div>
  </div>
)

export default NotFoundPage

export const Head = ({ pageContext }) => (
  <Seo
    pageContext={pageContext}
    titleId="404.SeoTitle"
    descriptionId="404.Description"
    noindex
  />
)
