import React, { useState } from 'react';
import './AddPatientCard.css'; // Import the CSS file for styling
import Plus from '../images/plus.svg'

const AddPatientCard = () => {
  // State to hold individual patient data
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

  // State to hold the list of all patients
  const [patientsList, setPatientsList] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  // Handle form submission
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
    });
  };

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patient Information</h2>
      </div>
      <table className="form-grid">
        <form onSubmit={handleSubmit}>
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
            {/* Add other form fields similarly */}
            <Link>
              <button className="add-new-record-btn">
                <img src={Plus} alt="Plus" />
                  Add Record
                </button>
            </Link>
        </form>
      </table>
      <div className="patient-list">
        <ul>
          {patientsList.map((p, index) => (
            <li key={index}>
              {p.fullName} - {p.dateOfBirth} - {p.email}
              {/* Display other details here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddPatientCard;
