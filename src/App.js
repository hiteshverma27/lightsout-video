import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import {
  History,
  Home,
  LikedVideos,
  Login,
  NotFound,
  PlayList,
  Signup,
  SingleVideo,
  VideoListing,
  WatchLater,
} from "./pages";
import { Profile } from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="mock" element={<MockmanEs />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<VideoListing />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/liked-videos" element={<LikedVideos />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watch-later" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
