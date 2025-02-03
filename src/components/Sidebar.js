import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Sidebar.css';
import UserIcon from '../images/user-01.svg';
import HomeIcon from '../images/home-smile.svg';
import FileIcon from '../images/file-02.svg';
import SettingsIcon from '../images/settings-02.svg';
import LogoutIcon from '../images/log-out-02.svg';

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState(null); // Track logged-in user
  const [currentUserDoc, setCurrentUserDoc] = useState(null); // Store current user's Firestore doc
  const navigate = useNavigate();

  // Fetch the current user's Firestore document
  useEffect(() => {
    const fetchCurrentUserDoc = async (uid) => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userDoc = querySnapshot.docs.find((doc) => doc.data().uid === uid);
        if (userDoc) {
          setCurrentUserDoc({ id: userDoc.id, ...userDoc.data() });
        }
      } catch (error) {
        console.error('Error fetching current user document:', error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setCurrentUser(user);
        fetchCurrentUserDoc(user.uid); // Fetch Firestore document for the logged-in user
      } else {
        setCurrentUser(null);
        setCurrentUserDoc(null);
      }
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  // Handle logout logic
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      navigate('/');
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
          {currentUserDoc ? (
            <Link to={`/profile/${currentUserDoc.uid}`} className="menu-link">
              <img src={UserIcon} alt="Profile" /> Profile
            </Link>
          ) : currentUser ? (
            <span className="menu-link">
              <img src={UserIcon} alt="Profile" /> Loading Profile...
            </span>
          ) : (
            <span className="menu-link">
              <img src={UserIcon} alt="Profile" /> No User Logged In
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
