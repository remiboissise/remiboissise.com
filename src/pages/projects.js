import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/Project';
import { StaticQuery, graphql } from 'gatsby';
import SEO from '../components/SEO';

export default class ProjetPage extends React.Component {
    render() {
        return (
            <StaticQuery
                query = { graphql`
                    query ProjetPage {
                        allProjetsJson {
                            edges {
                                node {
                                    title 
                                    projects {
                                        path
                                        title
                                        source
                                        description
                                        img
                                        color
                                        height
                                        isNeededWhiteBg
                                        appStoreLink
                                        playStoreLink
                                    }
                                }
                            }
                        }
                    }
                `}

                render = { data => (
                    <>
                        <SEO title="projects"/>
                        <Layout>
                            <div className="container">
                                <Project projets={ data.allProjetsJson.edges }></Project>
                            </div>
                        </Layout>
                    </>
                )}
            >
            </StaticQuery>
        )
    }
}