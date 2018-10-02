import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        const name = this.props.match.params.name;
        return(
           <p>{name}です</p>
        )
    }
}