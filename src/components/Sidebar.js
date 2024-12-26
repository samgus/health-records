import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './sidebar.css'; // Import the sidebar CSS styles
import UserIcon from '../images/user-01.svg';
import HomeIcon from '../images/home-smile.svg';
import FileIcon from '../images/file-02.svg';
import SettingsIcon from '../images/settings-02.svg';
import LogoutIcon from '../images/log-out-02.svg';
import { auth } from '../firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth'; // Import signOut function

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      alert('Logged out successfully');
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error.message);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeMenuItem === 'Profile' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Profile')}
        >
          <Link to="/profile">
            <img src={UserIcon} alt="Profile" /> Profile
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <Link to="/dashboard">
            <img src={HomeIcon} alt="Dashboard" /> Dashboard
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'HealthRecords' ? 'active' : ''}`}
          onClick={() => handleMenuClick('HealthRecords')}
        >
          <NavLink to="/health-records" className={({ isActive }) => (isActive ? 'active' : '')}>
            <img src={FileIcon} alt="Health Records" /> Health Records
          </NavLink>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'Settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Settings')}
        >
          <Link to="/settings">
            <img src={SettingsIcon} alt="Settings" /> Settings
          </Link>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Logout" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
