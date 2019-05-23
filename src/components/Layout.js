import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Helmet from 'react-helmet'
import ThemeContext from '../context/ThemeContext'
import LanguageContext from '../context/LanguageContext'
import { IntlProvider } from 'react-intl'
import '../styles/main.scss'

class Layout extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            scrolled: false,
            open: false
        }
    }

    navOnScroll = () => {
        (window.scrollY > 20) ? this.setState({ scrolled : true }) : this.setState({ scrolled : false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll);
    }

    getHeight(id) {
        return document.getElementById(id).clientHeight;
    }

    handleClick(e) {
        e.preventDefault();
        const isOpen = this.state.open;
        (isOpen) ? 
            this.setState({ open : false}, () => {
                let height = this.getHeight('nav-height');
                document.getElementById('main-content-height').style.padding = height + 'px 0 0'; 
            }) : 
            this.setState({ open : true}, () => {
                let height = this.getHeight('nav-height');
                document.getElementById('main-content-height').style.padding = height + 'px 0 0'; 
            });
    }

    render()
    {
        const { children } = this.props;
        return(
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
                            <LanguageContext.Consumer> 
                                { 
                                    langue => (
                                        <IntlProvider 
                                            key={langue.locale}
                                            locale={langue.locale}
                                            messages={langue.messages}
                                        >
                                            <div className='main'>  
                                                <Navigation 
                                                    menuLinks={data.site.siteMetadata.menuLinks} 
                                                    scrolled={this.state.scrolled} 
                                                    open={this.state.open}
                                                    handleClick={this.handleClick.bind(this)}
                                                />  
                                                <main className="main-content" id="main-content-height">
                                                    {children}
                                                </main>
                                                <Footer />
                                            </div>  
                                        </IntlProvider>
                                    )
                                }
                            </LanguageContext.Consumer>
                        </>
                    )} 
                </ThemeContext.Consumer>
            )}
        />
    )}
}

Layout.contextType = LanguageContext

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
