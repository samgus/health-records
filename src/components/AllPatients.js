import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Update with your firebase.js path

const Allpatients = () => {
    const [patientsList, setPatientsList] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "patients"));
                const patients = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPatientsList(patients);
            } catch (error) {
                console.error("Error fetching patient data: ", error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div>
            <h2>All Patients</h2>
            <ul>
                {patientsList.map((patient) => (
                    <li key={patient.id}>
                        {patient.fullName} - {patient.dateOfBirth}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Allpatients;
