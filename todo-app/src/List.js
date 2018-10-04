import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        
    }

    render() {
        const key = this._reactInternalFiber.key
        return(
            <li>
                <input type="checkbox" id={key} name="task" onChange={this.handleChange} /><label htmlFor={key}>{this.props.task}</label>
            </li>
        )
    }
}