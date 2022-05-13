import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, NotFound } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="mock" element={<MockmanEs />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
