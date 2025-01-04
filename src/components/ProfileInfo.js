import React from 'react';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './ProfileInfo.css'; // Import the CSS file for styling

const ProfileInfo = () => {
  const [users, setUsers] = useState([]);


    useEffect(() => {
      const fetchPatients = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          const usersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(usersData);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchPatients();
    }, []);

    

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Doctor Information</h2>
      </div>
      <table className="updates-table">
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{"Name"}</td>
              <td>{user.name}</td>
            </tr>
          ))}
          {users.map((user, index) => (
            <tr key={index}>
              <td>{"Email"}</td>
              <td>{user.email}</td>
            </tr>
          ))}
          {/* {doctorInformation.map((column, index) => (
            <tr key={index}>
              <td>{column.name}</td>
              <td>{column.date}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <br/>
      <div className="table-header">
        <h2>Insurance Accepted</h2>
        {/* <a href="/health-records" className="view-all-link">View All</a> */}
      </div>
      <table className="updates-table">
        <tbody>
          {/* {insuranceAccepted.map((column, index) => (
            <tr key={index}>
              <td>{column.name}</td>
              <td>{column.date}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
