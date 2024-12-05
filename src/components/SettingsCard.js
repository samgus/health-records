// src/components/SettingsCard.js
import React, { useState } from 'react';
import { deleteAccount, reauthenticateUser } from '../utils/auth'; // Import the utility functions
import './SettingsCard.css'; // Import the CSS for styling

const SettingsCard = () => {
  const [error, setError] = useState(null);

  const handleDeleteAccount = async () => {
    const userConfirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );

    if (!userConfirmed) return;

    try {
      const password = window.prompt('Please enter your password to confirm:');
      if (!password) throw new Error('Password is required to reauthenticate.');

      await reauthenticateUser(password); // Reauthenticate the user
      await deleteAccount(); // Delete the user account

      alert('Your account has been deleted successfully.');
      window.location.href = '/'; // Redirect to splash page after account deletion
    } catch (error) {
      setError(error.message);
      alert(`Failed to delete the account: ${error.message}`);
    }
  };

  return (
    <div className="settings-table-container">
      {error && <p className="error-message">{error}</p>}
      <button className="delete-account-btn" onClick={handleDeleteAccount}>
        Delete Account
      </button>
    </div>
  );
};

export default SettingsCard;
