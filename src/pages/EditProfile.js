import React from 'react';
import Layout from '../components/Layout';
import EditProfileCard from '../components/EditProfileCard';
import { Link } from 'react-router-dom';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <Layout>
        <div className='add-patient'>
              <div className='profile-header-container'>
                <div>
                  <h1 className="profile-header">Edit Profile</h1>
                  <p className="profile-subheader">Edit your account info here.</p>
                </div>
                <div className='btn-container'>
                    <Link to={'/profile'}>
                        <button className="cancel-btn">Cancel</button>
                    </Link>
                    <button className="save-changes-btn">Save Changes</button>
                </div>
              </div>           
            <EditProfileCard />
        </div>
    </Layout>
  );
};

export default EditProfile;