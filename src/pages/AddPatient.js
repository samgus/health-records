import React from 'react';
import Layout from '../components/Layout';
import './AddPatient.css';
import AdditionalCard from '../components/AdditionalCard';


const AddPatient = () => {
  return (
    <Layout>
        <div className='add-patient'>
              <div className='profile-header-container'>
                <div>
                  <h1 className="profile-header">Add a New Patient</h1>
                  <p className="profile-subheader">Add a new patients information to your list</p>
                </div>
                <div className='btn-container'>
                </div>
              </div>           
            <AdditionalCard />
        </div>
    </Layout>
  );
};

export default AddPatient;
