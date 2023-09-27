import React, { useState } from 'react';
import Display from './Display';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  return (
    <div className="calculator">
      <div className="calculator-heading">
        <h1>Welcome to Math Magicians</h1>
      </div>
      <Display className="input-display" value={calculatorData.next || calculatorData.total || '0'} />
      <div className="calculator-buttons">
        <div className="calculator-row">
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('AC')}>AC</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('%')}>%</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('÷')}>÷</button>
        </div>
        <div className="calculator-row">
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('7')}>7</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('8')}>8</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('9')}>9</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('x')}>x</button>
        </div>
        <div className="calculator-row">
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('4')}>4</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('5')}>5</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('6')}>6</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="calculator-row">
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('1')}>1</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('2')}>2</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('3')}>3</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="calculator-row">
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('0')}>0</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('.')}>.</button>
          <button type="button" className="calculator-button" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
