import React from 'react';
import Layout from '../components/Layout';
import ProfileInfo from '../components/ProfileInfo';
import './Profile.css';

const Profile = () => {
    return (
      <Layout>
            <div className='profile'>
              <div className='profile-header-container'>
                <div>
                  <h1 className="profile-header">Profile</h1>
                  <p className="profile-subheader">View your account information here!</p>
                </div>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
                <ProfileInfo />
            </div>
      </Layout>
    );
  };
  
  export default Profile;