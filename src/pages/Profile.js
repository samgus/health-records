import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to={'/edit-profile'}>
                  <button className="edit-profile-btn">Edit Profile</button>
                </Link>
              </div>
                <ProfileInfo />
            </div>
      </Layout>
    );
  };
  
  export default Profile;