import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {App,FunctionName} from './App';
//import {App,WelcomeReact,AnotherWelcome,Greeting} from './App';
//import Counter from './Counter/counter' ;
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
    {/*
    <WelcomeReact />
    <AnotherWelcome />
    <Greeting name="USAA" value="2nd session of React" />*/}
    {/* <Counter/> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
