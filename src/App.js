import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, NotFound, VideoListing } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="mock" element={<MockmanEs />} />
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
