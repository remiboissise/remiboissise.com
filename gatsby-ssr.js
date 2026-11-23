import React from "react"
import { THEME_STORAGE_KEY } from "./src/context/ThemeContext"

export { wrapPageElement, wrapRootElement } from "./src/wrap"

const themeScript = `(function () {
  var stored = null
  try { stored = JSON.parse(window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})) } catch (e) {}
  var dark = false
  try { dark = typeof stored === "boolean" ? stored : window.matchMedia("(prefers-color-scheme: dark)").matches } catch (e) {}
  if (dark) document.body.classList.add("dark")
})()`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="theme-preference"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />,
  ])
}
