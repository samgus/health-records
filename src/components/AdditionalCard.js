import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Update with your firebase.js path
import './AdditionalCard.css';
import Plus from '../images/plus.svg';

const AdditionalCard = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    email: '',
    maritalStatus: '',
    emergencyContact: '',
    occupation: '',
    provider: '',
    policyNumber: '',
    groupNumber: '',
    coverageType: '',
    pcp: '',
    effectiveDate: '',
    smokingStatus: '',
    alcoholUse: '',
    exercise: '',
    diet: '',
    sleepHabits: '',
    stressLevels: '',
    chronicConditions: '',
    surgeries: '',
    medications: '',
    allergies: '',
    date: '',
    reasonForVisit: '',
    notes: '',
    nextAppointment: '',
    height: '',
    weight: '',
    bmi: '',
    bloodPressure: '',
    heartRate: '',
    respiratoryRate: '',
    generalHealthStatus: '',
    recommendations: '',
    referrals: '',
  });

  const inputStyle = {
    marginTop: '4px',
    marginBottom: '20px',
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    backgroundColor: '#fff',
    appearance: 'none',
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"gray\"><polygon points=\"0,0 20,0 10,10\"/></svg>')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '12px',
  };

  const [patientsList, setPatientsList] = useState([]);
  const [formType, setFormType] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleFormTypeChange = (e) => {
    const selectedFormType = e.target.value;
    setFormType(selectedFormType);

    if (!showForm && selectedFormType) {
      handleShowForm();
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };
  
  const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          // Save patient data to Firestore
          await addDoc(collection(db, "patients"), patient);
  
          // Update local state
          setPatientsList([...patientsList, patient]);
  
          // Reset the form
          setPatient({
              fullName: '',
              dateOfBirth: '',
              gender: '',
              address: '',
              phoneNumber: '',
              email: '',
              maritalStatus: '',
              emergencyContact: '',
              occupation: '',
              provider: '',
              policyNumber: '',
              groupNumber: '',
              coverageType: '',
              pcp: '',
              effectiveDate: '',
              smokingStatus: '',
              alcoholUse: '',
              exercise: '',
              diet: '',
              sleepHabits: '',
              stressLevels: '',
              chronicConditions: '',
              surgeries: '',
              medications: '',
              allergies: '',
              date: '',
              reasonForVisit: '',
              notes: '',
              nextAppointment: '',
              height: '',
              weight: '',
              bmi: '',
              bloodPressure: '',
              heartRate: '',
              respiratoryRate: '',
              generalHealthStatus: '',
              recommendations: '',
              referrals: '',
          });
          setShowForm(false); // Hide the form
          alert("Patient record added successfully!");
          navigate('/health-records');
      } catch (error) {
          console.error("Error adding document: ", error);
          alert("Failed to add patient record.");
      }
  };

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patient Information</h2>
      </div>

      <div className="form-selection">
        <label>Add a New Record: </label>
        <select style={inputStyle} value={formType} onChange={handleFormTypeChange}>
          <option value="">Select an option</option>
          <option value="doctorsNotes">Doctor's Notes</option>
          <option value="personal">Personal Information</option>
          <option value="vitals">Vitals</option>
          <option value="insurance">Insurance Information</option>
          <option value="medicalHistory">Medical History</option>
          <option value="lifeStyle">Lifestyle Information</option>
          <option value="latestVisit">Latest Visit</option>
        </select>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {formType === 'doctorsNotes' && (
              <>
                <div>
                  <label>General Health Status</label>
                  <input
                    type="text"
                    name="generalHealthStatus"
                    value={patient.generalHealthStatus}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Recommendations</label>
                  <input
                    type="text"
                    name="recommendations"
                    value={patient.recommendations}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Referrals</label>
                  <input
                    type="text"
                    name="referrals"
                    value={patient.referrals}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'personal' && (
              <>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={patient.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={patient.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={patient.gender}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={patient.address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input
                    type="phone"
                    name="phoneNumber"
                    value={patient.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={patient.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Marital Status</label>
                  <input
                    type="text"
                    name="maritalStatus"
                    value={patient.maritalStatus}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Emergency Contact</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={patient.emergencyContact}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Occupation</label>
                  <input
                    type="text"
                    name="occupation"
                    value={patient.occupation}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
             {formType === 'vitals' && (
              <>
                <div>
                  <label>Height</label>
                  <input
                    type="text"
                    name="height"
                    value={patient.height}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={patient.weight}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>BMI</label>
                  <input
                    type="text"
                    name="bmi"
                    value={patient.bmi}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Blood Pressure</label>
                  <input
                    type="text"
                    name="bloodPressure"
                    value={patient.bloodPressure}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Heart Rate</label>
                  <input
                    type="text"
                    name="heartRate"
                    value={patient.heartRate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Respiratory Rate</label>
                  <input
                    type="text"
                    name="respiratoryRate"
                    value={patient.respiratoryRate}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'insurance' && (
              <>
                <div>
                  <label>Provider</label>
                  <input
                    type="text"
                    name="provider"
                    value={patient.provider}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Policy Number</label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={patient.policyNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Group Number</label>
                  <input
                    type="text"
                    name="groupNumber"
                    value={patient.groupNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Coverage Type</label>
                  <input
                    type="text"
                    name="coverageType"
                    value={patient.coverageType}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Primary Care Physician (PCP)</label>
                  <input
                    type="text"
                    name="pcp"
                    value={patient.pcp}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Effective Date</label>
                  <input
                    type="date"
                    name="effectiveDate"
                    value={patient.effectiveDate}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'medicalHistory' && (
              <>
                <div>
                  <label>Chronic Conditions</label>
                  <input
                    type="text"
                    name="chronicConditions"
                    value={patient.chronicConditions}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Surgeries/Procedures</label>
                  <input
                    type="text"
                    name="surgeries"
                    value={patient.surgeries}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Medications</label>
                  <input
                    type="text"
                    name="medications"
                    value={patient.medications}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Allergies</label>
                  <input
                    type="text"
                    name="allergies"
                    value={patient.allergies}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Immunizations</label>
                  <input
                    type="text"
                    name="immunizations"
                    value={patient.immunizations}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Family Medical History</label>
                  <input
                    type="text"
                    name="familyMedicalHistory"
                    value={patient.familyMedicalHistory}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'lifeStyle' && (
              <>
                <div>
                  <label>Smoking Status</label>
                  <input
                    type="text"
                    name="smokingStatus"
                    value={patient.smokingStatus}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Alcohol Use</label>
                  <input
                    type="text"
                    name="alcoholUse"
                    value={patient.alcoholUse}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Exercise</label>
                  <input
                    type="text"
                    name="exercise"
                    value={patient.exercise}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Diet</label>
                  <input
                    type="text"
                    name="diet"
                    value={patient.diet}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Sleep Habits</label>
                  <input
                    type="text"
                    name="sleepHabits"
                    value={patient.sleepHabits}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Stress Levels</label>
                  <input
                    type="text"
                    name="stressLevels"
                    value={patient.stressLevels}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'latestVisit' && (
              <>
                <div>
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={patient.date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Reason for Visit</label>
                  <input
                    type="text"
                    name="reasonForVisit"
                    value={patient.reasonForVisit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Notes</label>
                  <input
                    type="text"
                    name="notes"
                    value={patient.notes}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Next Appointment</label>
                  <input
                    type="date"
                    name="nextAppointment"
                    value={patient.nextAppointment}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
           
          </div>
          <div className='btn-container'>
            <Link to={'/health-records'}>
              <button className="cancel-btn">Cancel</button>
            </Link>
            <button className="add-new-record-btn" type="submit">
              <img src={Plus} alt="Plus" />
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdditionalCard;
