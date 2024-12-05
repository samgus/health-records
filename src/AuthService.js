// src/services/authService.js
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";

// Sign up
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Log in
export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Log out
export const logOut = () => {
  return signOut(auth);
};

// Delete Account
export const deleteAccount = () => {
  const user = auth.currentUser;
  if (user) {
    return deleteUser(user);
  }
};
