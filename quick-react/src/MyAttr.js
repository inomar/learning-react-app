import React, { Component } from 'react';
import { list } from 'postcss';

export default class MyAttr extends Component {
    render() {
        return (
            <ul>
                <li>{ this.props.name }</li>
                <li>{ this.props.age }</li>
                <li>{ this.props.sex }</li>
            </ul>
        )

    }
}