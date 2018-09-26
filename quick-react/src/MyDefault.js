import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyDefault extends Component {
    render () {
        return (
            <p>{this.props.name}です。</p>
        )
    }
}

MyDefault.propTypes = {
    name: PropTypes.string,
}

MyDefault.defaultProps = {
    name: '名無しのゴンベ',
}