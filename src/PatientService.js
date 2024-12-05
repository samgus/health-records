
// src/services/patientService.js
import { db } from "./firebase";
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from "firebase/firestore";

// Reference to the patients collection
const patientsCollection = collection(db, "patients");

// Add a new patient record
export const addPatientRecord = async (userId, record) => {
  return await addDoc(patientsCollection, { ...record, userId });
};

// Get patient records by user
export const getPatientRecordsByUser = async (userId) => {
  const q = query(patientsCollection, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Update a patient record
export const updatePatientRecord = async (recordId, updatedRecord) => {
  const recordRef = doc(db, "patients", recordId);
  return await updateDoc(recordRef, updatedRecord);
};

// Delete a patient record
export const deletePatientRecord = async (recordId) => {
  const recordRef = doc(db, "patients", recordId);
  return await deleteDoc(recordRef);
};
