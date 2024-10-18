import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
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
//const analytics = getAnalytics(app);

// Export services for use in other parts of the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
