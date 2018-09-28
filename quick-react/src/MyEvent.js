import React, { Component } from 'react';

export default class MyEvent extends Component {
    constructor(props) {
        super(props)
        this.show = this.show.bind(this, 'さん', 0)
    }
    show(suffix, number, e) {
        console.log(`${number}: ${this.props.greet}、${e.target.value}${suffix}!!`)
    }

    render () {
        return (
            <form>
                <label htmlFor="txtName"> 名前: </label>
                <input id="txtName" type="text" onChange={this.show} />
            </form>
        )
    }
}