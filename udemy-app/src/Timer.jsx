import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }

        setInterval(()=>{
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    render() {
        return(
            <div>現在の時刻は{this.state.time.toLocaleString()}</div>
        )
    }

}
