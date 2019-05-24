import React from 'react'
import Icon from './Icon'
import { withPrefix } from 'gatsby'
import { FormattedMessage } from 'react-intl'

export default class ListCardProject extends React.Component {
    render() {
        const categories = this.props.projets;
        return (
            <>
            {categories.map((categorie, index) => {
                return(
                    <section className="cards" key={index}>
                        <div className="title">
                            <h2>{categorie.title}</h2>
                        </div>
                        {categorie.projects.map((projet, index) => (
                            <div 
                                key={index}
                                className="card">
                                <div className='card-header'>
                                    <h3>
                                        <a href={projet.source ? projet.source : projet.path} rel="noopener noreferrer" target="_blank">{projet.title}</a>
                                    </h3>
                                    { projet.img ? (
                                        <Icon className={projet.isNeededWhiteBg ? 'whiteBg' : ''} src={withPrefix(projet.img)} height={projet.height ? projet.height : 35} alt={`Brand`} />
                                    ) : null }
                                </div>
                                <div className='card-main'>
                                    <p dangerouslySetInnerHTML={ { __html : projet.description} }></p>
                                </div>
                                <div className='card-footer'>
                                    {projet.path ? (
                                        <a className="animate" href={projet.path}>
                                            <FormattedMessage id="Project.Website" />
                                        </a>
                                    ) : null}
                                    {projet.source ? (
                                        <a className='animate' href={projet.source} rel="noopener noreferrer" target="_blank">
                                            <FormattedMessage id="Project.Source" />
                                        </a>
                                    ) : null}
                                    {projet.appStoreLink ? (
                                        <a className="animate" href={projet.appStoreLink} rel="noopener noreferrer" target="_blank"> 
                                            <Icon src={withPrefix('/logos/apple.svg')}  height={20} alt={`Apple`} />
                                        </a>
                                    ) : null}
                                    {projet.playStoreLink ? (
                                        <a className="animate" href={projet.playStoreLink} rel="noopener noreferrer" target="_blank"> 
                                            <Icon src={withPrefix('/logos/android.svg')}  height={20} alt={`Android`} />
                                        </a>
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