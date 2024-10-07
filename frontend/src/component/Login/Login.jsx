import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Username or Email" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#"> Forgot password?</a>
          </div>

          <button type="submit">Sign in</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerLink}>
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
