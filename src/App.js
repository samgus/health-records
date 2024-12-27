import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Settings from './pages/Settings';
import SplashPage from './pages/SplashPage';
import HealthRecords from './pages/HealthRecords';
import AddPatient from './pages/AddPatient';
import PatientProfile from './pages/PatientProfile';
import EditPatientProfile from './pages/EditPatientProfile';
import NotFoundPage from './pages/404page';
import { PatientsProvider } from './components/PatientsContext';

const App = () => {
  return (
    <div>
    <PatientsProvider>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/health-records" element={<HealthRecords/>} />
        <Route path="/patient-profile/:patientId" element={<PatientProfile/>} />
        <Route path="/add-patient" element={<AddPatient/>} />
        <Route path="/edit-patient-profile/:patientId" element={<EditPatientProfile/>} />
        <Route path="/settings" element={<Settings />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PatientsProvider>
    </div>
  );
};

export default App;
