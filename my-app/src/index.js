import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greeting from './App';
import LoginControl from './App';
import Mailbox from './App';


const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(<Mailbox  unreadMessages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
