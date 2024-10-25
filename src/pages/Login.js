import React from 'react';
import { Link } from 'react-router-dom'; // To link to the signup page
import './Login.css'; // Import the CSS file for styles
import Logo from '../images/cube-01.svg'
import GoogleIcon from '../images/google-icon.svg'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="Logo" className="login-logo" />
        <h2>Welcome Back!</h2>
        <p>Let's get back to it</p>
        <form>
          <div className="input-group">
            <label htmlFor="email">Work Email</label>
            <input type="email" id="email" placeholder="example@site.com" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input type="password" id="password" placeholder="Minimum 8 characters" />
              <button type="button" className="show-password">Show</button>
            </div>
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Log in</button>
        </form>

        <div className="signup-link">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </div>

        <div className="or-divider">
          <span>Or</span>
        </div>

        <button className="google-login-btn">
          <img src={GoogleIcon} alt="Google" />
          Continue with Google
        </button>

        <div className="terms">
          By signing up to create an account I accept Company's <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </div>
      </div>

      <div className="login-illustration">
        <img src={require('../images/login-image.png')} alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;
