import React from 'react';
import './PatientProfileCard.css'; // Import the CSS file for styling

const PatientProfileCard = () => {
  return (
    <div className="patient-profile-card-container">
        {/* <h1>Emma Stone</h1>
        <p className="profile-subtitle">Manage your medical records and account details here.</p> */}
        
        <div className="section doctor-notes">
            <h2>Doctor's Notes</h2>
            <ul>
                <li>General Health Status: Stable overall, good management of diabetes and hypertension. Continue prescribed medications and lifestyle adjustments.</li>
                <li>Recommendations: Follow-up in 3 months to monitor progress. Continue blood glucose self-monitoring and regular exercise.</li>
                <li>Referrals: None at this time.</li>
            </ul>
        </div>

        <div className="section-grid">
            <div className="section">
                <h2>Patient Information</h2>
                <p><span className="label">Full Name:</span><span className="right-align">Emma Stone</span></p>
                <p><span className="label">Date of Birth:</span><span className="right-align">March 15, 1985 (Age: 39)</span></p>
                <p><span className="label">Gender:</span><span className="right-align">Female</span></p>
                <p><span className="label">Address:</span><span className="right-align">1234 Elm Street, Springfield, IL, 62704</span></p>
                <p><span className="label">Phone Number:</span><span className="right-align">(217) 555-1234</span></p>
                <p><span className="label">Email Address:</span><span className="right-align">john@gmail.com</span></p>
                <p><span className="label">Marital Status:</span><span className="right-align">Married</span></p>
                <p><span className="label">Emergency Contact:</span><span className="right-align">John Doe (Husband) - (217) 555-5678</span></p>
                <p><span className="label">Occupation:</span><span className="right-align">Software Engineer</span></p>
            </div>

            <div className="section">
                <h2>Insurance Information</h2>
                <p><span className="label">Provider:</span><span className="right-align">BlueCross BlueShield</span></p>
                <p><span className="label">Policy Number:</span><span className="right-align">BCBS-987654321</span></p>
                <p><span className="label">Group Number:</span><span className="right-align">12345</span></p>
                <p><span className="label">Coverage Type:</span><span className="right-align">PPO Plan</span></p>
                <p><span className="label">Primary Care Physician (PCP):</span><span className="right-align">Dr. Emily Harris</span></p>
                <p><span className="label">Effective Date:</span><span className="right-align">January 1, 2023</span></p>
            </div>

            <div className="section">
                <h2>Medical History</h2>
                <p><span className="label">Chronic Conditions:</span><span className="right-align">Hypertension (Diagnosed: 2015), Type 2 Diabetes (Diagnosed: 2018)</span></p>
                <p><span className="label">Medications:</span><span className="right-align">Metformin, Lisinopril, Cetirizine</span></p>
                <p><span className="label">Surgeries/Procedures:</span><span className="right-align">Appendectomy (2010), Wisdom Teeth Removal (2004)</span></p>
                <p><span className="label">Immunizations:</span><span className="right-align">Tetanus Booster (2022), Influenza Vaccine (2023), COVID-19 Vaccine</span></p>
                <p><span className="label">Family Medical History:</span><span className="right-align">Heart disease, Hypertension</span></p>
            </div>


            <div className="section">
                <h2>Recent Visits</h2>
                <p><strong>Provider:</strong> BlueCross BlueShield</p>
                <p><strong>Policy Number:</strong> BCBS-987654321</p>
                <p><strong>Primary Care Physician (PCP):</strong> Dr. Emily Harris</p>
                <p><strong>Effective Date:</strong> January 1, 2023</p>
                <p><span className="label">Provider:</span><span className="right-align">BlueCross BlueShield</span></p>
                <p><span className="label">Policy Number:</span><span className="right-align">BCBS-987654321</span></p>
                <p><span className="label">Group Number:</span><span className="right-align">12345</span></p>
                <p><span className="label">Coverage Type:</span><span className="right-align">PPO Plan</span></p>
                <p><span className="label">Primary Care Physician (PCP):</span><span className="right-align">Dr. Emily Harris</span></p>
                <p><span className="label">Effective Date:</span><span className="right-align">January 1, 2023</span></p>
            </div>

            <div className="section">
                <h2>Lab Results</h2>
                <p><strong>Provider:</strong> BlueCross BlueShield</p>
                <p><strong>Policy Number:</strong> BCBS-987654321</p>
                <p><strong>Primary Care Physician (PCP):</strong> Dr. Emily Harris</p>
                <p><strong>Effective Date:</strong> January 1, 2023</p>
            </div>

            <div className="section">
                <h2>Vitals</h2>
                <p><span>Height:</span><span>5’11” (180 cm)</span></p>
                <p><span>Weight:</span><span>185 lbs (84 kg)</span></p>
                <p><span>BMI:</span><span>25.8 (Overweight)</span></p>
                <p><span>Blood Pressure:</span><span>125/80 mmHg (Controlled)</span></p>
                <p><span>Heart Rate:</span><span>72 bpm</span></p>
                <p><span>Respiratory Rate:</span><span>16 breaths per minute</span></p>
            </div>

        </div>
    </div>
  );
};

export default PatientProfileCard;
