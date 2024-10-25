import React from 'react';
import Layout from '../components/Layout';
import './Settings.css';
import SettingsCard from '../components/SettingsCard';



const Settings = () => {
  return (
    <Layout>
    <div className="settings">
            <h1 className="settings-header">Settings</h1>
            <p className="settings-subheader">Manage your account settings</p>
            <SettingsCard />
    </div>
  </Layout>
  );
};

export default Settings;
