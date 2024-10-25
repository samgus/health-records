// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS for styling
import Logo from '../images/cube-01.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">DocVault</span>
      </div>
      <div className="navbar-right">
        <div className="profile-info">
          <div className="profile-icon">
            OB
          </div>
          <span className="profile-name">Olivia Benson</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
