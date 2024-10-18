// src/App.js
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import MedicalRecord from './components/MedicalRecord';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <Navbar/>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/medical-record" element={<MedicalRecord />} />
    </Routes>
    </div>
    <Footer/>
  </div>
  );
};

export default App;
