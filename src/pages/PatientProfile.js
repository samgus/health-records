import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase configuration
import './PatientProfile.css';
import Layout from '../components/Layout';
import PatientProfileCard from '../components/PatientProfileCard';

const PatientProfile = () => {
  const { id } = useParams(); // Get the patient ID from the URL
  const [patient, setPatient] = useState(null);

  // Fetch patient data from Firestore
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patientDoc = await getDoc(doc(db, 'patients', id));
        if (patientDoc.exists()) {
          setPatient(patientDoc.data());
        } else {
          console.error('No such patient!');
        }
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };

    fetchPatient();
  }, [id]);

  // Show a loading message until the data is loaded
  if (!patient) {
    return (
      <Layout>
        <div className="patient-profile">
          <p>Loading patient data...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="patient-profile">
        <div className="patient-profile-header-container">
          <div>
            <h1 className="patient-profile-header">{patient.fullName || 'Patient Name'}</h1>
            <p className="patient-profile-subheader">Manage {patient.fullName || 'the patient'}'s medical records.</p>
          </div>
          <Link to={`/edit-patient-profile/${id}`}>
            <button className="edit-information-btn">Edit Information</button>
          </Link>
        </div>
        <PatientProfileCard />
      </div>
    </Layout>
  );
};

export default PatientProfile;

