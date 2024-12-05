import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const addNewPatient = async (patientData, userId = null) => {
    try {
        const patientCollection = collection(db, "patients");
        if (userId) {
            // Save with a specific ID
            const patientDoc = doc(db, "patients", userId);
            await setDoc(patientDoc, patientData);
        } else {
            // Save with an auto-generated ID
            await addDoc(patientCollection, patientData);
        }
        console.log("Patient added successfully!");
    } catch (error) {
        console.error("Error adding patient:", error);
    }
};
