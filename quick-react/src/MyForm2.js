import React, { Component } from 'react';

export default class MyForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '宇宙'
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
        console.log(`${this.state.name}`)
    }

    render() {
        return (
            <div>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
              <button type="button" onClick={this.show}>送信</button>
            </div>
        )
    }


}