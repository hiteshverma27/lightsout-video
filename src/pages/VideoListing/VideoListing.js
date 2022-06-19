import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { Footer, NavBar, SideBar, VideoCard } from "../../components";
import { useVideo } from "../../contexts";
import "./VideoListing.css";

function VideoListing() {
  const { videos, setSingleVideo, categoriesToFilter, setCategoriesToFilter } =
    useVideo();
  const categoryChipClickHandler = (category) => {
    if (categoriesToFilter.includes(category)) {
      setCategoriesToFilter(
        categoriesToFilter.filter((item) => item !== category)
      );
    } else {
      setCategoriesToFilter([...categoriesToFilter, category]);
    }
  };
  const scrollToPosition = (top = 0) => {
    try {
      /**
       * Latest API
       */
      window.scroll({
        top: top,
        left: 0,
      });
    } catch (_) {
      /**
       * Fallback
       */
      window.scrollTo(0, top);
    }
  };
  useEffect(() => scrollToPosition(0), []);
  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className=" w-80vw chips-container">
            <button
              className={`category-chips m-2 p-1 ${
                categoriesToFilter.length === 3 ||
                categoriesToFilter.length === 0
                  ? `chip-active`
                  : ""
              }`}
              onClick={(e) => setCategoriesToFilter([])}
            >
              All
            </button>
            {categories.map(({ categoryName }) => (
              <button
                className={`category-chips m-2 p-1 ${
                  categoriesToFilter.includes(categoryName) ? "chip-active" : ""
                }`}
                key={categoryName}
                onClick={(e) => categoryChipClickHandler(categoryName)}
              >
                {categoryName}
              </button>
            ))}
          </div>
          <hr />
          <div className="h-90per w-80vw flex flex-wrap p-2 video-cards flex-center-center mb-1">
            {videos
              .filter((item) =>
                categoriesToFilter.length === 0
                  ? item
                  : categoriesToFilter.includes(item.category)
              )
              .map(
                ({
                  _id,
                  title,
                  creator,
                  thumbnail,
                  views,
                  avatar,
                  duration,
                }) => (
                  <div
                    key={_id}
                    onClick={async () =>
                      await setSingleVideo(
                        videos.filter((item) => item._id === _id)[0]
                      )
                    }
                  >
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
