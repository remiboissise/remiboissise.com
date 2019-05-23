import React from 'react'
import FlagIcon from '../components/FlagIcon'
import LanguageContext from '../context/LanguageContext'
import { FormattedMessage } from 'react-intl'

export default class Footer extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {
                    langue => (
                        <footer className='foo'>
                            <FormattedMessage id="Footer.Copyright" values={{ date : new Date().getFullYear()}} />
                            <section className='language'>
                            {
                                langue.i18nAvailable.map(language => (
                                    <button key={language.locale} onClick={langue.onChangeLanguage.bind(this, language.locale)}> 
                                        <FlagIcon code={language.code} size='lg' />
                                    </button>
                                ))
                            }
                            </section>
                        </footer>
                    )
                }
            </LanguageContext.Consumer>
        )
    }
}

Footer.contextType = LanguageContext