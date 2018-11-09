import React, { Component } from 'react';
//Include bootstrap's css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CalculatorComponent from "./components/calculator/CalculatorComponent";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CalculatorComponent />
      </div>
    );
  }
}

export default App;
