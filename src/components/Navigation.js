import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
