import React, { Component } from 'react';
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle from './MyArticle';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">トップ</Link></li>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/article">公開記事</Link></li>
                    </ul>
                <hr />
                  <Switch>
                    <Route exact path="/" component={MyTop} />
                    <Route path="/hello"  component={MyHello} />
                    <Route path="/article" component={MyArticle} />
                  </Switch>
                </div>
            </Router>
        )
    }
}