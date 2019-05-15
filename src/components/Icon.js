import React from 'react'

export default class Icon extends React.Component {

    render() {
        const Icon = this.props;
        return (          
            <img className={Icon.class} src={Icon.src} height={Icon.height} alt='' />
        )
    }
}