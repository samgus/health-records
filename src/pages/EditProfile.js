import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import './EditProfile.css';
import Layout from '../components/Layout';
import EditProfileCard from '../components/EditProfileCard';

const EditProfile = () => {
  const params = useParams(); // Get the user ID from the URL
  const userId = params.userId;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch user data from Firestore
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          // Get the user data and include the document ID as user.id
          setUser({ id: userDoc.id, ...userDoc.data() });
        } else {
          console.error('No such user!');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  // Show a loading message until the data is loaded
  if (!user) {
    return (
      <Layout>
        <div className="edit-user-profile">
          <p>Loading user data...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='add-patient'>
        <div className='profile-header-container'>
          <div>
            <h1 className="profile-header">Edit Profile</h1>
            <p className="profile-subheader">Edit your account info here.</p>
          </div>
          <div className='btn-container'>
            <Link to={`/profile/${user.id}`}>
              <button className="cancel-btn">Back</button>
            </Link>
          </div>
        </div>
        <EditProfileCard userId={userId} />
      </div>
    </Layout>
  );
};

export default EditProfile;
