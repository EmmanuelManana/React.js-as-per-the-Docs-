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

  function LogoutButton(props){
    return (
    <button onClick={props.onClick}>
      logout
    </button>)
  }

  function LoginButton(props){
    //fire the property onClick
    return (
    <button onClick={props.onClick}>
      login
    </button>)
  }



  class LoginControl extends React.Component{

      constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn : false};
      }

      //handle states "onClick"
      handleLoginClick(){
        this.setState({isLoggedIn : false});
      }

      handleLogoutClick(){
        this.setState({isLoggedIn: true})
      }

      render(){

          //fetch the current state
          const isLoggedIn = this.state.isLoggedIn;
          //let button
          let button;
          
          //conditions, pick button
          if (isLoggedIn){
            button = <LoginButton onClick={this.handleLoginClick}/>
          }else{
            button = <LogoutButton onClick={this.handleLogoutClick}/>
          }
      

          return (

            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
                <div>
                  The user is <b>{ !isLoggedIn ? 'currently':'not' }</b> logged in.
                </div>
            </div>
          )
    }
}

//inline if with Logical && Operator
      /*You may embed any expressions in JSX by 
      wrapping them in curly braces. This includes the
       JavaScript logical && operator. 
      It can be handy for conditionally including an element:*/
const Mailbox = (props) =>{
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>hello world</h1>
      { 
        unreadMessages.length > 0 && 
        <h2>
          you have {unreadMessages.length} unread messages.
        </h2>
      }
        <h1> 
          {unreadMessages}
        </h1>
    </div>
  )
}

/*

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);*/

// 8, List and keys

                    // pass an array of numbers
const NumberList  = (props) =>{
  const numbers = props.numbers;
  const listNumbers = numbers.map((num) => <li
    key={num.toString()}
  >{num}</li>)

  return (
    <ul>{listNumbers}</ul>
  );
}

// 9, forms 
/* controlled components,(functions that handles the form)
 submission and has access to the submitted data*/

//******* Controlled_Components_ */
// handling single input
class NameForm extends React.Component{

  constructor(props){
    super(props);
    //set state
    this.state = {value: ''}
    //bind to handle callbacks
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //update State
  handleChange(event){
    //update to a new value( target update the state object)
    this.setState({value : event.target.value})
  }

  handleSubmit(event){

    //prevent unwated, nonsense
    alert('A name was submitted: '+ this.state.value);
    event.preventDefault();
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type={"text"} value={this.state.value}
          onChange={this.handleChange}/>
        </label>
        <input type={"submit"} value={"submit"}/> 
      </form>
    )
  }
}


//export default Mailbox;
//export default LoginControl;
//export default listItems;
//export default NumberList;
export default NameForm;


