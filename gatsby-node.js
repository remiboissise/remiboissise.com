const { locales, defaultLocale } = require("./data/config")
const { localizePath } = require("./src/i18n/paths")

const isNotFoundPage = (path) => /^\/404(\.html|\/)?$/.test(path)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.context.locale || page.path.startsWith("/dev-404-page")) return

  deletePage(page)

  if (isNotFoundPage(page.path)) {
    createPage({
      ...page,
      context: {
        ...page.context,
        locale: defaultLocale,
        originalPath: "/",
        is404: true,
      },
    })
    return
  }

  locales.forEach((locale) => {
    createPage({
      ...page,
      path: localizePath(locale, page.path),
      context: { ...page.context, locale, originalPath: page.path },
    })
  })
}
