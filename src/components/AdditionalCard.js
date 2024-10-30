import React, { useState } from 'react';
import './AdditionalCard.css'
import Plus from '../images/plus.svg'
import { Link } from 'react-router-dom';

const AdditionalCard = () => {
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
  const [formType, setFormType] = useState(''); // New state for the selected form type
  const [showForm, setShowForm] = useState(false); // New state to show/hide form fields

  

  // Handle form type selection from the dropdown
  const handleFormTypeChange = (e) => {
    const selectedFormType = e.target.value;
    setFormType(selectedFormType);

    // If form is not already visible, show it
    if (!showForm && selectedFormType) {
      handleShowForm();
    }
  };

  const handleShowForm = () => {
    setShowForm(true); // Show form fields when button is clicked
  };

  // Update patient information based on form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  // Save the patient's information to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    setPatientsList([...patientsList, patient]);
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
    });
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patient Information</h2>
      </div>

      {/* Dropdown to select form type */}
      <div className="form-selection">
        <label>Add a New Record: </label>
        <select style={inputStyle} value={formType} onChange={handleFormTypeChange}>
          <option value="">Select an option</option>
          <option value="personal">Personal Information</option>
          <option value="insurance">Insurance Information</option>
          <option value="lifeStyle">Lifestyle Information</option>
        </select>
      </div>

      {/* Conditionally render form fields based on form type */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Personal Information */}
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
            {/* Insurance Information */}
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

            {/* Emergency Contact Information */}
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
          </div>
          <Link>
              <button className="add-new-record-btn" type="submit">
                <img src={Plus} alt="Plus" />
                  Add Record
                </button>
            </Link>
        </form>
      )}
    </div>
  );
};

export default AdditionalCard;
