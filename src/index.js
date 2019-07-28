//React
import React from 'react';
import ReactDOM from 'react-dom';
//CSS Styles
import './styles/index.css';
import './styles/navbar.css';
import './styles/btn.css';
import './styles/home-page.css';
import './styles/signin.css';
//App
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
