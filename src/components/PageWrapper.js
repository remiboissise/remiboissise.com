import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { IntlProvider } from "react-intl"
import Layout from "./Layout"
import {
  LOCALE_STORAGE_KEY,
  defaultLocale,
  detectBrowserLocale,
  isLocale,
  localeFromPathname,
  localizePath,
  messages,
} from "../i18n"
import { readStorage } from "../utils/storage"

let preferredLocaleChecked = false

const PageWrapper = ({ children, pageContext = {}, location }) => {
  const { is404 = false, originalPath = "/" } = pageContext
  const pageLocale = isLocale(pageContext.locale)
    ? pageContext.locale
    : defaultLocale
  const [notFoundLocale, setNotFoundLocale] = useState(defaultLocale)

  useEffect(() => {
    if (is404) setNotFoundLocale(localeFromPathname(location.pathname))
  }, [is404, location.pathname])

  useEffect(() => {
    if (preferredLocaleChecked) return
    preferredLocaleChecked = true
    if (is404 || pageLocale !== defaultLocale || originalPath !== "/") return
    const stored = readStorage(LOCALE_STORAGE_KEY)
    const preferred = isLocale(stored) ? stored : detectBrowserLocale()
    if (preferred !== defaultLocale) {
      navigate(localizePath(preferred, "/"), { replace: true })
    }
  }, [is404, pageLocale, originalPath])

  const locale = is404 ? notFoundLocale : pageLocale

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages[locale]}
    >
      <Layout locale={locale} originalPath={is404 ? "/" : originalPath}>
        {children}
      </Layout>
    </IntlProvider>
  )
}

export default PageWrapper
