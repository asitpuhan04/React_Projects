import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter from './Counter/counter';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from './Error/ErrorBoundary';
import CommonError from './Error/CommonError';

// function FunctionName(){
//   return "Please return";
// }

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: 0,
      cosmetic: 0,
      utensils: 0
    }
  }

  onProdInc = () => {
    this.setState({ product: this.state.product + 1 });
  }
  onCosInc=() =>{
    this.setState({ cosmetic: this.state.cosmetic + 1 });
  }
  onUtenInc = () => {
    this.setState({ utensils: this.state.utensils + 1 });
  }
  onProdDec = () => {
    this.setState({ product: this.state.product - 1 });
  }
  onCosDec=() =>{
    this.setState({ cosmetic: this.state.cosmetic - 1 });
  }
  onUtenDec = () => {
    this.setState({ utensils: this.state.utensils - 1 });
  }
  calculateSum = () => {
    try {
      return this.state.product + this.state.cosmetic + this.state.utensils;
    }
    catch (ex) {
      console.log(ex);
    }

  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    const { product, cosmetic, utensils } = this.state
    return (
      <React.Fragment>
        <h1>Your Cart Contains {this.calculateSum()}</h1>
        <ErrorBoundary>
          <span>Product 1</span><Counter counterVal={product} 
          onProdInc={this.onProdInc} onProdDec={this.onProdDec} />
        </ErrorBoundary>
        <ErrorBoundary>
          <span>Cosmetic 1</span><Counter counterVal={cosmetic} 
          onProdInc={this.onCosInc} onProdDec={this.onCosDec} />
        </ErrorBoundary>
        <ErrorBoundary>
          <span>Utensil 1</span><Counter counterVal={utensils} 
          onProdInc={this.onUtenInc} onProdDec={this.onUtenDec} />
        </ErrorBoundary>
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
// //export default WelcomeReact;

// function AnotherWelcome(){
//   return <h1>We are happy to welcome you again and again</h1>
// }

// function Greeting(props){
// return <h1>With a Warm greeting to you {props.name} to the {props.value}</h1>
// }

//export {App,FunctionName,WelcomeReact,AnotherWelcome,Greeting}