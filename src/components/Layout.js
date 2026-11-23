import React, { useEffect, useState } from "react"
import "@fontsource/raleway/latin-300.css"
import "@fontsource/raleway/latin-600.css"
import "../styles/main.scss"
import Footer from "./Footer"
import Navigation from "./Navigation"

const SCROLL_THRESHOLD = 20

const Layout = ({ children, locale, originalPath }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [locale, originalPath])

  return (
    <div className="main">
      <Navigation
        locale={locale}
        scrolled={scrolled}
        open={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />
      <main className="main-content" id="main-content">
        {children}
      </main>
      <Footer locale={locale} originalPath={originalPath} />
    </div>
  )
}

export default Layout
