import React, { Component } from 'react';

export default class MyHelloChildren extends Component {
    render () {
        return (
            <div> こんちには、{ this.props.children } さん！</div>
        )
    }
}