// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // If you're using Firestore for database
import { getStorage } from 'firebase/storage';  // If you're using Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyCEc3S9OKGH_b29BNuAKCz9H9EUJlrbSyY",
  authDomain: "personal-health-record-44560.firebaseapp.com",
  projectId: "personal-health-record-44560",
  storageBucket: "personal-health-record-44560.appspot.com",
  messagingSenderId: "857360692025",
  appId: "1:857360692025:web:b3c2af685ce8392ca22ee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase authentication, Firestore, and storage services
export const auth = getAuth(app);
export const db = getFirestore(app);  // If you're using Firestore
export const storage = getStorage(app);  // If you're using Firebase Storage
