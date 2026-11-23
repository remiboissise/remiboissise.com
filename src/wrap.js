import React from "react"
import PageWrapper from "./components/PageWrapper"
import { ThemeProvider } from "./context/ThemeContext"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <PageWrapper {...props}>{element}</PageWrapper>
)
