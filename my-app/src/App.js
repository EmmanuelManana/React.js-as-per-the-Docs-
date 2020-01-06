import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>hello world</h1> 
      </body>
    </div>
);

// 7, conditional rendering

  const UserGreeting = (props) =>{
    return <h1> Welcome Back Emmanuel!!</h1>;
  }

  const GuestGreeting = (props) =>{
    return <h1> PLease Sign Up</h1>;
  }

  // pass a boolean
  function Greeting(props){

    const isLoggedIn = props.isLoggedIn;
    if (!isLoggedIn){
      return <UserGreeting />
    }else{
      return <GuestGreeting />
    }
  }

  //statefull component 
  /* t will render either <LoginButton /> or <LogoutButton /> 
  depending on its current state. 
  It will also render a <Greeting /> from the previous example:*/

  class LoginControl extends React.Component{

    constructor(props){
      super(props);

      this.state = {isLoggedIn : true};

      //handle states "onClick"

      render(){
        //fetch the current state
        const isLoggedIn = this.state.isLoggedIn;
        //let button
        let button;
        
        //conditions, pick button
        if (isLoggedIn){
          
        }else{

        }
      }

      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }


export default Greeting;

