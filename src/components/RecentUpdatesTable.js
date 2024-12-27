import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecentUpdatesTable.css'; // Import the CSS file for styling
import Plus from '../images/plus.svg';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your Firebase configuration

const RecentUpdatesTable = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchRecentUpdates = async () => {
      try {
        // Query Firestore to get the 5 most recently accessed patients
        const q = query(
          collection(db, 'patients'),
          orderBy('lastAccessed', 'desc'), // Sort by lastAccessed in descending order
          limit(5) // Limit the results to 5
        );
        const querySnapshot = await getDocs(q);
        const recentPatients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUpdates(recentPatients);
      } catch (error) {
        console.error('Error fetching recent updates:', error);
      }
    };

    fetchRecentUpdates();
  }, []);

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
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update) => (
            <tr key={update.id}>
              <td>{update.fullName || 'Unknown'}</td>
              <td>{formatDate(update.lastAccessed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/add-patient'}>
        <button className="add-new-record-btn">
          {/* <img src={Plus} alt="Plus" /> */}
          Add Patient
        </button>
      </Link>
    </div>
  );
};

export default RecentUpdatesTable;
