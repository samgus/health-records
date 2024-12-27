// src/utils/firebaseUtils.js
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const updateLastAccessed = async (patientId) => {
  try {
    const patientRef = doc(db, 'patients', patientId);
    await updateDoc(patientRef, { lastAccessed: new Date() });
  } catch (error) {
    console.error('Error updating last accessed field:', error);
  }
};