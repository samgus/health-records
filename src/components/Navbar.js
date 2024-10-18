// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
      <Link className="nav-link" to="/medical-record">Records</Link>
      <Link className="nav-link" to="/login">Login</Link>
      <Link className="nav-link" to="/signup">Signup</Link>
    </nav>
  );
};

export default Navbar;

