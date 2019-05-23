import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { withPrefix } from 'gatsby'
import config from '../../data/config'

import { FormattedMessage } from 'react-intl'

export default class ContactPage extends React.Component {
    render() {
        const configuration = config;
        return (
            <>
                <SEO title="contact"/>
                <Layout>
                    <div className='container page-contact'>
                        <h2>
                            <FormattedMessage id="Contact.Title" />
                        </h2>
                        <ul>
                            <li>
                                <a href={"mailto:" + configuration.email}>
                                    <FormattedMessage id="Contact.Email" />
                                </a>
                            </li>
                            <li>
                                <a href={configuration.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage id="Contact.Linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href={configuration.gitUrl} target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage id="Contact.Github" />
                                </a>
                            </li>
                            <li>
                                <a href={withPrefix(configuration.resumeSource)} target="_blank" rel="noopener noreferrer">
                                    <FormattedMessage id='Contact.Resume' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Layout>
            </>
        )
    }
}