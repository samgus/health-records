import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sidebar.css'; // Import the sidebar CSS styles
import UserIcon from '../images/user-01.svg'
import HomeIcon from '../images/home-smile.svg'
import FileIcon from '../images/file-02.svg'
import SettingsIcon from '../images/settings-02.svg'
import LogoutIcon from '../images/log-out-02.svg'

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Actual logout logic goes here
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
      <li
          className={`menu-item ${activeMenuItem === 'Profile' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Profile')}
        >
          <Link to="/profile">
            <img src={UserIcon} alt="Google" /> Profile
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Dashboard')}
        >
          <Link to="/dashboard">
          <img src={HomeIcon} alt="Google" /> Dashboard
          </Link>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'HealthRecords' ? 'active' : ''}`}
          onClick={() => handleMenuClick('HealthRecords')}
        >
          <NavLink to="/health-records" className={({ isActive }) => (isActive ? 'active' : '')}>
          <img src={FileIcon} alt="Google" /> Health Records
          </NavLink>
        </li>
        <li
          className={`menu-item ${activeMenuItem === 'Settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Settings')}
        >
          <Link to="/settings">
          <img src={SettingsIcon} alt="Google" /> Settings
          </Link>
        </li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Google" />Logout
      </button>
    </aside>
  );
};

export default Sidebar;
