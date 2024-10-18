// src/MedicalRecord.js
import React, { useState } from 'react';
import './MedicalRecord.css';

const MedicalRecord = () => {
  const [records, setRecords] = useState([
    { id: 1, date: '2023-01-15', type: 'Checkup', doctor: 'Dr. Smith' },
    { id: 2, date: '2023-03-20', type: 'Vaccination', doctor: 'Dr. Lee' },
    { id: 3, date: '2023-06-10', type: 'Follow-up', doctor: 'Dr. Brown' },
  ]);

  const handleAddRecord = () => {
    // Logic to add a new record
    console.log('Add new record');
  };

  const handleEditRecord = (id) => {
    // Logic to edit a record
    console.log(`Edit record with id: ${id}`);
  };

  return (
    <div className="medical-record-container">
      <h2>Your Medical Records</h2>
      <p>Here you can view and manage your medical records securely.</p>

      <div className="record-actions">
        <button onClick={handleAddRecord}>Add New Record</button>
        <input type="text" placeholder="Search records..." />
      </div>

      <div className="record-list">
        {records.length === 0 ? (
          <p>No medical records found.</p>
        ) : (
          <ul>
            {records.map((record) => (
              <li key={record.id} className="record-item">
                <span>{record.date}</span>
                <span>{record.type}</span>
                <span>{record.doctor}</span>
                <button onClick={() => handleEditRecord(record.id)}>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <footer className="medical-footer">
        <p>Tips for Managing Your Medical Records:</p>
        <ul>
          <li>Keep your records up to date.</li>
          <li>Store records in a secure location.</li>
          <li>Consider using digital records for easier access.</li>
        </ul>
      </footer>
    </div>
  );
};

export default MedicalRecord;
