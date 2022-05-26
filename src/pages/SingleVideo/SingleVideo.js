import React, { useState, useEffect } from "react";
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
    playlist,
    setPlaylist,
  } = useVideo();
  const { _id, avatar, title, creator, description, views, duration } =
    singleVideo;
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [videoIsLiked, setVideoIsLiked] = useState(false);
  const [videoInWatchLater, setVideoInWatchLater] = useState(false);
  const [playListNameInput, setPlayListNameInput] = useState("");

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
      error.response.status === 500 &&
        errorToast("Something went wrong while adding video to history!");
    }
  };

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

  useEffect(() => {
    isAuthenticated && setTimeout(() => addToHistory(singleVideo), 0);
  });

  const modalShowHandler = () => {
    const modal = document.getElementById("modal");
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  };

  const createPlaylistHandler = async (video) => {
    try {
      const res = await axios.post(
        `/api/user/playlists`,
        {
          playlist: [
            {
              name: playListNameInput,
              videos: (prev) => [...prev, video],
            },
          ],
        },
        {
          headers: { authorization: token },
        }
      );
      setPlaylist(res.data.playlists);
      setPlayListNameInput("");
      successToast("Playlist created")
    } catch (error) {
      error.response.status === 500 &&
      errorToast("Something went wrong while creating playlist!");
    }
  };

  const getPlaylists = async () => {
    try {
      const res = await axios.get(`/api/user/playlists`, {
        headers: { authorization: token },
      });
      setPlaylist(res.data.playlists)
    } catch (error) {
      error.response.status === 500 &&
      errorToast("Something went wrong!");
    }
  };
  const addVideoToPlaylist = async (video, item) => {
    try {
       await axios.post(
        `/api/user/playlists/${item._id}`,
        {
          video,
        },
        {
          headers: { authorization: token },
        }
      );
      
      successToast(`Video added to ${item[0].name}`)
    } catch (error) {
      error.response.status === 409 ?
      errorToast(`Video already exist in ${item[0].name}`):
      errorToast("SOmething went wrong when added video to playlist")
    }
    getPlaylists()
  };



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
              <button className="bold m-1 mx-2 flex-center-center" onClick={modalShowHandler}>
                <span className={`material-icons icon-s3 mx-1`}>
                  playlist_add
                </span>
                Add to playlist
              </button>
              <div
                id="modal"
                className="center-div-method-2 h-50rem w-50rem p-3"
              >
                <div className="flex-space_between-center">
                  <h3>Save to...</h3>
                  <button className="m-2" onClick={modalShowHandler}>
                    X
                  </button>
                </div>
                <hr />
                {playlist.map((item,index) => (
                  <div className="flex-col my-1" key={index}>
                    <label className="flex">
                      <button onClick={() =>addVideoToPlaylist(singleVideo,item)}>
                        <span className="material-icons icon-s3">add</span>
                      </button>
                      {item[0].name}
                    </label>
                  </div>
                ))}
                <label>
                  <input
                    type={"text"}
                    value={playListNameInput}
                    onChange={(e) => setPlayListNameInput(e.target.value)}
                  />
                  <button onClick={() => createPlaylistHandler(singleVideo)}>
                    Create playlist
                  </button>
                </label>
                <button onClick={getPlaylists} className="mx-2">get playlist</button>
              </div>
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
