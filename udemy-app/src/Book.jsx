import React, { Component } from 'react';
import Cover from './Cover';

export default class Book extends Component {
    render() {
        return (
            <React.Fragment>
                <Cover isbn={this.props.info.isb} title={this.props.info.title} />
                <ul>
                    <li>書名: {this.props.info.title}</li>
                    <li>価格: {this.props.info.price}</li>
                    <li>出版社: {this.props.info.price}円</li>
                </ul>
            </React.Fragment>
        )
    }

}