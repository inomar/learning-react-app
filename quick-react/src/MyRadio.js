import React, { Component } from 'react';

export default class MyRadio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sex: 'female'
        }

        this.handleChange = this.handleChange.bind(this)
        this.show = this.show.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    show(){
        console.log(`性別: ${this.state.sex}`)
    }

    render() {
        return(
            <form>
                <fieldset>
                    <legend>性別: </legend>
                    <label htmlFor="sex_male">男性</label>
                    <input id="sex_male" name="sex" type="radio" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange} />
                    <label htmlFor="sex_female">女性</label>
                    <input id="sex_female" name="sex" type="radio" value="female" checked={this.state.sex === 'female'} onChange={this.handleChange} />
                    <button type="button" onClick={this.show}>送信</button>
                </fieldset>
                
            </form>
        )
    }
}