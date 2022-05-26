import React from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar, SideBar } from "../../components";
import { useVideo } from "../../contexts";
import "./PlayList.css";

function PlayList() {
  const {playlist, setPlaylistId} = useVideo()
  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className="h-10rem w-80vw flex-center-center ">
            <h3>All PlayList</h3>
          </div>
          <hr />
          <div className="h-90per w-80vw p-2 mb-1 playlist-container">
            <div
              className="test-border flex-space_between-center playlist h-10rem m-3"
            >
              <h3 className="m-2">Liked Videos</h3>
              <Link to={"/liked-videos"}>
                <span className="material-icons m-2 cursor-pointer">
                  open_in_new
                </span>
              </Link>
            </div>
            <div
              className="test-border flex-space_between-center playlist h-10rem m-3"
            >
              <h3 className="m-2">Watch Later</h3>
              <Link to={"/watch-later"}>
                <span className="material-icons m-2 cursor-pointer">
                  open_in_new
                </span>
              </Link>
            </div>
            {playlist.map((item) => {
              return (
                <Link onClick={()=>setPlaylistId(item._id)} to={`/playlist/${item._id}`}
                key={item._id}>
                <div
                  className="test-border flex-space_between-center playlist h-10rem m-3"
                  key={item._id}
                >
                  <h3 className="m-2">{item[0].name} </h3>
                    <span className="material-icons m-2 cursor-pointer">
                      open_in_new
                    </span>
                </div>
                  </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { PlayList };
