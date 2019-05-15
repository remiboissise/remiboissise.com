import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import '../styles/main.scss'

export default class Index extends React.Component {

    render() {
        return (
            <Layout>
                <SEO title='me' />
                <div className="container page-index">
                    <section className="inner-container hero">
                        <h2>hello, my name is <span className="highlight">rémi</span>. I am a <span className="highlight">full-stack developer</span> living in Paris, France.</h2>
                    </section>
                    <section className='inner-container'>
                        <p className="column-2 about">        
                            Diplômé d’un Master II en méthodes informatiques appliquées à la gestion des entreprises à l’université Paris 1 – Panthéon-Sorbonne, j’ai longtemps été passionné par les technologies web. Mes premières expériences en développement mobile et web chez D-Dale et Heliop m'ont permis d'acquérir des compétences techniques solides et de démontrer ce que j’étais capable de faire.
                        </p>  
                        <p className="paragraph">
                            Passionné et dynamique, j’aime apprendre de nouvelles choses et les faire découvrir à mon entourage. Si vous souhaitez en apprendre davantage sur ma personne et/ou mon travail, n’hésitez pas à me <a className="highlight" href='/contact'>contacter</a>.
                            Pour plus d’informations sur mes compétences, n'hésitez pas à jeter un oeil à mon <a className="highlight" href='/contact'>cv</a> et mes <a className="highlight" href='/projects'>projets</a>.
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
