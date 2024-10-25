// src/pages/HealthRecords.js

import React from 'react';
import Layout from '../components/Layout';
import AllPatients from '../components/AllPatients';
import './HealthRecords.css';

const HealthRecords = () => {
  return (
    <Layout>
      <div className="health-records">
          <h1 className="health-header">Health Records</h1>
          <p className="health-subheader">Manage your medical records and account details here.</p>
        <AllPatients/>
      </div>
    </Layout>
  );
};

export default HealthRecords;
