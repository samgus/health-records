import React from 'react';
import './ProfileInfo.css'; // Import the CSS file for styling

const ProfileInfo = ({ userData }) => {
  if (!userData) {
    return <div className="updates-table-container">No user data available.</div>;
  }

  return (
      <div className="profile-card-container">
      <div className="section-grid">
        <div className="section">
          <h2>Patient Information</h2>
          {userData ? (
            <>
              <p>
                <span className="label">Full Name:</span>
                <span className="right-align">{userData.name}</span>
              </p>
              <p>
                <span className="label">Office Address:</span>
                <span className="right-align">{userData.officeAddress}</span>
              </p>
              <p>
                <span className="label">Phone Number:</span>
                <span className="right-align">{userData.phoneNumber}</span>
              </p>
              <p>
                <span className="label">Email Address:</span>
                <span className="right-align">{userData.email}</span>
              </p>
              <p>
                <span className="label">Speciality:</span>
                <span className="right-align">{userData.speciality}</span>
              </p>
              <p>
                <span className="label">License Number:</span>
                <span className="right-align">
                  {userData.licenseNumber}
                </span>
              </p>
            </>
          ) : (
            <p>Loading patient information...</p>
          )}
        </div>

        <div className="section">
          <h2>Insurance Taken</h2>
          {userData ? (
            <>
              <p>
                <span className="label">Insurance 1:</span>
                <span className="right-align">{userData.insuranceTaken1}</span>
              </p>
              <p>
                <span className="label">Insurance 2:</span>
                <span className="right-align">{userData.insuranceTaken2}</span>
              </p>
              <p>
                <span className="label">Insurance 3:</span>
                <span className="right-align">{userData.insuranceTaken3}</span>
              </p>
              <p>
                <span className="label">Insurance 4:</span>
                <span className="right-align">{userData.insuranceTaken4}</span>
              </p>
              <p>
                <span className="label">Insurance 5:</span>
                <span className="right-align">{userData.insuranceTaken5}</span>
              </p>
              <p>
                <span className="label">Insurance 6:</span>
                <span className="right-align">{userData.insuranceTaken6}</span>
              </p>
            </>
          ) : (
            <p>Loading insurance information...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
