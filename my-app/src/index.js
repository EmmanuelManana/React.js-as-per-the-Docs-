import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greeting from './App';
import LoginControl from './App';
import Mailbox from './App';
import NumberList from './App';
import NameForm from './App';



const messages = ['React', 'Re: React', 'Re:Re: React'];
//ReactDOM.render(<Mailbox unreadMessages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((numbers) => <li>{numbers * 2}</li>);

//ReactDOM.render(<ul>{listItems}</ul>
 //   , document.getElementById('root'));

 const  nums = [1, 3, 6, 10];

 /*ReactDOM.render(
     <NumberList numbers={nums}/>
     , document.getElementById('root')
 )*/

 ReactDOM.render(
    <NameForm />
    , document.getElementById('root')
)
