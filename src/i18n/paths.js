const { defaultLocale } = require("../../data/config")

const localizePath = (locale, path = "/") =>
  locale === defaultLocale ? path : `/${locale}${path}`

module.exports = { localizePath }
