import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='foo'>
                © {new Date().getFullYear()}, rémi boissise
            </footer>
        )
    }
}