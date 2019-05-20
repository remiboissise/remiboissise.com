import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default class Index extends React.Component {

    render() {
        return (
            <Layout>
                <SEO title={`full-stack developer`} />
                <div className="container page-index">
                    <section className="inner-container hero">
                        <h2>hello, my name is <span className="highlight">rémi</span>. I am a <span className="highlight">full-stack developer</span> living in Paris, France.</h2>
                    </section>
                    <section className='inner-container'>
                        <p className="column-2 about">        
                            Passionate, dynamic and a graduate of a Master in computer methods applied to business management at the University of Paris 1 - Panthéon-Sorbonne, I have been interested for many years in new technologies. I particularly like the idea that the applications I design make everyday life easier for users. It is with this in mind that I have developed, for D-Dale, a solution for orientation in complex buildings that is totally independent of any physical equipment or Internet connection.
                        </p>  
                        <p className="paragraph">
                            The development of algorithms remains for me one of the fundamental challenges of programming. I like to learn new things and make people discover them.
                            Feel free to discover <a className="highlight" href='/projects'>my different projects</a>, consult <a className="highlight" href='/contact'>my resume</a> or <a className="highlight" href='/contact'>contact me</a> directly if you want to learn more about my work.
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
