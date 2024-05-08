import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/forgotPassword.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useUser } from "../services/userService";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { forgotPassword } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordsMatch, setPasswordsMatch] = useState(true);

 

  const handleForgotPassword = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        forgotPassword({ password, email });
        navigate("/login");
      } else {
        setPasswordsMatch(false);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <div className="forgotpasscontainer" id="forgotpasscontainer">
        <form action="#" className="forgotpassSelectForm">
          <>
            <h1 className="forgotpassheading">Forgot Password</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input
              type="text"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span className="passwordMismatch">{passwordsMatch ? null : "Passwords do not match"}</span>
            <button
              className="setForgotpassBtn"
              id="signUpBtn"
              onClick={handleForgotPassword}
            >
              Done
            </button>
          </>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
