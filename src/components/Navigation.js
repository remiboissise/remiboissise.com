import React from 'react'
import { Link, withPrefix } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import Icon from './Icon';
import { FaBars, FaTimes } from 'react-icons/fa';
import config from '../../data/config';
import { FormattedMessage } from 'react-intl';

export default class Navigation extends React.Component {

    render() {

        const { menuLinks, open, scrolled } = this.props;
        const configuration = config;

        return (
            <ThemeContext.Consumer>
                {theme => (
                    <nav id='nav-height' className={scrolled ? 'nav scroll' : 'nav'} role="navigation">
                        <div className={open ? 'nav-container open' : 'nav-container'}>
                            <div className='nav-brand'>
                                <Link to='/'>
                                    <span className="animate">
                                        <FormattedMessage id='Navigation.Brand' />
                                    </span>
                                </Link>
                                <div className='nav-ham'>
                                    <button className='button-ham' onClick={this.props.handleClick}>
                                        { open ? <FaTimes /> : <FaBars /> }
                                    </button>
                                </div>
                            </div>
                            <div className='nav-links' id="nav-links-height">
                                {
                                    menuLinks.map(link => (
                                        <Link key={link.name} to={link.link} activeClassName="active" partiallyActive={true} className='animate'>
                                            <FormattedMessage id={link.name} />
                                        </Link>
                                    ))
                                }
                                <a target="_blank" rel="noopener noreferrer" href={configuration.gitUrl}>
                                    <FormattedMessage id='Navigation.Github' />
                                </a>
                                <button className="button-theme" onClick={theme.toggleDark}>
                                    { theme.dark 
                                        ? <Icon src={withPrefix('/header/sun.svg')} height='25' alt={`Light mode`}></Icon> 
                                        : <Icon src={withPrefix('/header/moon.svg')} height='25' alt={`Dark mode`}></Icon> 
                                    }
                                </button>
                            </div>
                        </div>
                    </nav>
                )}
            </ThemeContext.Consumer>
        )
    }
}

