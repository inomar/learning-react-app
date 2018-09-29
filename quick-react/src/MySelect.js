import React, { Component } from 'react';

export default class MySelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruit: 'apple',
        }
        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    show () {
        console.log(`好きな果物: ${this.state.fruit}`)
    }

    render () {
        return(
            <React.Fragment>
                <select name="fruit" value={this.state.fruit} onChange={this.handleChange} >
                　<option value="" >選択して</option>
                  <option value="apple">りんご</option>
                  <option value="orange">オレンジ</option>
                  <option value="melon">メロン</option>
                  <option value="grape">ぶどう</option>
                </select>
                <button type="button" onClick={this.show}>送信</button>
            </React.Fragment>
        )
    }
}