import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in:', result.user);
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default GoogleSignInButton;
