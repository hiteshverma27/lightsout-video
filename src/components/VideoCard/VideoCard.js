import React from "react";
import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="card-container flex flex-wrap m-2 ">
      <div className="w-100per h-20rem m-1 flex-center-center flex img-container">
        <img
          src="https://user-images.githubusercontent.com/87027579/168142026-c598c61e-1fb8-42ab-ba0b-31ff9327c7f9.jpg"
          alt=""
          className="video-card-img"
        />
      </div>
      <div className="w-100per m-1 h-100per flex">
        <img
          src="https://i.pravatar.cc/300?img=1"
          className="avatar avatar-size-1 m-1"
          alt=""
        />
        <div className="w-100per">
          <div className="flex-space_between-center w-80per">
            <h4 className="m-1 overflow-title">
              Neural Networks from Scratch - P.1 Intro and Neuron Code
            </h4>
            <span className="material-icons m-1 cursor-pointer">more_vert</span>
          </div>
          <div className="m-1">Creator name</div>
          <div className="flex-space_between-center w-80per">
            <div className="m-1">
              <div className="flex-space_between-center">
                <span className="material-icons icon-s2">
                  <span className="material-symbols-outlined">visibility</span>
                </span>{" "}
                20 M
              </div>{" "}
            </div>
            <div className="m-1">
              <div className="flex-space_between-center">
                <span className="material-icons icon-s2">timer</span> timer
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
