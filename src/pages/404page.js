import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase auth
import './404page.css';
import NotFoundImage from '../images/404-image.png';

const NotFoundPage = () => {
  const [redirectPath, setRedirectPath] = useState('/'); // Default to splash page

  useEffect(() => {
    // Check the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setRedirectPath('/dashboard'); // Redirect to dashboard if logged in
      } else {
        setRedirectPath('/'); // Redirect to splash if not logged in
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h2>404 Page</h2>
        <p>You've went to an empty page!</p>
        <Link to={redirectPath} className="back-link">
          <span className="back-arrow">←</span> Back
        </Link>
        <div className="image">
          <img src={NotFoundImage} alt="404 Illustration" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
