// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import RecentUpdatesTable from '../components/RecentUpdatesTable';
import './Dashboard.css';
import { auth } from '../firebase'; // Firebase setup

const Dashboard = () => {
  const [greeting, setGreeting] = useState('Hello');
  const [firstName, setFirstName] = useState('');

  // Get the user's first name and determine the greeting
  useEffect(() => {
    // Get the current hour
    const hour = new Date().getHours();

    // Set the greeting based on the time of day
    if (hour >= 5 && hour < 12) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }

    // Fetch the user's display name
    const user = auth.currentUser;
    if (user) {
      const name = user.displayName || 'User';
      setFirstName(name.split(' ')[0]); // Use the first part of the display name
    }
  }, []);

  return (
    <Layout>
      <div className="dashboard">
        <h1 className="dashboard-header">
          {greeting}, {firstName}!
        </h1>
        <p className="dashboard-subheader">Let’s tackle today’s priorities together!</p>
        <RecentUpdatesTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
