import React from 'react'

export default class Icon extends React.Component {
    render() {
        const { className, src, height } = this.props;
        return (          
            <img className={className} src={src} height={height} alt='' />
        )
    }
}