import React from 'react';
import Display from './Display';
import '../styles/Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <Display className="input-display" />
      <div className="calculator-buttons">
        <div className="calculator-row">
          <button type="submit" className="calculator-button">AC</button>
          <button type="submit" className="calculator-button">+/-</button>
          <button type="submit" className="calculator-button">%</button>
          <button type="submit" className="calculator-button">÷</button>
        </div>
        <div className="calculator-row">
          <button type="submit" className="calculator-button">7</button>
          <button type="submit" className="calculator-button">8</button>
          <button type="submit" className="calculator-button">9</button>
          <button type="submit" className="calculator-button">x</button>
        </div>
        <div className="calculator-row">
          <button type="submit" className="calculator-button">4</button>
          <button type="submit" className="calculator-button">5</button>
          <button type="submit" className="calculator-button">6</button>
          <button type="submit" className="calculator-button">-</button>
        </div>
        <div className="calculator-row">
          <button type="submit" className="calculator-button">1</button>
          <button type="submit" className="calculator-button">2</button>
          <button type="submit" className="calculator-button">3</button>
          <button type="submit" className="calculator-button">+</button>
        </div>
        <div className="calculator-row">
          <button type="submit" className="calculator-button">0</button>
          <button type="submit" className="calculator-button">.</button>
          <button type="submit" className="calculator-button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
