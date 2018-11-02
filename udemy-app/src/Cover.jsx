import React, { Component } from 'react';

export default class Cover extends Component {
    render(){
        const url = `https://wings.msn.to/books/${this.props.isbn}/${this.props.isbn}.jpg`;
        return (
          <img src={url} title={this.props.title} alt={this.props.title} />
        )
    }
}