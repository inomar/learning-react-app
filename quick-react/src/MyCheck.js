import React, { Component } from 'react';

export default class MyCheck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            send: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    show() {
        console.log(`メール添付: ${this.state.send ? '有効' : '無効'}`)
    }

    render() {
        return(
            <form>
                <label htmlFor="send">メール送付: </label>
                <input type="checkbox" id="send" name="send" checked={this.state.send} onChange={this.handleChange} />
                <button type="button" onClick={this.show}>送信</button>
            </form>
        )
    }
}