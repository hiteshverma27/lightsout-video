import React, { useState, useEffect, useCallback } from "react";
import {
  errorToast,
  Footer,
  NavBar,
  SideBar,
  successToast,
} from "../../components";
import { useAuth, useVideo } from "../../contexts";
import axios from "axios";
import "./SingleVideo.css";
import { useNavigate } from "react-router-dom";

function SingleVideo() {
  const {
    singleVideo,
    setWatchLater,
    setLikedVideos,
    likedVideos,
    watchLater,
  } = useVideo();
  const { _id, avatar, title, creator, description, views, duration } =
    singleVideo;
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [videoIsLiked, setVideoIsLiked] = useState(false);
  const [videoInWatchLater, setVideoInWatchLater] = useState(false);

  const watchLaterHandler = async (video) => {
    const deleteFromWatchLater = async (video) => {
      try {
        const watchLater = await axios.delete(
          `/api/user/watchlater/${video._id}`,
          {
            headers: { authorization: token },
          }
        );
        setWatchLater(watchLater.data.watchlater);
        successToast("Video deleted from watch later!");
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    const addToWatchLater = async (video) => {
      try {
        const watchLaterVideo = await axios.post(
          `/api/user/watchlater`,
          { video },
          {
            headers: { authorization: token },
          }
        );
        successToast("Video added to watch later!");
        setWatchLater(watchLaterVideo.data.watchlater);
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    isAuthenticated
      ? videoInWatchLater
        ? deleteFromWatchLater(video)
        : addToWatchLater(video)
      : navigate("/login");
  };
  const likeButtonHandler = async (video) => {
    const addToLikedVideos = async (video) => {
      try {
        const likedVideos = await axios.post(
          `/api/user/likes`,
          { video },
          {
            headers: { authorization: token },
          }
        );
        successToast("Video added to liked videos!");
        setLikedVideos(likedVideos.data.likes);
        console.log(likedVideos);
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in liked videos!")
          : errorToast(
              "Something went wrong while adding video to liked videos!"
            );
      }
    };
    const removeFromLikedVideos = async (video) => {
      try {
        const likedVideos = await axios.delete(`/api/user/likes/${video._id}`, {
          headers: { authorization: token },
        });
        successToast("Video removed from liked videos!");
        setLikedVideos(likedVideos.data.likes);
      } catch (error) {
        errorToast("Something went wrong!");
      }
    };
    isAuthenticated
      ? videoIsLiked
        ? removeFromLikedVideos(video)
        : addToLikedVideos(video)
      : navigate("/login");
  };

  const addToHistory = async (video) => {
    try {
      await axios.post(
        `/api/user/history`,
        { video },
        {
          headers: { authorization: token },
        }
      );
    } catch (error) {
      error.response.status === 409
        ? successToast("Video already exist in history!")
        : errorToast("Something went wrong while adding video to history!");
    }
  };

  

  // const dummyplaylist = [
  //   { _id: "uuid1", videos: [{ video1: singleVideo }] },
  //   { _id: "uuid2", videos: [{ video1: singleVideo }] },
  // ];

  // console.log(dummyplaylist);

  useEffect(
    () =>
      likedVideos.filter((item) => item._id === _id).length === 1
        ? setVideoIsLiked(true)
        : setVideoIsLiked(false),
    [likedVideos, _id]
  );
  useEffect(
    () =>
      watchLater.filter((item) => item._id === _id).length === 1
        ? setVideoInWatchLater(true)
        : setVideoInWatchLater(false),
    [watchLater, _id]
  );

  // const Something = useCallback(addToHistory, [token]);
  // useEffect(() => {
  //   isAuthenticated && setTimeout(() => Something());
  // }, [isAuthenticated, singleVideo, Something]);

  // const Something = useCallback(addToHistory, [token]);
  
  useEffect(() => {
    isAuthenticated && setTimeout(()=>addToHistory(singleVideo),0);
  }, [isAuthenticated, singleVideo, addToHistory]);

  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border video-desc-container">
          <div className="video-player flex-center-center mt-2">
            <iframe
              className="video-player"
              width="956"
              height="538"
              src={`https://www.youtube.com/embed/${_id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="mx-3">{title}</h3>
          <div className="flex-space_between-center">
            <div className="m-2 flex-center-center ">
              <img src={avatar} className="avatar avatar-size-2 m-1" alt="" />
              <h3>{creator}</h3>
              <h4 className="flex-space_between-center mx-3">
                <span className="material-icons icon-s2">
                  <span className="material-symbols-outlined">visibility</span>
                </span>{" "}
                {views}
              </h4>
              <h4 className="flex-space_between-center mx-3">
                <span className="material-icons icon-s2">timer</span> {duration}
              </h4>
            </div>
            <div className="flex-center-center mx-3">
              <button
                className="bold m-1 mx-2 flex-center-center"
                onClick={() => likeButtonHandler(singleVideo)}
              >
                <span
                  className={`${
                    videoIsLiked ? "material-icons" : "material-icons-outlined"
                  } icon-s3 mx-1`}
                >
                  thumb_up
                </span>
                {videoIsLiked ? "Liked" : "Like"}
              </button>
              <button
                className="bold m-1 mx-2 flex-center-center"
              >
                <span className={`material-icons icon-s3 mx-1`}>
                  playlist_add
                </span>
                Add to playlist
              </button>
              <button
                className="bold m-1 mx-2 flex-center-center"
                onClick={() => watchLaterHandler(singleVideo)}
              >
                <span className="material-icons icon-s3 mx-1">
                  {videoInWatchLater ? "task_alt" : "schedule"}
                </span>
                Watch Later
              </button>
            </div>
          </div>
          <p className="m-3">{description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { SingleVideo };
