import React, { useContext } from "react"
import { Link } from "gatsby"
import { FormattedMessage, useIntl } from "react-intl"
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi"
import config from "../../data/config"
import ThemeContext from "../context/ThemeContext"
import { localizePath } from "../i18n"

const Navigation = ({ locale, scrolled, open, onToggleMenu }) => {
  const intl = useIntl()
  const { dark, toggleDark } = useContext(ThemeContext)

  return (
    <nav
      className={scrolled ? "nav scroll" : "nav"}
      aria-label={intl.formatMessage({ id: "Navigation.Label" })}
    >
      <div className={open ? "nav-container open" : "nav-container"}>
        <div className="nav-brand">
          <Link to={localizePath(locale, "/")}>
            <FormattedMessage id="Navigation.Brand" />
          </Link>
          <button
            type="button"
            className="icon-button nav-ham"
            onClick={onToggleMenu}
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={intl.formatMessage({
              id: open ? "Navigation.CloseMenu" : "Navigation.OpenMenu",
            })}
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
        <div className="nav-links" id="nav-links">
          {config.menuLinks.map((link) => (
            <Link
              key={link.id}
              to={localizePath(locale, link.path)}
              activeClassName="active"
              partiallyActive
            >
              <FormattedMessage id={link.id} />
            </Link>
          ))}
          <a href={config.gitUrl} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="Navigation.Github" />
          </a>
          <button
            type="button"
            className="icon-button"
            onClick={toggleDark}
            aria-pressed={dark}
            aria-label={intl.formatMessage({ id: "Navigation.DarkMode" })}
          >
            {dark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
