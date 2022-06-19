import React from "react";
import { NavBar, successToast } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useVideo } from "../../contexts";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const {
    setToken,
    setIsAuthenticated,
    setUserData,
    userData,
    isAuthenticated,
  } = useAuth();
  const { watchLater, likedVideos, playlist } = useVideo();

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
        <div className=" flex flex-col center-div-method-2 h-70per w-40per m-auto p-3">
          <div className="flex-center-center flex-col">
            <h2 className="my-2">Your Profile</h2>
            <img
              className="profile-avatar"
              alt="avatar"
              src={`https://avatars.dicebear.com/api/initials/${userData.firstName[0].toUpperCase()}${userData.lastName[0].toUpperCase()}.svg`}
            />
          </div>
          <div className=" w-100per h-100per">
            <div>
              <p className="m-1">
                <strong>Email: </strong>
                {userData.email}
              </p>
              <p className="m-1">
                <strong>Name: </strong>
                {`${userData.firstName} ${userData.lastName}`}
              </p>
              <p className="m-1">
                <strong>Member Since: </strong>
                {userData.createdAt.slice(0, 10)}
              </p>
              <hr />
              <div className="flex-space_between-center">
                <p className="m-1">
                  <strong>Watch later: </strong>
                  {watchLater.length}
                </p>
                <Link to={"/watch-later"}>
                  <span className="material-icons cursor-pointer">
                    open_in_new
                  </span>
                </Link>
              </div>
              <div className="flex-space_between-center">
                <p className="m-1">
                  <strong>Liked Videos: </strong>
                  {likedVideos.length}
                </p>
                <Link to={"/liked-videos"}>
                  <span className="material-icons cursor-pointer">
                    open_in_new
                  </span>
                </Link>
              </div>
              <div className="flex-space_between-center">
                <p className="m-1">
                  <strong>Playlists: </strong>
                  {playlist.length}
                </p>
                <Link to={"/playlist"}>
                  <span className="material-icons cursor-pointer">
                    open_in_new
                  </span>
                </Link>
              </div>
              <button
                className="btn-primary-danger m-1 my-3"
                onClick={logoutHandler}
              >
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
