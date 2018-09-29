import React, { Component } from 'react';

export default class MyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '山田太郎',
            email: 'yamada@example.com',
        };
        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    };

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    show() {
        console.log(`name: ${this.state.name}`)
        console.log(`email: ${this.state.email}`)
    };

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">名前: </label>
                    <input id="name" name="name" type="text" onChange={this.handleChange} value={this.state.name} />
                </div>
                <div>
                    <label htmlFor="email">メール: </label>
                    <input id="email" name="email" type="mail" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div>
                    <button type="button" onClick={this.show}>送信</button>
                </div>
            </form>
        )
    }
}