import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks{
                name
                link
            }
          }
        }
      }
    `}
    render={data => (
        <ThemeContext.Consumer>
            {theme => (
                <>
                <Helmet 
                    bodyAttributes={{
                        class: theme.dark ? 'dark' : ''
                    }}
                >
                    <meta name="description" content={data.site.siteMetadata.description} />
                </Helmet>
                <div className='main'>
                    <Navigation menuLinks={data.site.siteMetadata.menuLinks} />
                    <main className="main-content" id="main-content-height">{children}</main>
                    <Footer></Footer>
                </div>
                </>
            )} 
        </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
