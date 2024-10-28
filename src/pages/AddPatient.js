import React from 'react';
import Layout from '../components/Layout';
import './AddPatient.css';
import AddPatientCard from '../components/AddPatientCard';

const AddPatient = () => {
  return (
    <Layout>
        <div className='add-patient'>
              <div className='profile-header-container'>
                <div>
                  <h1 className="profile-header">Add a New Record</h1>
                  <p className="profile-subheader">Add a new patients information to your list</p>
                </div>
                <div className='btn-container'>
                    <button className="cancel-btn">Cancel</button>
                    <button className="save -changes-btn">Save Changes</button>
                </div>
                </div>           
            <AddPatientCard />
        </div>
    </Layout>
  );
};

export default AddPatient;
