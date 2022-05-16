import React from "react";
import { NavBar, successToast } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";

function Profile() {
  const navigate = useNavigate();
  const {
    setToken,
    setIsAuthenticated,
    setUserData,
    userData,
    isAuthenticated,
  } = useAuth();

  const logoutHandler = async (e) => {
    e.preventDefault();
    setToken("");
    setIsAuthenticated(false);
    setUserData({});
    navigate("/");
    successToast("Logout Success!");
  };

  return (
    <>
      <NavBar />
      {isAuthenticated ? (
        <div className="login-div flex flex-col center-div-method-2 h-70per w-40per m-auto p-3">
          <h2 className="my-2">Your Profile</h2>
          <div className=" w-100per h-100per">
            <div>
              <p>
                <strong>Email: </strong>
                {userData.email}
              </p>
              <p>
                <strong>Name: </strong>
                {`${userData.firstName} ${userData.lastName}`}
              </p>
              <p>
                <strong>Member Since: </strong>
                {userData.createdAt.slice(0, 10)}
              </p>
              <button className="btn-primary-danger" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-center-center">
          <h2>You are not logged in! Login to see your profile</h2>
          <Link className="btn-primary-confirm m-1" to={"/login"}>
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export { Profile };
