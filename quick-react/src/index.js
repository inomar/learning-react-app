import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyHello from './MyHello';
import MyType from './MyType';
import MyAttr from './MyAttr';
import MyBook from './MyBook';
import MyFunction from './MyFunction';
import MyHelloChildren from './MyHelloChildren';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
setInterval(() => {
    ReactDOM.render(
        <div>現在の時刻は{(new Date()).toLocaleString()}です</div>,
        document.getElementById('now')
    )
})

const color = { color: 'blue', backgroundColor: 'gray'}
const name = 'inomar'
ReactDOM.render(
    <p style={color}>私の名前は{name}です</p>,
    document.getElementById('color')

)

const attrs = {
    src: 'https://www.tv-asahi.co.jp/doraemon/cast/img/doraemon.jpg',
    alt: '',
    title: 'どどどどどらえもん'
}
ReactDOM.render(
    <img {...attrs} />,
    document.getElementById('image')
)

const text = `
  こんばんは</br>
  ぼくドラえもんです。
`
ReactDOM.render(
    <p dangerouslySetInnnerHTML={{__html: text }}></p>,
    document.getElementById('text')
)

const firstName = 'makoto'
const tag = React.createElement(
    'h1',
    {className: 'title', style: {color: 'red'}},
    `こんにちは${firstName}さん`
)

ReactDOM.render(
    <MyHello name="makoto" />,
    document.getElementById('hello')
)

ReactDOM.render(
    <div>
        <MyType value="まこと" />
        <MyType value={'なまえ'} />
        <MyType value={ 108 } />
        <MyType value={ true } />
        <MyType value={ ['起', '承', '転', '結'] } />
        <MyType value={ {name: 'makoaot', age: '27'} } />
        <MyType value={ () => { console.log('Hoge')} } />
    </div>,
    document.getElementById('typeValue')
)
const attr = {name: 'makoto', age: 27, sex: '男'}
ReactDOM.render(
    <MyAttr {...attr} />,
    document.getElementById('myAttr')
)

ReactDOM.render(
    <MyHelloChildren>
      <b>山田</b>
      <p>ダニエル</p>
    </MyHelloChildren>,
    document.getElementById('myHelloChildren')
)

const book = {
    isbn: 'WGS-JST-001',
    title: '速習Webpack',
    price: 454,
    published: 'WINGSプロジェクト'
}
ReactDOM.render(
    <MyBook info={book} />,
    document.getElementById('book')
)
ReactDOM.render(
    <MyFunction name="function componentからの呼び出し" />,
    document.getElementById('func') 
)
registerServiceWorker();
