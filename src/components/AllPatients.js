// src/components/RecentUpdatesTable.js

import React from 'react';
import './AllPatients.css'; // Import the CSS file for styling

const AllPatients = () => {
  const updates = [
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
          {updates.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
              <td>{update.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-new-record-btn">Add Patient</button>
    </div>
  );
};

export default AllPatients;
