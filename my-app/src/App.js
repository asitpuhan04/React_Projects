import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './Counter/counter';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from './Error/ErrorBoundary';
import CommonError from './Error/CommonError';
import RegularComp from './Component/RegularComp.js';
import PureComp from './Component/PureComp.js';
import MemoComp from './Component/MemoComp';

// function FunctionName(){
//   return "Please return";
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalCart: 0
    }
    localStorage.setItem("TotalCartValue", 0)
  }

  calculateSum = () => {
    try {
      //this.setState({ totalCart: localStorage.getItem("TotalCartValue") });
      localStorage.getItem("TotalCartValue");
      return 0;
    }
    catch (ex) {
      console.log(ex);
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        totalCart:10
            });
    },2000);
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    return (
      <React.Fragment>
        <RegularComp cartValue={this.state.totalCart}/>
        <PureComp cartValue={this.state.totalCart}/>
        <MemoComp cartValue={this.state.totalCart}/>
        <h1>Your Cart Contains {this.calculateSum()}</h1>
        <Counter />
        <Counter />
        <ErrorBoundary><CommonError Sub="React" /></ErrorBoundary>
      </React.Fragment>
    );
  }
  //export {App,FunctionName}

  //  function WelcomeReact(){
  //   return <h1>Welcome to learn React by AP !!!!!</h1>
  // }
}
export default App;
// export default WelcomeReact;
// function AnotherWelcome(){
// return <h1>We are happy to welcome you again and again</h1>
// }
// function Greeting(props){
// return <h1>With a Warm greeting to you {props.name} to the {props.value}</h1>
// }
// export {App,FunctionName,WelcomeReact,AnotherWelcome,Greeting}