import React from "react";
import { Link } from "react-router-dom";
import {
  errorToast,
  Footer,
  LikedVideoCard,
  NavBar,
  SideBar,
  successToast,
} from "../../components";
import { useAuth, useVideo } from "../../contexts";
import axios from "axios";
import "./LikedVideos.css";

function LikedVideos() {
  const { likedVideos, setSingleVideo, videos, setLikedVideos } = useVideo();
  const { token } = useAuth();

  const removeFromLikedVideos = async (_id) => {
    try {
      const likedVideos = await axios.delete(`/api/user/likes/${_id}`, {
        headers: { authorization: token },
      });
      successToast("Video removed from liked videos!");
      setLikedVideos(likedVideos.data.likes);
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
          <div className="h-10rem w-80vw flex-center-center ">
            <h3>Liked Videos</h3>
          </div>
          <hr />
          <div className="h-90per w-80vw p-1 liked-video-container">
            {likedVideos.map(
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
                    onClick={() => removeFromLikedVideos(_id)}
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

export { LikedVideos };
