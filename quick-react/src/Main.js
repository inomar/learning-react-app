import React, { Component } from 'react';
import MyTop from './MyTop';
import MyHello from './MyHello';
import Article from './Article';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';


export default class Main extends Component {

    
    render() {
        const current = {color: 'Red'};
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">トップ</Link></li>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/article/makoto">記事名: makoto</Link></li>
                        <li><Link to="/article/taro">記事名: 太郎</Link></li>
                        <li><NavLink exact to="/" activeStyle={current}>トップ</NavLink></li>
                        <li><NavLink to="/hello" activeStyle={current}>はろー</NavLink></li>
                    </ul>
                <hr />
                  <Switch>
                    <Route exact path="/" component={MyTop} />
                    <Route path="/hello"  component={MyHello} />
                    <Route path="/article/:name" component={Article} />
                    <Route component={MyTop} />
                  </Switch>
                </div>
            </Router>
        )
    }
}