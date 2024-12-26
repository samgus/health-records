import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase configuration
import './EditPatientProfile.css';
import Layout from '../components/Layout';
import EditPatientCard from '../components/EditPatientCard';


const EditPatientProfile = () => {
  const params = useParams(); // Get the patient ID from the URL
  const patientId = params.patientId
  console.log(params)
  const [patient, setPatient] = useState(null);

    // Fetch patient data from Firestore
    useEffect(() => {
      const fetchPatient = async () => {
        try {
          const patientDoc = await getDoc(doc(db, 'patients', patientId));
          console.log('patient doc: ',patientDoc)
          if (patientDoc.exists()) {
            setPatient(patientDoc.data());
          } else {
            console.error('No such patient!');
          }
        } catch (error) {
          console.error('Error fetching patient:', error);
        }
      };
   
      fetchPatient();
    }, [patientId]);
  
    // Show a loading message until the data is loaded
    if (!patient) {
      return (
        <Layout>
          <div className="edit-patient-profile">
            <p>Loading patient data...</p>
          </div>
        </Layout>
      );
    }

  return (
    <Layout>
        <div className='edit-patient'>
              <div className='edit-patient-header-container'>
                <div>
                  <h1 className="edit-patient-header">Edit {patient.fullName || 'Patient Name'}</h1>
                  <p className="edit-patient-subheader">Update {patient.fullName || 'Patient Name'}'s information</p>
                </div>
                <div className='btn-container'>
                  {/* <Link to={'/patient-profile'}>
                    <button className="cancel-btn">Cancel</button>
                  </Link>
                    <button className="save-changes-btn">Save Changes</button> */}
                </div>
              </div>           
            <EditPatientCard patientId={patientId} />
        </div>
    </Layout>
  );
};

export default EditPatientProfile;