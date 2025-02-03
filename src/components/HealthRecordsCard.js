import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './HealthRecordsCard.css';
import { collection, getDocs, query, where  } from 'firebase/firestore';
import { db } from '../firebase';
import { updateLastAccessed } from '../utils/firebaseUtils'; // Import the function
import { AuthContext } from '../contexts/AuthContext';

const HealthRecordsCard = () => {
  const [patients, setPatients] = useState([]);
  const doctor = useContext(AuthContext)

  useEffect(() => {
    const fetchPatients = async () => {
      if (!doctor) return [];
      const patientsRef = collection(db, 'patients')
      const q = query(patientsRef, where("doctorId", "==", doctor.uid))

      try {
        const querySnapshot = await getDocs(q)
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
  }, [doctor]);

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
      <div className="table-header">
        <h2>Patients</h2>
        <a href="/health-records" className="view-all-link">View All</a>
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
              <td>
                <Link to={`/patient-profile/${patient.id}`} onClick={() => handlePatientClick(patient.id)} className="name-cell">
                  {patient.fullName || 'N/A'}
                </Link>
              </td>
              <td>{patient.dateOfBirth}</td>
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
