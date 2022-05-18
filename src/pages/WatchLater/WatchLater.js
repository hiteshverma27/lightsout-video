import React from "react";
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
import axios from "axios"

function WatchLater() {
  const navigate = useNavigate();
  const { watchLater, setSingleVideo, videos, setWatchLater } = useVideo();
  const { isAuthenticated, token } = useAuth();

  const deleteFromWatchLaterHandler = (_id) => {
    const deleteFromWatchLater = async (_id) => {
      try {
        const watchLater = await axios.delete(`/api/user/watchlater/${_id}`, {
          headers: { authorization: token },
        });
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
    isAuthenticated ? deleteFromWatchLater(_id) : navigate("/login");
  };
  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className="h-10rem w-80vw flex-center-center ">
            <h3>Watch Later</h3>
          </div>
          <hr />
          <div className="h-90per w-80vw p-1 liked-video-container">
            {!watchLater.length===0?watchLater.map(
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
                    onClick={() => deleteFromWatchLaterHandler(_id)}
                  >
                    <span className="material-icons icon-s3 p-1">delete</span>
                  </button>
                </div>
              )
            ):<h2>No videos in this playlist yet. <Link to={"/explore"}>Explore</Link></h2>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { WatchLater };
