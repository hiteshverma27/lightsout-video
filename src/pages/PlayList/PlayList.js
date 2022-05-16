import React from "react";
import { Link } from "react-router-dom";
import { Footer, NavBar, SideBar } from "../../components";
import "./PlayList.css";

const playlists = [
  { playListName: "Watch Later", to: "/watch-later" },
  { playListName: "Liked Videos", to: "/liked-videos" },
];

function PlayList() {
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
            {playlists.map(({ playListName, to }) => {
              return (
                <div
                  className="test-border flex-space_between-center playlist h-10rem m-3"
                  key={playListName}
                >
                  <h3 className="m-2">{playListName} </h3>
                  <Link to={to}>
                    <span className="material-icons m-2 cursor-pointer">
                      open_in_new
                    </span>
                  </Link>
                </div>
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
