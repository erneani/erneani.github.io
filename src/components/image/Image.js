import React from 'react';

import './image.scss';

export default class Image extends React.Component {
    render () {
        return (
            <img alt={this.props.alt} source={require('../../images/'+this.props.source)} />
        )
    }
}