import React, { useState, useContext } from "react";
import { RailContext } from "./context/context";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../api/api";

const Login = (props) => {
  const { user, setUser } = useContext(RailContext);
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const obj = {
      email: loginemail,
      password: loginpassword,
    };
    const response = await loginApi(obj);
    await setUser({
      userType: response.data.userRole,
      email: response.data.email,
      firstName: "",
      lastName: "",
      mobilenumber: "",
      age: "",
      gender: "",
      loggedIn: true,
      token: response.data.userToken,
    });
    window.localStorage.setItem("userToken", response.data.userToken);
    console.log(response.data);
    if (response.data.userRole.toLowerCase() === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "30rem" }}
      >
        <div className="card " style={{ width: "28rem" }}>
          <h5 className="card-header nav-bg text-white">Login</h5>
          <div className="card-body">
            <form>
              <div className="mb-2">
                <input
                  id="email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  aria-label="default input example"
                  required={true}
                />
              </div>
              <div className="mb-2">
                <input
                  id="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  aria-label="default input example"
                  required={true}
                />
              </div>
              <button
                type="button"
                id="loginButton"
                className="btn nav-bg text-white  m-1"
                onClick={handleLogin}
              >
                Login
              </button>
              <span id="signupLink">
                <p className="text-muted me-1 d-inline-block">
                  New User/admin?
                </p>
                <Link to={"/signup"}>Sign Up</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
