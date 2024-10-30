// src/components/RecentUpdatesTable.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AllPatients.css'; // Import the CSS file for styling
import Plus from '../images/plus.svg'

const AllPatients = () => {
  const patients = [
    { name: 'Daniel Radcliff', date: 'Today' },
    { name: 'Samuel L. Jackson', date: 'Oct 20, 2024' },
    { name: 'Brad Pitt', date: 'Oct 06, 2024' },
    { name: 'Toby Maguire', date: 'Sept 29, 2024' },
    { name: 'Emma Stone', date: 'Sept 13, 2024' },
    { name: 'Samuel L. Jackson', date: 'Oct 20, 2024' },
    { name: 'Brad Pitt', date: 'Oct 06, 2024' },
    { name: 'Toby Maguire', date: 'Sept 29, 2024' },
  ];

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patients</h2>
        {/* <a href="/all-records" className="view-all-link">View All</a> */}
      </div>
      <table className="updates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <Link to={'/patient-profile'}><td>{patient.name}</td></Link>
              <td>{patient.date}</td>
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

export default AllPatients;
