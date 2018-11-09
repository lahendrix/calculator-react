import React, { Component } from 'react';
import './CalculatorComponent.css';

class CalculatorComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {displayValue: ''};
  }

  handleButtonClick = (value) => {
    if (value === 'clear') {
      this.setState({displayValue: ''});
    } else {
      this.setState({displayValue: this.state.displayValue += value});
    }
  }

  render() {
    return (
      <div className="row calculator">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-12 calculator-display">{this.state.displayValue}</div>
          </div>
          <div className="row">
            <div className="col-sm-9 calculator-button" onClick={() =>this.handleButtonClick('clear')}>Clear</div>
            <div className="col-sm-3 calculator-button alternate">/</div>
          </div>
          <div className="row">
            <div className="col-sm-3 calculator-button" onClick={() => {this.handleButtonClick('7')}}>7</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('8')}>8</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('9')}>9</div>
            <div className="col-sm-3 calculator-button alternate">-</div>
          </div>
          <div className="row">
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('4')}>4</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('5')}>5</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('6')}>6</div>
            <div className="col-sm-3 calculator-button alternate">+</div>
          </div>
          <div className="row">
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('1')}>1</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('2')}>2</div>
            <div className="col-sm-3 calculator-button" onClick={() =>this.handleButtonClick('3')}>3</div>
            <div className="col-sm-3 calculator-button alternate">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorComponent;
