import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './RecentUpdatesTable.css'; // Import the CSS file for styling
import Plus from '../images/plus.svg';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase configuration
import { AuthContext } from '../contexts/AuthContext';


const RecentUpdatesTable = () => {
  const [patients, setPatients] = useState([]);
  const doctor = useContext(AuthContext)
  

  useEffect(() => {
    const fetchRecentUpdates = async () => {
       if (!doctor) return [];
            const patientsRef = collection(db, 'patients')
            const q = query(patientsRef, where("doctorId", "==", doctor.uid))
            // orderBy('lastAccessed', 'desc'), // Sort by lastAccessed in descending order
            // limit(5)) // Limit the results to 5

            
      try {
        // Query Firestore to get the 5 most recently accessed patients
        // const q = query(
        //   patientsRef,
        //   orderBy('lastAccessed', 'desc'), // Sort by lastAccessed in descending order
        //   limit(5) // Limit the results to 5
        // );
        const querySnapshot = await getDocs(q)
        const patientsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchRecentUpdates();
  }, [doctor]);

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date.seconds * 1000).toLocaleDateString(undefined, options);
  };

  return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Patients</h2>
        <a href="/health-records" className="view-all-link">View All</a>
      </div>
      <table className="updates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Accessed
            </th>
          </tr>
        </thead>
        <tbody>
          {patients.map((update) => (
            <tr key={update.id}>
              <td>{update.fullName || 'Unknown'}</td>
              <td>{update.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/add-patient'}>
        <button className="new-patient-btn">
          {/* <img src={Plus} alt="Plus" /> */}
          New Patient
        </button>
      </Link>
    </div>
  );
};

export default RecentUpdatesTable;
