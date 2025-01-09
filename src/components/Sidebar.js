import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase'; // Import Firebase Firestore and Auth
import { signOut } from 'firebase/auth'; // Firebase signOut function
import './sidebar.css'; // Sidebar styling
import UserIcon from '../images/user-01.svg';
import HomeIcon from '../images/home-smile.svg';
import FileIcon from '../images/file-02.svg';
import SettingsIcon from '../images/settings-02.svg';
import LogoutIcon from '../images/log-out-02.svg';

const Sidebar = () => {
  const [users, setUsers] = useState([]); // State for fetched users
  const navigate = useNavigate(); // Hook for navigation

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Map Firestore document ID as `id`
          ...doc.data(),
        }));
        setUsers(usersData); // Save fetched users to state
      } catch (error) {
        console.error('Error fetching users:', error); // Log any errors
      }
    };

    fetchUsers();
  }, []);

  // Handle logout logic
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      alert('Logged out successfully');
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      console.error('Error logging out:', error.message);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {/* Profile Menu */}
        <li className="menu-item">
          {users.length > 0 ? (
            users.map((user) => (
              <Link to={`/profile/${user.id}`} className="menu-link">
                <img src={UserIcon} alt="Profile" /> Profile
              </Link>
            ))
          ) : (
            <span className="menu-link">
              <img src={UserIcon} alt="Profile" /> No Users Found
            </span>
          )}
        </li>

        {/* Dashboard Menu */}
        <li className="menu-item">
          <Link to="/dashboard" className="menu-link">
            <img src={HomeIcon} alt="Dashboard" /> Dashboard
          </Link>
        </li>

        {/* Health Records Menu */}
        <li className="menu-item">
          <Link to="/health-records" className="menu-link">
            <img src={FileIcon} alt="Health Records" /> Health Records
          </Link>
        </li>

        {/* Settings Menu */}
        <li className="menu-item">
          <Link to="/settings" className="menu-link">
            <img src={SettingsIcon} alt="Settings" /> Settings
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <button className="logout-btn" onClick={handleLogout}>
        <img src={LogoutIcon} alt="Logout" /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
