import React from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar, SideBar } from "../../components";
import { useVideo } from "../../contexts";
import "./PlayList.css";

function PlayList() {
  const { playlist, setPlaylistId } = useVideo();
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
            {playlist.length === 0 && (
              <h3>
                No PlayLists to show...
                <Link to={"/explore"} className="btn-primary-confirm m-1">
                  Explore videos
                </Link>
              </h3>
            )}
            {playlist.map((item) => {
              return (
                <Link
                  onClick={() => setPlaylistId(item._id)}
                  to={`/playlist/${item._id}`}
                  key={item._id}
                >
                  <div
                    className="test-border flex-space_between-center playlist h-10rem m-3 w-30rem"
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
