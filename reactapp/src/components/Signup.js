import React, { useState, useContext } from "react";
import { RailContext } from "./context/context";
import { signupApi } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [usertype, setUserType] = useState("");
  const [emailsignup, setEmailSignup] = useState("");
  const [usernameSignup, setUsernameSignUp] = useState("");
  const [mobileSignup, setMobileSignup] = useState("");
  const [passwordsignup, setPasswordSignup] = useState("");
  const [cpassword, setCpassword] = useState("");
  const { signup, signupHandle } = useContext(RailContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailsignup,
      password: passwordsignup,
      name: usernameSignup,
      mobileNumber: mobileSignup,
      userRole: usertype,
    };
    const response = await signupApi(obj);
    console.log(response);
    if (response.data === "Admin added" || response.data === "User added") {
      navigate("/login");
    } else {
      console.log(response.data);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "30rem" }}
    >
      <div className="card " style={{ width: "28rem" }}>
        <h5 className="card-header nav-bg text-white">Register</h5>
        <div className="card-body">
          <form>
            <div className="mb-2">
              <input
                id="admin/user"
                value={usertype}
                name="userType"
                onChange={(e) => setUserType(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Enter admin/user"
                aria-label="default input example"
              />
            </div>
            <div className="mb-2">
              <input
                id="email"
                name="userSignupemail"
                value={emailsignup}
                onChange={(e) => setEmailSignup(e.target.value)}
                className="form-control"
                type="email"
                placeholder="Enter email"
                aria-label="default input example"
              />
            </div>
            <div className="mb-2">
              <input
                id="username"
                name="usernameSignup"
                value={usernameSignup}
                onChange={(e) => setUsernameSignUp(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Enter Username"
                aria-label="default input example"
              />
            </div>
            <div className="mb-2">
              <input
                id="mobileNumber"
                name="mobileSignup"
                value={mobileSignup}
                onChange={(e) => setMobileSignup(e.target.value)}
                className="form-control"
                type="text"
                placeholder="Enter Mobilenumber"
                aria-label="default input example"
              />
            </div>
            <div className="mb-2">
              <input
                id="password"
                name="passwordsignup"
                value={passwordsignup}
                onChange={(e) => setPasswordSignup(e.target.value)}
                className="form-control"
                type="password"
                placeholder="Enter Password"
                aria-label="default input example"
              />
            </div>
            <div className="mb-2">
              <input
                id="confirmPassword"
                name="cpassword"
                value={signup.cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                aria-label="default input example"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <button
                type="submit"
                id="submitButton"
                className="btn nav-bg text-white d-block m-2"
                onClick={(e) => handleSignup(e)}
              >
                Submit
              </button>
              <span id="signinLink">
                <p className="text-muted me-1 d-inline-block">
                  Already a user?
                </p>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
