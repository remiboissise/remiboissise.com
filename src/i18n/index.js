import config from "../../data/config"
import en from "../locales/en.json"
import fr from "../locales/fr.json"

export { localizePath } from "./paths"

export const { locales, defaultLocale } = config
export const messages = { en, fr }
export const languageNames = { en: "english", fr: "français" }
export const LOCALE_STORAGE_KEY = "locale"

export const isLocale = (value) => locales.includes(value)

export const localize = (value, locale) =>
  typeof value === "string" ? value : value[locale]

export const localeFromPathname = (pathname = "/") =>
  locales.find(
    (locale) =>
      locale !== defaultLocale &&
      (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  ) || defaultLocale

export const detectBrowserLocale = () => {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
  return (
    languages
      .map((language) => language?.toLowerCase().split("-")[0])
      .find(isLocale) || defaultLocale
  )
}
