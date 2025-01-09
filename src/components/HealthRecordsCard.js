import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthRecordsCard.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { updateLastAccessed } from '../utils/firebaseUtils'; // Import the function

const HealthRecordsCard = () => {
  const [patients, setPatients] = useState([]);

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

  const handlePatientClick = async (patientId) => {
    await updateLastAccessed(patientId); // Update the lastAccessed field
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date.seconds * 1000).toLocaleDateString('en-US', options);
  };

  return (
    <div className="updates-table-container">
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
              <td>
                <Link to={`/patient-profile/${patient.id}`} onClick={() => handlePatientClick(patient.id)} className="name-cell">
                  {patient.fullName || 'N/A'}
                </Link>
              </td>
              <td>{patient.dateOfBirth || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/add-patient'}>
        <button className="new-patient-btn">
          {/* <img src={Plus} alt="Plus" /> */}
          New Patient
        </button>
      </Link>
    </div>
  );
};

export default HealthRecordsCard;
