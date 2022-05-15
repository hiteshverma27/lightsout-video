import React from "react";
import { Footer, LikedVideoCard, NavBar, SideBar } from "../../components";

function History() {
  return (
    <>
      <NavBar />
      <div className="h-90vh flex test-border">
        <div className="w-20vw h-100per">
          <SideBar />
        </div>
        <div className="w-80vw test-border">
          <div className="h-10rem w-80vw flex-center-center ">
            <h3>History</h3>
          </div>
          <hr />
          <div className="h-90per w-80vw p-1 liked-video-container">
            <LikedVideoCard />
            <LikedVideoCard />
            <LikedVideoCard />
            <LikedVideoCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export { History };
