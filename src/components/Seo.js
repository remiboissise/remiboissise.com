import React from "react"
import { withPrefix } from "gatsby"
import config from "../../data/config"
import {
  defaultLocale,
  isLocale,
  locales,
  localizePath,
  messages,
} from "../i18n"

const openGraphLocales = { en: "en_US", fr: "fr_FR" }

const absoluteUrl = (path) => `${config.siteUrl}${path}`

const Seo = ({ pageContext = {}, titleId, descriptionId, noindex = false }) => {
  const locale = isLocale(pageContext.locale)
    ? pageContext.locale
    : defaultLocale
  const originalPath = pageContext.originalPath || "/"
  const title = `${config.siteTitle} | ${messages[locale][titleId]}`
  const description = messages[locale][descriptionId]
  const url = absoluteUrl(localizePath(locale, originalPath))

  return (
    <>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href={withPrefix(config.favicon)} />
      <meta name="theme-color" content={config.themeColor} />
      {noindex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <>
          <link rel="canonical" href={url} />
          {locales.map((code) => (
            <link
              key={code}
              rel="alternate"
              hrefLang={code}
              href={absoluteUrl(localizePath(code, originalPath))}
            />
          ))}
          <link
            rel="alternate"
            hrefLang="x-default"
            href={absoluteUrl(localizePath(defaultLocale, originalPath))}
          />
        </>
      )}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteUrl(config.profilePicture)} />
      <meta property="og:locale" content={openGraphLocales[locale]} />
    </>
  )
}

export default Seo
