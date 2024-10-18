// src/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const records = [
    { id: 1, title: 'Checkup', date: '2023-01-15' },
    { id: 2, title: 'Vaccination', date: '2023-03-20' },
    { id: 3, title: 'Follow-up', date: '2023-06-10' },
  ];

  const handleViewRecord = (id) => {
    // Logic to view specific record
    console.log(`View record with id: ${id}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Your Dashboard</h1>
      <p>Manage your medical records and account details here.</p>

      <section className="overview">
        <h2>Overview</h2>
        <p>Here is a summary of your recent medical activities.</p>
      </section>

      <section className="recent-records">
        <h2>Recent Medical Records</h2>
        <div className="record-list">
          {records.length === 0 ? (
            <p>No records available.</p>
          ) : (
            <ul>
              {records.map((record) => (
                <li key={record.id} className="record-item">
                  <span>{record.title}</span>
                  <span>{record.date}</span>
                  <button onClick={() => handleViewRecord(record.id)}>View</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="account-details">
        <h2>Account Details</h2>
        <p>Manage your account settings and personal information.</p>
        <button className='account-details-button'>Edit Account</button>
      </section>

      <footer className="dashboard-footer">
        <p>Quick Links:</p>
        <ul>
          <li><a href="/medical-record">View Medical Records</a></li>
          <li><a href="/profile">Profile Settings</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Dashboard;
