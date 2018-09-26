import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
setInterval(() => {
    ReactDOM.render(
        <div>現在の時刻は{(new Date()).toLocaleString()}です</div>,
        document.getElementById('now')
    )
})
registerServiceWorker();
