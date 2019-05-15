import React from 'react'
import Icon from './Icon'

export default class ListCardProject extends React.Component {

    render() {

        const categories = this.props.projets;

        return (
            <>
            {categories.map((categorie, index) => {
                return(
                    <section className="cards" key={index}>
                        <div className="title">
                            <h1>{categorie.node.title}</h1>
                        </div>
                        {categorie.node.projects.map((projet, index) => (
                            <div 
                                key={index}
                                className="card">
                                <div className='card-header'>
                                    <h2>
                                        <a href={projet.source ? projet.source : projet.path} rel="noopener noreferrer" target="_blank">{projet.title}</a>
                                    </h2>
                                    { projet.img ? (
                                        <Icon className={projet.isNeededWhiteBg ? 'whiteBg' : ''} src={projet.img} height={projet.height ? projet.height : 35}></Icon>
                                    ) : null }
                                </div>
                                <div className='card-main'>
                                    <p dangerouslySetInnerHTML={ { __html : projet.description} }></p>
                                </div>
                                <div className='card-footer'>
                                    {projet.path ? (
                                        <a className="animate" href={projet.path}>website</a>
                                    ) : null}
                                    {projet.source ? (
                                        <a className='animate' href={projet.source} rel="noopener noreferrer" target="_blank">source</a>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                </section>
                )
            })}
            </>
        )
    }
}