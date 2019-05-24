import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/SEO'
import LanguageContext from '../context/LanguageContext'
import projets  from '../../data/projets'
import configurationSeo from '../../data/seo'

class ProjetPage extends React.Component {
    render() {
        var { locale } = this.context;
        
        const projects = projets.find((projet) => {
            return projet.language === locale
        })

        return (
            <>
                <SEO 
                    lang='en'
                    title={`projects`} 
                    description={configurationSeo.meta_description_projects} 
                    keywords={configurationSeo.keywords_projects} 
                />
                <Layout>
                    <div className="container">
                        <Project projets={ projects.projects }></Project>
                    </div>
                </Layout>
            </>
        )
    }
}

ProjetPage.contextType = LanguageContext

export default ProjetPage
