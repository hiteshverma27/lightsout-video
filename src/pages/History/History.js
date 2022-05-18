import React, { useEffect } from "react";
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
import axios from "axios";

function History() {
  const { history, videos, setSingleVideo, setHistory } = useVideo();
  const { isAuthenticated, token } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const getHistory = async () => {
      try {
        const history = await axios.get(`/api/user/history`, {
          headers: { authorization: token },
        });
        setHistory(history.data.history);
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    isAuthenticated ? getHistory() : navigate("/login");
  }, [isAuthenticated,navigate,setHistory,token]);

  const deleteFromHistory = (_id) => {
    const deleteVideoFromHsitory = async (_id) => {
      try {
        const history = await axios.delete(`/api/user/history/${_id}`, {
          headers: { authorization: token },
        });
        setHistory(history.data.history);
        successToast("Video deleted from history!");
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    isAuthenticated ? deleteVideoFromHsitory(_id) : navigate("/login");
  };
  const clearAllHistory = async () => {
    try {
      const history = await axios.delete(`/api/user/history/all`, {
        headers: { authorization: token },
      });
      setHistory(history.data.history);
      successToast("History cleared!");
    } catch (error) {
      error.response.status === 409
        ? successToast("Video already exist in watch later!")
        : errorToast("Something went wrong while adding video to watch later!");
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
          <div className="h-10rem w-80vw flex-space_between-center ">
            <h3 className="mx-4">History</h3>
            <button
              className="mx-4"
              title="Clear History"
              onClick={clearAllHistory}
            >
              <span className="material-icons icon-s3 p-1">delete</span>
            </button>
          </div>
          <hr />
          <div className="h-90per w-80vw p-1 liked-video-container">
            {!history.length===0? history.map(
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
                      _id={_id}
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
                    onClick={() => deleteFromHistory(_id)}
                  >
                    <span className="material-icons icon-s3 p-1">delete</span>
                  </button>
                </div>
              )
            ):<h2>Nothing to see in here <Link to={"/explore"}>Explore</Link></h2>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { History };
