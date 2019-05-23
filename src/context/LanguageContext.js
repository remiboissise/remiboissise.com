import React from 'react'
import { addLocaleData } from 'react-intl'
import enData from 'react-intl/locale-data/en'
import frData from 'react-intl/locale-data/fr'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import { flatten } from 'flat'

addLocaleData([...enData, ...frData])

let i18nAvailable = [
    {
        code: 'fr',
        locale: 'fr'
    },
    {
        code: 'gb',
        locale: 'en'
    }
]

const defaultState = {
    locale: 'en',
    messages: flatten(en),
    i18nAvailable: i18nAvailable,
    onChangeLanguage : (lang) => {}
}

const LanguageContext = React.createContext(defaultState)

class LanguageProvider extends React.Component {
    state = {
        locale: 'en',
        messages: flatten(en)
    }

    componentDidMount() {
        const localStorageLanguage = JSON.parse(localStorage.getItem("language"))
        if(localStorageLanguage) {
            this.onChangeLanguage(localStorageLanguage)
        } else {
            this.onChangeLanguage('en')
        }
    }

    onChangeLanguage = (lang)  => {
        localStorage.setItem("language", JSON.stringify(lang))
        switch(lang) {
            case 'fr': this.setState({ locale : lang, messages : flatten(fr) }); break;
            case 'en': this.setState({ locale : lang, messages : flatten(en) }); break;
            default: this.setState({ locale : lang, messages : flatten(en) }); break;
        }
    }

    render() {
        const { children } = this.props
        const { locale, messages } = this.state
        return (
            <LanguageContext.Provider 
                value={{
                    locale, 
                    messages,
                    i18nAvailable,
                    onChangeLanguage: this.onChangeLanguage
                }}
            >
                {children}
            </LanguageContext.Provider>
        )
    }
}

export default LanguageContext

export { LanguageProvider }