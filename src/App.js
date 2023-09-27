import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Logo />
          <Navigation />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
