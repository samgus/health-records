// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional CSS for styling

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Personal Health Manager</h1>
        <p>Securely store and access your medical records anytime, anywhere.</p>
        <div className="hero-buttons">
          <button style={{color: 'black'}}>
            <Link to="/signup">Get Started</Link>
          </button>
          <button style={{color: 'black'}}>
            <Link to="/login">Log In</Link>
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><i className="icon-shield"></i> Secure Medical Record Storage</li>
          <li><i className="icon-cloud"></i> Access Anytime, Anywhere</li>
          <li><i className="icon-ease"></i> Easy-to-Use Interface</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign Up or Log In</li>
          <li>Add Your Medical Records</li>
          <li>Access Them Anytime, Anywhere</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Are Saying</h2>
        <blockquote>
          <p>"This app has completely transformed the way I manage my family's health records! It has streamlined everything into one easy-to-use platform, allowing me to access important medical information, track appointments, and even set reminders for medications or check-ups. No more digging through paperwork or struggling to remember dates - it’s all right at my fingertips! It has not only saved me time but also given me peace of mind knowing that I can manage our healthcare needs effortlessly and stay on top of everything."</p>
          <footer>— Sarah L.</footer>
        </blockquote>
        <blockquote>
          <p>"I absolutely love how secure and incredibly simple this app is to use! The intuitive design makes navigating through features a breeze, and I never have to worry about the safety of my personal information. With top-notch security measures in place, I feel confident that my data is fully protected. Plus, its straightforward layout ensures that I can accomplish tasks quickly, without any confusion or hassle. It’s the perfect balance of convenience and peace of mind!"</p>
          <footer>— John D.</footer>
        </blockquote>
      </section>

      {/* Footer Section */}
      {/* <footer>
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
