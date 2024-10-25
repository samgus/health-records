import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './SplashPage.css'; // CSS file for the styles
import Logo from '../images/cube-01.svg'
import SplashImage from '../images/splash-image.png'

const SplashPage = () => {
  return (
    <div className="splash-container">
      <div className="header">
        <img src={Logo} alt="DocVault Logo" className="logo" />
        <h1>DocVault</h1>
        <p>Manage Your Health Records Securely</p>
      </div>

      <div className="button-container">
        <Link to="/login">
            <button className="login-button">Login</button>
        </Link>
        <Link to="/signup">
            <button className="get-started-button">Get Started</button>
        </Link>
      </div>

      <div className="illustration-container">
        <img src={SplashImage} alt="Illustration" className="illustration" />
      </div>
    </div>
  );
};

export default SplashPage;
