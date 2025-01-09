import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import "./EditProfileCard.css"; // Import the CSS styling

const EditProfileCard = ({userId}) => {
  const [usersList, setUsersList] = useState([]);
  const [formType, setFormType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
      name: '',
      officeAddress: '',
      phoneNumber: '',
      email: '',
      speciality: '',
      licenseNumber: '',
      insuranceTaken1: '',
      insuranceTaken2: '',
      insuranceTaken3: '',
      insuranceTaken4: '',
      insuranceTaken5: '',
      insuranceTaken6: '',
    });

      // Fetch user data from Firestore
      useEffect(() => {
        const fetchUser = async () => {
          try {
            const userDoc = await getDoc(doc(db, 'users', userId));
            if (userDoc.exists()) {
              // Get the user data and include the document ID as user.id
              setUser({ id: userDoc.id, ...userDoc.data() });
            } else {
              console.error('No such user!');
            }
          } catch (error) {
            console.error('Error fetching user:', error);
          }
        };
        fetchUser();
      }, [userId]);
      
        // Show a loading message until the data is loaded
        if (!user) {
          return (
              <div className="user-profile">
                <p>Loading user data...</p>
              </div>
          );
        }

    const handleShowForm = () => setShowForm(true);

    const inputStyle = { /*...same style as before*/ };

    const handleFormTypeChange = (e) => {
      const selectedFormType = e.target.value;
      setFormType(selectedFormType);
      if (!showForm && selectedFormType) {
        handleShowForm();
      }
    };
  
    const handleChange = async (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
  
      try {
        // Update Firestore as the input changes
        await updateDoc(doc(db, 'users', user.id), { [name]: value });
      } catch (error) {
        console.error('Error updating Firestore:', error);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isEditing) {
        // Update existing patient
        setUsersList((prevList) =>
          prevList.map((p) => (p.id === user.id ? user : p))
        );
      } else {
        // Add new patient
        setUsersList([
          ...usersList,
          { ...user, id: usersList.length + 1 }, // Generate unique id
        ]);
      }
      setUser({ /* reset fields to initial state */ });
      setIsEditing(false);
      setShowForm(false);
    };
    
return (
    <div className="updates-table-container">
      <div className="table-header">
        <h2>Doctor Information</h2>
      </div>

      {/* Dropdown for Form Selection */}
      <div className="form-selection">
        <label>{isEditing ? 'Edit Record' : 'Add a New Record'}: </label>
        <select style={inputStyle} value={formType} onChange={handleFormTypeChange}>
          <option value="">Select an option</option>
          <option value="personal">Personal Information</option>
          <option value="insurance">Insurance Taken</option>
        </select>
      </div>

      {/* Conditionally Render Form */}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {formType === 'personal' && (
              <>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Office Address</label>
                  <input
                    type="text"
                    name="officeAddress"
                    value={user.officeAddress}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input
                    type="phone"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Speciality</label>
                  <input
                    type="text"
                    name="speciality"
                    value={user.speciality}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>License Number</label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={user.licenseNumber}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            {formType === 'insurance' && (
              <>
                <div>
                  <label>Insurance 1</label>
                  <input
                    type="text"
                    name="insuranceTaken1"
                    value={user.insuranceTaken1}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Insurance 2</label>
                  <input
                    type="text"
                    name="insuranceTaken2"
                    value={user.insuranceTaken2}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Insurance 3</label>
                  <input
                    type="text"
                    name="insuranceTaken3"
                    value={user.insuranceTaken3}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Insurance 4</label>
                  <input
                    type="text"
                    name="insuranceTaken4"
                    value={user.insuranceTaken4}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Insurance 5</label>
                  <input
                    type="text"
                    name="insuranceTaken5"
                    value={user.insuranceTaken5}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Insurance 6</label>
                  <input
                    type="text"
                    name="insuranceTaken6"
                    value={user.insuranceTaken6}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            
           
          </div>
          <div className='edit-btn-container'>
            <Link to={`/profile/${user.id}`}>
              <button className="cancel-edit-btn">Cancel</button>
            </Link>
            <Link to={`/profile/${user.id}`}>
            <button className="save-changes-btn" type="submit">
              {/* <img src={Plus} alt="Plus" /> */}
              Save Changes
            </button>
            </Link>
          </div>
          {/* <button className="delete-patient-btn" onClick={handleDelete}>
              Delete Patient
          </button> */}
        </form>
      )}
    </div>
  );
};

export default EditProfileCard;
