// src/components/MainContent.js

import React from 'react';
import './MainContent.css'; // Import the separate CSS file for styling

const MainContent = ({ children }) => {
  return (
    <div className="main-content">
      {children}
    </div>
  );
};

export default MainContent;
