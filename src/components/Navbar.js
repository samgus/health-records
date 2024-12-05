import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import Logo from '../images/cube-01.svg';
import { auth } from '../firebase'; // Import Firebase auth
import { onAuthStateChanged } from 'firebase/auth'; // Import Firebase listener for auth state

const Navbar = () => {
  const [userName, setUserName] = useState('Guest'); // Default name
  const [userInitials, setUserInitials] = useState('G'); // Default initials

  useEffect(() => {
    // Listen for changes in the authenticated user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user has a display name, use it; otherwise, fallback to their email
        const name = user.displayName || user.email || 'Guest';
        setUserName(name);

        // Extract initials from the name (e.g., "Olivia Benson" -> "OB")
        const initials = name
          .split(' ')
          .map((part) => part[0])
          .join('')
          .toUpperCase();
        setUserInitials(initials);
      } else {
        // If no user is signed in, use default
        setUserName('Guest');
        setUserInitials('G');
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">DocVault</span>
      </div>
      <div className="navbar-right">
        <div className="profile-info">
          <div className="profile-icon">{userInitials}</div>
          <span className="profile-name">{userName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
