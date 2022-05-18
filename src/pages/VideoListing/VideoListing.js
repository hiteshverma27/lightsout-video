import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { Footer, NavBar, SideBar, VideoCard } from "../../components";
import { useVideo } from "../../contexts";
import "./VideoListing.css";

function VideoListing() {
  const { videos, setSingleVideo } = useVideo();

  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className=" w-80vw chips-container">
            <button className="category-chips m-2 p-1 chip-active">All</button>
            {categories.map(({ categoryName }) => (
              <button className="category-chips m-2 p-1" key={categoryName}>
                {categoryName}
              </button>
            ))}
          </div>
          <hr />
          <div className="h-90per w-80vw flex flex-wrap p-2 video-cards flex-center-center mb-1">
            {videos.map(
              ({ _id, title, creator, thumbnail, views, avatar, duration }) => (
                <div key={_id} onClick={async ()=>await setSingleVideo(videos.filter((item)=>item._id===_id)[0])}>
                  <Link to={`/video/${_id}`}>
                    <VideoCard
                      _id={_id}
                      title={title}
                      creator={creator}
                      thumbnail={thumbnail}
                      views={views}
                      avatar={avatar}
                      duration={duration}
                    />
                  </Link>
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

export { VideoListing };
