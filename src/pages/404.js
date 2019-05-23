import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FormattedMessage } from 'react-intl'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <div className='container page-404'>
            <div className='inner-container'>
                <div className='row'>
                    <span className='number'>
                        <FormattedMessage id="404.First_number" />
                    </span>
                    <span className='letters'>
                        <FormattedMessage id="404.First_word" />  
                    </span>
                </div>
                <div className='row second'>
                    <span className='letters'>
                        <FormattedMessage id="404.Second_word_1" />
                    </span>
                    <span className='number'>
                        <FormattedMessage id="404.Second_number" />  
                    </span>
                    <span className='letters'>
                        <FormattedMessage id="404.Second_word_2" />
                    </span>
                </div>
                <div className='row'>
                    <span className='letters'>
                        <FormattedMessage id="404.Third_word" />
                    </span>
                    <span className='number'>
                        <FormattedMessage id="404.Third_number" />
                    </span>
                </div>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
