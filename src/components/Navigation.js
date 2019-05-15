import React from 'react'
import { Link } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import Icon from './Icon';
import { FaBars, FaTimes } from 'react-icons/fa';
import config from '../../data/config';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            open: false
        }
    }

    navOnScroll = () => {
        (window.scrollY > 20) ? this.setState({ scrolled : true }) : this.setState({ scrolled : false });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.navOnScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll);
    }

    getHeight(id) {
        return document.getElementById(id).clientHeight;
    }

    handleClick(e) {
        e.preventDefault();
        const isOpen = this.state.open;
        (isOpen) ? 
            this.setState({ 'open' : false}, () => {
                let height = this.getHeight('nav-height');
                document.getElementById('main-content-height').style.padding = height + 'px 0 0'; 
            }) : 
            this.setState({ 'open' : true}, () => {
                let height = this.getHeight('nav-height');
                document.getElementById('main-content-height').style.padding = height + 'px 0 0'; 
            });
    }

    render() {

        const menuLinks = this.props.menuLinks;
        const configuration = config;

        return (
            <ThemeContext.Consumer>
                {theme => (
                    <nav id='nav-height' className={this.state.scrolled ? 'nav scroll' : 'nav'} role="navigation">
                        <div className={this.state.open ? 'nav-container open' : 'nav-container'}>
                            <div className='nav-brand'>
                                <Link to='/'>
                                    <span className="animate">rémi boissise</span>
                                </Link>
                                <div className='nav-ham'>
                                    <button className='button-ham' onClick={this.handleClick.bind(this)}>
                                        {this.state.open ? <FaTimes /> : <FaBars />}
                                    </button>
                                </div>
                            </div>
                            <div className='nav-links' id="nav-links-height">
                                {
                                    menuLinks.map(link => (
                                        <Link key={link.name} to={link.link} activeClassName="active" partiallyActive={true} className='animate'>{link.name}</Link>
                                    ))
                                }
                                <a target="_blank" rel="noopener noreferrer" href={configuration.gitUrl}>
                                    github
                                </a>
                                <button className="button-theme" onClick={theme.toggleDark}>
                                    {theme.dark ? 
                                        <Icon src='./header/moon.svg' height='25'></Icon>
                                        : <Icon src='./header/sun.svg' height='25'></Icon>}
                                </button>
                            </div>
                        </div>
                    </nav>
                )}
            </ThemeContext.Consumer>
        )
    }
}

