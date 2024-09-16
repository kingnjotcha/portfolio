import React from 'react';
import './spinner.css'; // Import your custom spinner styles

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
