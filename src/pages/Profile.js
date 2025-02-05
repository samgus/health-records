import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDocs, getDoc, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure the path to your Firebase config is correct
import './Profile.css';
import Layout from '../components/Layout';
import ProfileInfo from '../components/ProfileInfo';
import AdditionalCard from '../components/AdditionalCard';

const Profile = () => {
  const params = useParams();
  const userId = params.userId;
  const [user, setUser] = useState(null);

  const usersRef = collection(db, 'users')
  const q = query(usersRef, where("uid", "==", userId))

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) {
        console.error('No userId provided!');
        return;
      }

      try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((userDoc) => {
          setUser({ id: userDoc.id, ...userDoc.data() });
        });

      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return (
      <Layout>
        <div className="user-profile">
          <p>Loading user data...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="profile">
        <div className="profile-header-container">
          <div>
            <h1 className="profile-header">Dr. {user.name || 'User Name'}</h1>
            <p className="profile-subheader">View your account information here!</p>
          </div>
          <Link to={`/edit-profile/${userId}`}>
            <button className="edit-profile-btn">Edit Profile</button>
          </Link>
        </div>
        <ProfileInfo userData={user} />

        {/* <AdditionalCard doctorId={userId} /> */}
      </div>
    </Layout>
  );
};

export default Profile;
