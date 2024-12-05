import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthRecordsCard.css'; // Import the CSS file for styling
import Plus from '../images/plus.svg';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase configuration

const HealthRecordsCard = () => {
  const [patients, setPatients] = useState([]);

  // Fetch patients from Firestore on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'patients'));
        const patientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patients</h2>
      </div>
      <table className="updates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <Link to={`/patient-profile/${patient.id}`}>
                <td>{patient.fullName || 'N/A'}</td>
              </Link>
              <td>{patient.dateOfBirth || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/add-patient'}>
        <button className="add-new-record-btn">
          <img src={Plus} alt="Plus" />
          Add Patient
        </button>
      </Link>
    </div>
  );
};

export default HealthRecordsCard;
