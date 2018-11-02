import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Sample from './Sample';
import MyHello from './MyHello';
import Book from './Book';
import Event from './Event';
import * as serviceWorker from './serviceWorker';

const profile = {
    name: 'makoto',
    age: 27,
    isFat: true,
    cats: ['つるべ','マチルダ','はっさく'],
    book: { name: 'アリとキリギリス', author: '石井'}
}
const book = {
    isbn: 'WGS-JST-001',
    title: '速習webpack',
    price: 454,
    published: 'WINGSプロジェクト'
}
//ReactDOM.render(<Book info={book} />, document.getElementById('root'));
ReactDOM.render(<Sample {...profile} />, document.getElementById('root'));
ReactDOM.render(<Event greet="Hello"/>, document.getElementById('event'));
//ReactDOM.render(<MyHello><b>田中</b></MyHello>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
