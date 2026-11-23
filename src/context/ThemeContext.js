import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { readStorage, writeStorage } from "../utils/storage"

export const THEME_STORAGE_KEY = "dark"

const ThemeContext = createContext({ dark: false, toggleDark: () => {} })

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    const stored = readStorage(THEME_STORAGE_KEY)
    setDark(
      typeof stored === "boolean"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    )
  }, [])

  useEffect(() => {
    if (dark !== null) document.body.classList.toggle("dark", dark)
  }, [dark])

  const toggleDark = useCallback(() => {
    const next = dark !== true
    writeStorage(THEME_STORAGE_KEY, next)
    setDark(next)
  }, [dark])

  const value = useMemo(
    () => ({ dark: dark === true, toggleDark }),
    [dark, toggleDark]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext
