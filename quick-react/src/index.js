import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyHello from './MyHello';
import MyType, { Member } from './MyType';
import MyAttr from './MyAttr';
import MyBook from './MyBook';
import MyFunction from './MyFunction';
import MyHelloChildren from './MyHelloChildren';
import MyDefault from './MyDefault';
import MyArticle from './MyArticle';
import User from './User';
import MyEvent from './MyEvent';
import MyPool from './MyPool';
import MyState from './MyState';
import MyParent from './MyParent';
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
        <MyType prop1={ new Member() } />
        <MyType prop2="不明" />
        <MyType prop3="string" />
        <MyType prop3={3} />
        <MyType prop3={false} />
        <MyType prop4={[1,2,5]} />
        <MyType prop5={{name: 'makoto', age: 27, sex: '不明'}} />
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

ReactDOM.render(
    <React.Fragment>
        <MyDefault />
        <MyDefault name="名前あり" />
    </React.Fragment>,
    document.getElementById('default')
)

const articles = [
    {
        url: 'http://example.com',
        title: 'sample',
        description: 'サンプルです',
        isNew: true
    },
    {
        url: 'http://example.com',
        title: 'サンプル',
        description: 'サンプルですね',
        isNew: false,
    }
]

ReactDOM.render(
    <dl>
        {articles.map((article) =>
            <MyArticle {...article} />
        )}
    </dl>,
    document.getElementById('article')
)



const users = [
    {
        name: '西郷',
        age: 33,
        image: 'http://www.meijiishin150countdown.com/meiji/wp-content/uploads/2018/08/833cb2ee08cd41cbb5511c98011aa593.jpg',
        sex: '男性',
        isNew: true,
    },
    {
        name: '坂本',
        age: 34,
        image: 'https://yanajun.com/wp-content/uploads/takedatetsuya03.jpg',
        sex: '男性',
        isNew: false,
    },
    {
        name: '木戸',
        age: 30,
        image: 'https://img.tokyo-sports.co.jp/wp-content/uploads/2013/06/4eed894abf9596b4fc083249bfb669f2-225x300.jpg',
        sex: '不明',
        isNew: true,
    },
    {
        name: '大久保',
        age: 33,
        image: 'http://image.news.livedoor.com/newsimage/stf/e/b/eb6f056805bbf4e510bb36cdc78a6b3b-cm.jpg?v=20170801074048',
        sex: '女性',
        isNew: false,
    }
]

ReactDOM.render(
    <div>
        {users.map ((user, index) => <User {...user} key={index} />)}
        
    </div>,
    document.getElementById('user')
)

ReactDOM.render(
    <React.Fragment>
        <MyEvent greet="Hello" />
    </React.Fragment>,
    document.getElementById('event')
)

ReactDOM.render(
    <React.Fragment>
        <MyPool />
    </React.Fragment>,
    document.getElementById('eventBtn')
)

ReactDOM.render(
    <React.Fragment>
        <MyState />
    </React.Fragment>,
    document.getElementById('state')
)

ReactDOM.render(
    <React.Fragment>
        <MyParent />
    </React.Fragment>,
    document.getElementById('parent')
)
registerServiceWorker();
