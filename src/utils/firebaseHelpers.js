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

export const addNewUser = async (userData, userId = null) => {
    try {
        const userCollection = collection(db, "users");
        if (userId) {
            // Save with a specific ID
            const userDoc = doc(db, "users", userId);
            await setDoc(userDoc, userData);
        } else {
            // Save with an auto-generated ID
            await addDoc(userCollection, userData);
        }
        console.log("User added successfully!");
    } catch (error) {
        console.error("Error adding user:", error);
    }
};
