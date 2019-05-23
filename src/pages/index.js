import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { withPrefix } from "gatsby";
import configuration from '../../data/config'

export default class Index extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title={`full-stack developer`} />
                <div className="container page-index">
                    <section className="inner-container hero">
                        <FormattedHTMLMessage id='Index.Presentation' />
                    </section>
                    <section className='inner-container'>
                        <p className="column-2 about">      
                            <FormattedMessage id='Index.About' />
                        </p>  
                        <p className="paragraph">
                            <FormattedHTMLMessage id='Index.Situation' values={{cv_url : withPrefix(configuration.resumeSource)}} />
                        </p>
                        <div className="image">
                            <img src="images/me.jpg" alt="Rémi Boissise" className="profil-pic"/>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}
