import React from 'react'
import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/SEO'
import LanguageContext from '../context/LanguageContext'
import projets  from '../../data/projets'

class ProjetPage extends React.Component {
    render() {
        var { locale } = this.context;
        
        const projects = projets.find((projet) => {
            return projet.language === locale
        })

        return (
            <>
                <SEO title="projects"/>
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
