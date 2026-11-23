import React from "react"
import { Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import {
  LOCALE_STORAGE_KEY,
  languageNames,
  locales,
  localizePath,
} from "../i18n"
import { writeStorage } from "../utils/storage"

const Footer = ({ locale, originalPath }) => {
  const intl = useIntl()

  return (
    <footer className="foo">
      <p>
        <FormattedMessage
          id="Footer.Copyright"
          values={{
            date: (
              <span suppressHydrationWarning>{new Date().getFullYear()}</span>
            ),
          }}
        />
      </p>
      <nav
        className="language"
        aria-label={intl.formatMessage({ id: "Footer.Language" })}
      >
        {locales.map((code) => (
          <Link
            key={code}
            to={localizePath(code, originalPath)}
            lang={code}
            hrefLang={code}
            className={code === locale ? "active" : undefined}
            aria-current={code === locale ? "true" : undefined}
            onClick={() => writeStorage(LOCALE_STORAGE_KEY, code)}
          >
            {languageNames[code]}
          </Link>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
