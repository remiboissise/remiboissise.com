import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { withPrefix } from 'gatsby'
import config from '../../data/config'

export default class ContactPage extends React.Component {
    render() {
        const configuration = config;
        return (
            <>
                <SEO title="contact"/>
                <Layout>
                    <div className='container page-contact'>
                        <h2>stay in touch</h2>
                        <ul>
                            <li>
                                <a href={"mailto:" + configuration.email}>
                                    email
                                </a>
                            </li>
                            <li>
                                <a href={configuration.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    linkedin
                                </a>
                            </li>
                            <li>
                                <a href={configuration.gitUrl} target="_blank" rel="noopener noreferrer">
                                    github
                                </a>
                            </li>
                            <li>
                                <a href={withPrefix(configuration.resumeSource)} target="_blank" rel="noopener noreferrer">
                                    resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </Layout>
            </>
        )
    }
}