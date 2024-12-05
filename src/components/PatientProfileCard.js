import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure Firestore instance is configured correctly
import './PatientProfileCard.css';

const PatientProfileCard = ({ patientId }) => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!patientId) {
      setError('Invalid patient ID.');
      setLoading(false);
      return;
    }

    const fetchPatientData = async () => {
      try {
        // Reference to the patient's document in Firestore
        const docRef = doc(db, 'patients', patientId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Update state with the fetched patient data
          setPatientData(docSnap.data());
        } else {
          setError('Patient data not found.');
        }
      } catch (err) {
        console.error('Error fetching patient data:', err);
        setError('Error loading patient data.');
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, [patientId]);

  if (loading) return <div>Loading patient data...</div>;
  if (error) return <div>{error}</div>;

  // Safely destructure fields from patientData
  const {
    fullName = 'N/A',
    dateOfBirth = 'N/A',
    gender = 'N/A',
    address = 'N/A',
    phoneNumber = 'N/A',
    email = 'N/A',
    maritalStatus = 'N/A',
    emergencyContact = 'N/A',
    occupation = 'N/A',
    insurance = {},
    medicalHistory = {},
    vitals = {},
    doctorNotes = [],
  } = patientData || {};

  return (
    <div className="patient-profile-card-container">
      <div className="section doctor-notes">
        <h2>Doctor's Notes</h2>
        <ul>
          {doctorNotes.length > 0 ? (
            doctorNotes.map((note, index) => <li key={index}>{note}</li>)
          ) : (
            <li>No doctor notes available.</li>
          )}
        </ul>
      </div>

      <div className="section-grid">
        <div className="section">
          <h2>Patient Information</h2>
          <p><span className="label">Full Name:</span><span className="right-align">{fullName}</span></p>
          <p><span className="label">Date of Birth:</span><span className="right-align">{dateOfBirth}</span></p>
          <p><span className="label">Gender:</span><span className="right-align">{gender}</span></p>
          <p><span className="label">Address:</span><span className="right-align">{address}</span></p>
          <p><span className="label">Phone Number:</span><span className="right-align">{phoneNumber}</span></p>
          <p><span className="label">Email Address:</span><span className="right-align">{email}</span></p>
          <p><span className="label">Marital Status:</span><span className="right-align">{maritalStatus}</span></p>
          <p><span className="label">Emergency Contact:</span><span className="right-align">{emergencyContact}</span></p>
          <p><span className="label">Occupation:</span><span className="right-align">{occupation}</span></p>
        </div>

        <div className="section">
          <h2>Insurance Information</h2>
          {insurance.provider ? (
            <>
              <p><span className="label">Provider:</span><span className="right-align">{insurance.provider}</span></p>
              <p><span className="label">Policy Number:</span><span className="right-align">{insurance.policyNumber}</span></p>
              <p><span className="label">Group Number:</span><span className="right-align">{insurance.groupNumber}</span></p>
              <p><span className="label">Coverage Type:</span><span className="right-align">{insurance.coverageType}</span></p>
              <p><span className="label">Primary Care Physician:</span><span className="right-align">{insurance.primaryCarePhysician}</span></p>
              <p><span className="label">Effective Date:</span><span className="right-align">{insurance.effectiveDate}</span></p>
            </>
          ) : (
            <p>No insurance information available.</p>
          )}
        </div>

        <div className="section">
          <h2>Medical History</h2>
          {medicalHistory.chronicConditions ? (
            <>
              <p><span className="label">Chronic Conditions:</span><span className="right-align">{medicalHistory.chronicConditions}</span></p>
              <p><span className="label">Medications:</span><span className="right-align">{medicalHistory.medications}</span></p>
              <p><span className="label">Surgeries:</span><span className="right-align">{medicalHistory.surgeries}</span></p>
              <p><span className="label">Immunizations:</span><span className="right-align">{medicalHistory.immunizations}</span></p>
            </>
          ) : (
            <p>No medical history available.</p>
          )}
        </div>

        <div className="section">
          <h2>Vitals</h2>
          {vitals.height ? (
            <>
              <p><span>Height:</span><span>{vitals.height}</span></p>
              <p><span>Weight:</span><span>{vitals.weight}</span></p>
              <p><span>BMI:</span><span>{vitals.bmi}</span></p>
              <p><span>Blood Pressure:</span><span>{vitals.bloodPressure}</span></p>
              <p><span>Heart Rate:</span><span>{vitals.heartRate}</span></p>
              <p><span>Respiratory Rate:</span><span>{vitals.respiratoryRate}</span></p>
            </>
          ) : (
            <p>No vital signs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientProfileCard;
