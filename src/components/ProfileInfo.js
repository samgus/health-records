import React from 'react';
import './ProfileInfo.css'; // Import the CSS file for styling

const ProfileInfo = () => {
  const doctorInformation = [
    { name: 'Full Name', date: 'Olivia Benson' },
    { name: 'Work Email', date: 'obenson@oakhealth.com' },
    { name: 'Phone Number', date: '(217) 555-9876' },
    { name: 'Password', date: 'ilikecats2017' },
    { name: 'License Number', date: 'IL-11234567' },
  ];
  const insuranceAccepted = [
    { name: 'BlueCross BlueShield'},
    { name: 'Cigna' },
    { name: 'Aetna' },
    { name: 'Medicare' },
    { name: 'UnitedHealthcare' },
  ];

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Doctor Information</h2>
      </div>
      <table className="updates-table">
        <tbody>
          {doctorInformation.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
              <td>{update.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <div className="table-header">
        <h2>Insurance Accepted</h2>
        {/* <a href="/health-records" className="view-all-link">View All</a> */}
      </div>
      <table className="updates-table">
        <tbody>
          {insuranceAccepted.map((update, index) => (
            <tr key={index}>
              <td>{update.name}</td>
              <td>{update.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
