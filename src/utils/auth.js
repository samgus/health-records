// src/utils/auth.js
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    EmailAuthProvider,
    reauthenticateWithCredential
} from "firebase/auth";
import { auth } from "../firebase";

// Sign up a new user
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Log in an existing user
export const logIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Log out the current user
export const logOut = async () => {
  return await signOut(auth);
};

// Function to reauthenticate user with email/password
export const reauthenticateUser = async (password) => {
    const user = auth.currentUser;
  
    if (!user || !user.email) {
      throw new Error('No user is logged in or email is unavailable.');
    }
  
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
  };
  
  // Function to delete the user account
  export const deleteAccount = async () => {
    const user = auth.currentUser;
  
    if (user) {
      await user.delete();
    } else {
      throw new Error('No user is logged in.');
    }
  };
