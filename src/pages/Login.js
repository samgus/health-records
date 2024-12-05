import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import Logo from '../images/cube-01.svg';
import GoogleIcon from '../images/google-icon.svg';
import { auth } from '../firebase'; // Ensure Firebase is correctly set up
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Login successful with Google');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={Logo} alt="Logo" className="login-logo" />
        <h2>Welcome Back!</h2>
        <p>Let's get back to it</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@site.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
              />
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

        <button className="google-login-btn" onClick={handleGoogleLogin}>
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
