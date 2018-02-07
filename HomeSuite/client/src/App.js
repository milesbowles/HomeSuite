import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import "./component/calculator/calculatorStyle";

import autoScalingText from "./component/calculator/autoScalingText";



const welcome = "Welcome to React"; 

class App extends Component {
  render() {
    return (
      <calculatorDisplay />
    );
  }
}


class Welcome extends Component {
  render() {
    return (
      <h1 className="App-title">{welcome}</h1>
    )
  }
}


export default App;
