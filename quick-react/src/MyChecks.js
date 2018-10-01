import React, { Component } from 'react';

export default class MyChecks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruit: ['apple', 'melon']
        }

        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    handleChange(e) {
        const fs = this.state.fruit
        if(e.target.checked) {
            fs.push(e.target.value)
        } else {
            fs.splice(fs.indexOf(e.target.value), 1)
        }

        this.setState({
            [e.target.name]: fs
        })
    }

    show() {
        console.log(`好きなくだもの: ${this.state.fruit}`)
    }

    render() {
        return(
            <form>
                <fieldset>
                    <legend>好きな果物: </legend>
                    <label htmlFor="fruit_apple">りんご</label>
                    <input type="checkbox" name="like" id="fruit_apple" value="apple" checked={this.state.fruit.includes('apple')} onChange={this.handleChange} />
                    <label htmlFor="fruit_melon">メロン</label>
                    <input type="checkbox" name="like" id="fruit_melon" value="melon" checked={this.state.fruit.includes('melon')} onChange={this.handleChange} />
                    <button type="button" onClick={this.show}>送信</button>
                </fieldset>
            </form>
        )
    }
}