import React from 'react';
import logo from './logo.svg';
import './App.css';

//function FunctionName(){
  // return "Please return";
//}

export default function App() {
  return (
    <React.Fragment>
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
          Hello Asit
        </a>
      </header>
    </div>
    </React.Fragment>
  );
}
//export {App,FunctionName}

export function WelcomeReact(){
  return <h1>Welcome to learn React by AP !!!!!</h1>
}
//export default App;
//export default WelcomeReact;