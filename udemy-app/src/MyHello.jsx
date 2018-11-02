import React, { Component } from 'react';

export default class MyHello extends Component {
    render() {
        return(
            <div>こんにちは。{this.props.children}さん</div>
        )
    }
}