// src/components/SignUp.js
import React, { useState } from "react";
import { signUp } from "../AuthService";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      alert("Account created successfully");
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
