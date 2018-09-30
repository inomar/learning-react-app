import React, { Component } from 'react';

export default class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruite: ['apple', 'melon']
        }
        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    handleChange(e) {
        const data = []
        const opts = e.target.options;
        for(let i = 0; i < opts.length; i++) {
            if (opts[i].selected) {
                data.push(opts[i].value)
            }
        }
        this.setState({
            [e.target.name]: data
        })
    }

    show() {
        console.log(`好きな果物: ${this.state.fruite}`)
    }

    render() {
        return( 
            <form>
                <label htmlFor="fruite">好きな果物:</label><br/>
                <select id="fruite" name="fruite" value={this.state.fruite} size="5" multiple={true} onChange={this.handleChange}>
                  <option value="apple">りんご</option>
                  <option value="orange">オレンジ</option>
                  <option value="melon">メロン</option>
                  <option value="grape">ぶどう</option>
                  <option value="strawberry">いちご</option>
                </select>
                <button type="button" onClick={this.show}>送信</button>
            </form>
        )
    }
}