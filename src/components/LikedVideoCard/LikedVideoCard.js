import React from "react";

function LikedVideoCard() {
  return (
    <div className="liked-video-card p-1 m-1 flex">
      <img
        src="https://user-images.githubusercontent.com/87027579/168142026-c598c61e-1fb8-42ab-ba0b-31ff9327c7f9.jpg"
        alt=""
        className="liked-card-img"
      />
      <div>
        <div className="flex-space_between-center ">
          <h3 className="m-1">Titiguidgwud</h3>
          <button className="remove-btn" title="remove video">
            X
          </button>
        </div>
        <h4 className="m-1">Creator </h4>
        <p className="m-1 video-description">
          Apple made some pretty great headphones with a pretty dumb case.While
          the Apple AirPod Max is a great pair of headphones with best-in-class
          active noise cancelling (ANC) and a good sound signature, it also has
          a few annoying quirks that make it very obviously an Apple product. If
          you live in the Apple ecosystem and already love your AirPods Pro,
          then the AirPods Max is more of the same just in a pair of over-ears.
        </p>
        <div className="flex mr-auto">
          <span className="icons m-1">
            <span className="material-icons icon-s2 p-1">visibility</span> 20 M
          </span>
          <span className="icons m-1">
            <span className="material-icons icon-s2 p-1">timer</span> 32:90
          </span>
        </div>
      </div>
    </div>
  );
}

export { LikedVideoCard };
