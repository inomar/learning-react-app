import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        
    }

    render() {
        return(
            <React.Fragment>
                <input type="checkbox" name="tasks" onChange={this.handleChange} /> {this.props.task}
            </React.Fragment>
        )
    }
}