// src/pages/HealthRecords.js

import React from 'react';
import Layout from '../components/Layout';
import HealthRecordsCard from '../components/HealthRecordsCard';
import './HealthRecords.css';

const HealthRecords = () => {
  return (
    <Layout>
      <div className="health-records">
          <h1 className="health-header">Health Records</h1>
          <p className="health-subheader">Manage your medical records and account details here.</p>
        <HealthRecordsCard/>
      </div>
    </Layout>
  );
};

export default HealthRecords;
