import { existsSync, readFileSync, statSync } from "node:fs"
import { createRequire } from "node:module"
import { join } from "node:path"

const require = createRequire(import.meta.url)
const config = require("../data/config.js")

const PUBLIC_DIR = "public"
const MAX_HTML_BYTES = 100 * 1024
const FORBIDDEN = ["google-analytics", "googletagmanager", "fonts.googleapis"]
const ROUTES = ["/", "/projects/", "/contact/"]

const pages = [
  ...config.locales.flatMap((locale) =>
    ROUTES.map((route) => {
      const path =
        locale === config.defaultLocale ? route : `/${locale}${route}`
      return {
        path,
        locale,
        originalPath: route,
        file: join(path, "index.html"),
      }
    })
  ),
  {
    path: "/404.html",
    locale: config.defaultLocale,
    file: "404.html",
    noindex: true,
  },
]

const attributes = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, name, value]) => [
      name.toLowerCase(),
      value,
    ])
  )
const tagsOf = (html, name) =>
  [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(([tag]) =>
    attributes(tag)
  )

const failures = []
const fail = (page, message) => failures.push(`${page.file}: ${message}`)
const descriptions = new Map()

for (const page of pages) {
  const file = join(PUBLIC_DIR, page.file)
  if (!existsSync(file)) {
    fail(page, "missing")
    continue
  }
  const html = readFileSync(file, "utf8")
  const size = statSync(file).size
  if (size > MAX_HTML_BYTES) fail(page, `${size} bytes (max ${MAX_HTML_BYTES})`)

  const [htmlTag] = tagsOf(html, "html")
  if (htmlTag?.lang !== page.locale)
    fail(page, `<html lang="${htmlTag?.lang}">, expected "${page.locale}"`)

  const metas = tagsOf(html, "meta")
  const description = metas.filter((meta) => meta.name === "description")
  if (description.length !== 1) {
    fail(page, `${description.length} meta descriptions, expected 1`)
  } else if (descriptions.has(description[0].content)) {
    fail(
      page,
      `same meta description as ${descriptions.get(description[0].content)}`
    )
  } else {
    descriptions.set(description[0].content, page.file)
  }

  const links = tagsOf(html, "link")
  if (page.noindex) {
    if (
      !metas.some(
        (meta) => meta.name === "robots" && meta.content === "noindex"
      )
    ) {
      fail(page, "missing noindex")
    }
  } else {
    const canonical = links.find((link) => link.rel === "canonical")
    if (canonical?.href !== `${config.siteUrl}${page.path}`) {
      fail(page, `canonical is ${canonical?.href}`)
    }
    for (const hreflang of [...config.locales, "x-default"]) {
      if (
        !links.some(
          (link) => link.rel === "alternate" && link.hreflang === hreflang
        )
      ) {
        fail(page, `missing hreflang="${hreflang}"`)
      }
    }
  }

  for (const token of FORBIDDEN) {
    if (html.includes(token)) fail(page, `contains "${token}"`)
  }

  console.log(
    `${page.file.padEnd(28)} ${String(Math.round(size / 1024)).padStart(4)} KB  lang=${htmlTag?.lang}`
  )
}

if (failures.length > 0) {
  console.error(`\n${failures.length} problem(s):\n- ${failures.join("\n- ")}`)
  process.exit(1)
}
console.log(`\nAll ${pages.length} pages OK.`)
