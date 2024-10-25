import React from 'react';
import { Link } from 'react-router-dom'; // To link to the signup page
import './Signup.css'; // Import the CSS file for styles
import Logo from '../images/cube-01.svg'
import GoogleIcon from '../images/google-icon.svg'

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={Logo} alt="Logo" className="signup-logo" />

        <h2>Welcome Back!</h2>
        <p>Let's get back to it</p>

        <form>
          <div className="input-group">
            <label htmlFor="email">Full Name</label>
            <input type="name" id="name" placeholder="Jane Doe" />
          </div>

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
          </div>

          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <div className="password-input">
              <input type="password" id="password" placeholder="Minimum 8 characters" />
              <button type="button" className="show-password">Show</button>
            </div>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="login-link">
          Already have an account? <Link to="/login">Log In</Link>
        </div>

        <div className="or-divider">
          <span>Or</span>
        </div>

        <button className="google-signup-btn">
          <img src={GoogleIcon} alt="Google" />
          Continue with Google
        </button>

        <div className="terms">
          By signing up to create an account I accept Company's <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </div>
      </div>

      <div className="signup-illustration">
        <img src={require('../images/signup-image.png')} alt="Illustration" />
      </div>
    </div>
  );
};

export default Signup;
