import React from 'react';
import './ProfileInfo.css'; // Import the CSS file for styling

const ProfileInfo = () => {
  const updates = [
    { name: 'Full Name', date: 'Olivia Benson' },
    { name: 'Samuel L. Jackson', date: 'Oct 20, 2024' },
    { name: 'Brad Pitt', date: 'Oct 06, 2024' },
    { name: 'Toby Maguire', date: 'Sept 29, 2024' },
    { name: 'Emma Stone', date: 'Sept 13, 2024' },
  ];

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Doctor Information</h2>
        {/* <a href="/health-records" className="view-all-link">View All</a> */}
      </div>
      <table className="updates-table">
        {/* <thead>
          <tr>
            <th>Patients</th>
            <th>Last Updated</th>
          </tr>
        </thead> */}
        <tbody>
          {updates.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
              <td>{update.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button className="add-new-record-btn">Edit Profile</button> */}
    </div>
  );
};

export default ProfileInfo;
