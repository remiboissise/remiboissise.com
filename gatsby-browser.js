import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
import { LanguageProvider } from "./src/context/LanguageContext"

export const wrapRootElement = ({ element }) => <LanguageProvider><ThemeProvider>{element}</ThemeProvider></LanguageProvider>