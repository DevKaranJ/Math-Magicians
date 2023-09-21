import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

function Display({ value }) {
  return <div className="calculator-display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
