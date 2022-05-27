import React, { useState } from "react";
import { errorToast, NavBar, successToast } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useAuth } from "../../contexts";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuthenticated, setUserData, isAuthenticated } =
    useAuth();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      setToken(userData.data.encodedToken);
      setIsAuthenticated(true);
      setUserData(userData.data.foundUser);
      setIsAuthenticated(true);
      navigate("/");
      successToast("Login Success!");
    } catch (error) {
      errorToast("You are not registered, please sign up");
    }
  };
  const guestModeHandler = async (e) => {
    e.preventDefault();
    try {
      const userData = await axios.post("/api/auth/login", {
        email: "hiteshverma@gmail.com",
        password: "hitesh123",
      });
      setToken(userData.data.encodedToken);
      setIsAuthenticated(true);
      setUserData(userData.data.foundUser);
      setIsAuthenticated(true);
      navigate("/");
      successToast("Login Success!");
    } catch (error) {
      errorToast("You are not registered, please sign up");
    }
  };

  return (
    <>
      <NavBar />
      {isAuthenticated ? (
        <div className="flex-center-center">
          <h2>You are already logged in!</h2>
          <Link className="btn-primary-confirm m-1" to={"/profile"}>
            Profile
          </Link>
        </div>
      ) : (
        <div className="login-div flex flex-col center-div-method-2 h-70per w-40per m-auto p-3">
          <h2 className="my-2">Login</h2>
          <form className="flex flex-col p-2 h-80per w-80per">
            <label className="bold" htmlFor="email">
              Email Address
            </label>
            <br />
            <input
              type="email"
              className="w-100per input m-0"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="bold" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password"
              className="w-100per input m-0"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="flex-space_between-center">
              <div className="flex-center-center">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" className="mx-1">
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-100per btn-primary-confirm my-1"
              onClick={loginHandler}
            >
              Log In
            </button>
            <button
              type="submit"
              className="w-100per btn-primary-confirm my-1"
              onClick={guestModeHandler}
            >
              Use Guest Mode
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export { Login };
