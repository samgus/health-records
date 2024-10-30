import React from 'react';
import { Link } from 'react-router-dom';
import './404page.css';
import NotFoundImage from '../images/404-image.png'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h2>404 Page</h2>
        <p>You've went to an empty page!</p>
        <Link to="/dashboard" className="back-link">
          <span className="back-arrow">←</span> Dashboard
        </Link>
        <div className="image">
          <img src={NotFoundImage} alt="404 Illustration" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
