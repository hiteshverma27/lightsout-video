import React from "react";
import "./VideoCard.css";

function VideoCard({
  title,
  creator,
  thumbnail,
  views,
  avatar,
  duration
}) {
  
  return (
    <div className="card-container flex flex-wrap m-2 " title={title}>
      <div className="w-100per h-20rem m-1 flex-center-center flex img-container">
        <img
          src={thumbnail}
          alt={title}
          className="video-card-img"
        />
      </div>
      <div className="w-100per m-1 h-100per flex">
        <img
          src={avatar}
          className="avatar avatar-size-1 m-1"
          alt=""
        />
        <div className="w-100per">
          <div className="flex-space_between-center w-80per">
            <h4 className="m-1 overflow-title">{title} </h4>
          </div>
          <div className="m-1">{creator}</div>
          <div className="flex-space_between-center w-80per">
            <div className="m-1">
              <div className="flex-space_between-center">
                <span className="material-icons icon-s2">
                  <span className="material-symbols-outlined">visibility</span>
                </span>{" "}
                {views}
              </div>{" "}
            </div>
            <div className="m-1">
              <div className="flex-space_between-center">
                <span className="material-icons icon-s2">timer</span> {duration}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

VideoCard.defaultProps={
  thumbnail :"https://user-images.githubusercontent.com/87027579/168142026-c598c61e-1fb8-42ab-ba0b-31ff9327c7f9.jpg",
  avatar:"https://yt3.ggpht.com/PVF4vIcVEtapRrU5SnmbKwK4hTy7n6x_Sfas6ruR_62ZbF2sc5ydQQ0IBPTHvphxcgdBgMcuc_M=s48-c-k-c0x00ffffff-no-rj",
  views:"1M",
  title: "Video title",
  duration:"10:00"
}

export { VideoCard };
