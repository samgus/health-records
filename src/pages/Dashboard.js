// src/pages/Dashboard.js

import React from 'react';
import Layout from '../components/Layout';
import RecentUpdatesTable from '../components/RecentUpdatesTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <h1 className="dashboard-header">Good afternoon, Olivia!</h1>
        <p className="dashboard-subheader">Let’s tackle today’s priorities together!</p>
        <RecentUpdatesTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
