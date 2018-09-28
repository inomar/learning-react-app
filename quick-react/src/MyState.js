import React, { Component } from 'react';

export default class MyState extends Component {
    constructor(props) {
        super(props)
        // 1. stateの初期値を設定
        this.state = {
            current: new Date()
        };
        // 3. 1000ミリ秒おきにStateを更新
        setInterval(() => {
            this.setState({
                current: new Date()
            });
        }, 1000);
    }

    render() {
        return(
            /*2. currentの値をページに反映*/
            <div>現在時刻は、{this.state.current.toLocaleString()}です。</div>
        )
    }
}