// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import MedicalRecord from './components/MedicalRecord';
import SplashPage from './pages/SplashPage';
import HealthRecords from './pages/HealthRecords';

const App = () => {
  return (
    <div>
    <div>
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/health-records" element={<HealthRecords/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/medical-record" element={<MedicalRecord />} />
    </Routes>
    </div>
    {/* <Footer/> */}
  </div>
  );
};

export default App;
