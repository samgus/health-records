import React from 'react';
import './PatientProfile.css';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import PatientProfileCard from '../components/PatientProfileCard';

const PatientProfile = () => {
    return (
    <Layout>
        <div className="patient-profile">
            <div className='patient-profile-header-container'>
                <div>
                    <h1 className='patient-profile-header'>Emma Stone</h1>
                    <p className="patient-profile-subheader">Manage Emma's medical records.</p>    
                </div>
                <Link to={'/edit-patient-profile'}>
                    <button className="edit-information-btn">Edit Information</button>
                </Link>
            </div>
            <PatientProfileCard/>
        </div>
    </Layout>
    );
};

export default PatientProfile;
