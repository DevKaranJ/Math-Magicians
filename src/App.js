import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Calculator />
      <div className="Quote">
        <Quote />
      </div>
    </div>
  );
}

export default App;
