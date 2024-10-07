import React, { useState } from "react";
import "./register.module.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

<div className="form-box register">
  <form action="">
    <h1>Sign Up</h1>
    <div className="input-box">
      <input type="text" placeholder="First name" required />
      <FaUser className="icon" />
    </div>
    <div className="input-box">
      <input type="text" placeholder="Last name" required />
      <FaUser className="icon" />
    </div>
    <div className="input-box">
      <input type="email" placeholder="Email address" required />
      <FaEnvelope className="icon" />
    </div>
    <div className="input-box">
      <input type="password" placeholder="Password" required />
      <FaLock className="icon" />
    </div>

    <div className="remember-forgot">
      <label>
        <input type="checkbox" /> I agree to terms & conditions
      </label>
    </div>

    <button type="submit">Sign up</button>
    <div className="register-link">
      <p>
        Already have an account?{" "}
        <a href="#" onClick={loginLink}>
          Sign in
        </a>
      </p>
    </div>
  </form>
</div>;

export default Register;
