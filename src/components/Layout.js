// src/components/Layout.js

import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Layout.css'; // Import the layout CSS

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
