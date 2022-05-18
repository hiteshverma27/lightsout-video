import React from "react";

function LikedVideoCard({
  _id,
  title,
  creator,
  thumbnail,
  views,
  duration,
  description
}) {
  return (
    <div className="liked-video-card p-1 m-1 flex" title={title}>
      <img src={thumbnail} alt={title} className="liked-card-img" />
      <div>
        <div className="flex-space_between-center ">
          <h3 className="m-1">{title}</h3>
        </div>
        <h4 className="m-1">{creator} </h4>
        <p className="m-1 video-description">
          {description}
        </p>
        <div className="flex mr-auto">
          <span className="icons m-1">
            <span className="material-icons icon-s2 p-1">visibility</span> {views}
          </span>
          <span className="icons m-1">
            <span className="material-icons icon-s2 p-1">timer</span> {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
LikedVideoCard.defaultProps={
  thumbnail :"https://user-images.githubusercontent.com/87027579/168142026-c598c61e-1fb8-42ab-ba0b-31ff9327c7f9.jpg",
  avatar:"https://yt3.ggpht.com/PVF4vIcVEtapRrU5SnmbKwK4hTy7n6x_Sfas6ruR_62ZbF2sc5ydQQ0IBPTHvphxcgdBgMcuc_M=s48-c-k-c0x00ffffff-no-rj",
  views:"1M",
  title: "Video title",
  duration:"10:00",
  description:"Alex Albon is a completely different driver in 2022 to the one who looked hopelessly lost during his final months with Red Bull Racing two seasons ago. \nThere was an element of risk for Williams in signing him, as despite Albon being highly-regarded as a driver with tremendous ability, he struggled when up against Max Verstappen at Red Bull. \nThe hope was always that Albon’s blend of F1 experience, top-team know-how and determination to reignite his F1 career would coalesce and he’d finally fulfil his prodigious potential in F1. Based on the first five races of the season it was an inspired signing - giving Williams a talismanic driver to replace the seemingly-irreplaceable George Russell."
}

export { LikedVideoCard };
