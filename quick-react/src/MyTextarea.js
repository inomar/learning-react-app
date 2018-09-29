import React, { Component } from 'react';

export default class MyTextarea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '説明を書く',
        }

        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    show() {
        console.log(`description: ${this.state.description}`)
    }

    render() {
        return (
            <div>
                <textarea name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                <button onClick={this.show}>送信</button>
            </div>
        )
    }
}