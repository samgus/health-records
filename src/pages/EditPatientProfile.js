import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './EditPatientProfile.css';
import EditPatientCard from '../components/EditPatientCard';


const EditPatientProfile = () => {
  return (
    <Layout>
        <div className='edit-patient'>
              <div className='edit-patient-header-container'>
                <div>
                  <h1 className="edit-patient-header">Edit Patient Information</h1>
                  <p className="edit-patient-subheader">Update your patient's information</p>
                </div>
                <div className='btn-container'>
                  <Link to={'/patient-profile'}>
                    <button className="cancel-btn">Cancel</button>
                  </Link>
                    <button className="save-changes-btn">Save Changes</button>
                </div>
              </div>           
            <EditPatientCard />
        </div>
    </Layout>
  );
};

export default EditPatientProfile;