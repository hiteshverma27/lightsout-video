import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
    errorToast,
  Footer,
  LikedVideoCard,
  NavBar,
  SideBar,
  successToast,
} from "../../components";
import { useAuth, useVideo } from "../../contexts";

function PlayListContainer(playlistId) {
  const { setSingleVideo, videos, playlist, setPlaylist } = useVideo();
  const {token} = useAuth()
  const navigate = useNavigate();

  const deletePlaylist = async (_id) => {
    try {
       await axios.delete(`/api/user/playlists/${_id}`, {
        headers: { authorization: token },
      });
      successToast("Playlist deleted!");
      navigate("/playlist");
    } catch (error) {
      errorToast("Something went wrong!");
    }
    try {
        const res = await axios.get(`/api/user/playlists`, {
          headers: { authorization: token },
        });
        setPlaylist(res.data.playlists)
      } catch (error) {
        error.response.status === 500 &&
        errorToast("Something went wrong while deleting playlist!");
      }
  };

  const deleteVideoFromPlaylist=async(videoId, playlistId)=> {
    try {
       await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
        headers: { authorization: token },
      });
      successToast("Video deleted from playlist!");
      const res = await axios.get(`/api/user/playlists`, {
        headers: { authorization: token },
      });
      setPlaylist(res.data.playlists)
    } catch (error) {
      errorToast("Something went wrong!");
    }
    
  };


  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className="h-10rem w-80vw flex-space_between-center p-3">
            <h3>
              {
                playlist.filter(
                  (item) => item._id === playlistId.playlistId
                )[0][0].name
              }
              .
              {
                playlist.filter((item) => item._id === playlistId.playlistId)[0]
                  .videos.length
              }{" "}
              video
              {playlist.filter((item) => item._id === playlistId.playlistId)[0]
                .videos.length < 1
                ? ""
                : "s"}
            </h3>
            <button
              title="delete playlist"
              onClick={() =>
                deletePlaylist(
                  playlist.filter(
                    (item) => item._id === playlistId.playlistId
                  )[0]._id
                )
              }
            >
              <span className="material-icons icon-s3 p-1">delete</span>
            </button>
          </div>
          <hr />
          <div className="h-90per w-80vw p-1 liked-video-container">
            {playlist.filter((item) => item._id === playlistId.playlistId)[0]
                .videos.length===0?<h2>No videos in this playlist. <Link to={"/explore"}>Explore Videos</Link></h2> :playlist
              .filter((item) => item._id === playlistId.playlistId)[0]
              .videos.map(
                ({
                  _id,
                  title,
                  creator,
                  thumbnail,
                  views,
                  avatar,
                  duration,
                  description,
                }) => (
                  <div
                    key={_id}
                    onClick={async () =>
                      await setSingleVideo(
                        videos.filter((item) => item._id === _id)[0]
                      )
                    }
                    className="likeVideoCardContainer"
                  >
                    <Link to={`/video/${_id}`}>
                      <LikedVideoCard
                        title={title}
                        creator={creator}
                        thumbnail={thumbnail}
                        views={views}
                        avatar={avatar}
                        duration={duration}
                        description={description}
                      />
                    </Link>
                    <button
                      className="remove-btn m-2"
                      title="remove video from the playlist"
                      onClick={() => deleteVideoFromPlaylist(_id,playlist.filter(
                        (item) => item._id === playlistId.playlistId
                      )[0]._id)}
                    >
                      <span className="material-icons icon-s3 p-1">delete</span>
                    </button>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { PlayListContainer };
