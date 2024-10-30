import React, { useState } from "react";
import "./EditProfileCard.css"; // Import the CSS styling

const EditProfileCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    licenseNumber: "",
    insurance: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle saving form data
    console.log("Form Data Submitted:", formData);
  };

  return (

      
      <div className="form-card">
        {/* Doctor Information Section */}
        <div className="form-section">
          <h3>Doctor Information</h3>
          
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          
          <label htmlFor="workEmail">Work Email</label>
          <input
            type="email"
            id="workEmail"
            placeholder="example@site.com"
            value={formData.workEmail}
            onChange={handleInputChange}
          />
          
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="201-555-5555"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="New password"
            value={formData.password}
            onChange={handleInputChange}
          />
          
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm new password?"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          
          <label htmlFor="licenseNumber">License Number</label>
          <input
            type="text"
            id="licenseNumber"
            placeholder="IL-9876XXXX"
            value={formData.licenseNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Insurance Accepted Section */}
        <div className="form-section">
          <h3>Insurance Accepted</h3>
          <label htmlFor="licenseNumber">Select the insurances that you accept from patients</label>

          <select
            id="insurance"
            value={formData.insurance}
            onChange={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="insurance1">BlueCross BlueShield</option>
            <option value="insurance2">Cigna</option>
            <option value="insurance3">Aetna</option>
            <option value="insurance4">Medicare</option>
            <option value="insurance5">UnitedHealthcare</option>
            {/* Add more insurance options as needed */}
          </select>
        </div>
      </div>
    //   <div className="button-container">
    //     <button className="cancel-btn" onClick={() => setFormData({
    //       fullName: "",
    //       workEmail: "",
    //       phoneNumber: "",
    //       password: "",
    //       confirmPassword: "",
    //       licenseNumber: "",
    //       insurance: ""
    //     })}>Cancel</button>
    //     <button className="save-btn" onClick={handleSubmit}>Save Changes</button>
    //   </div>
  );
};

export default EditProfileCard;
