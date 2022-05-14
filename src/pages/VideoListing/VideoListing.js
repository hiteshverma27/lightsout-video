import React from "react";
import { categories } from "../../backend/db/categories";
import { Footer, NavBar, SideBar, VideoCard } from "../../components";
import "./VideoListing.css";

function VideoListing() {
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
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { VideoListing };
