import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="mock" element={<MockmanEs />} />
      </Routes>
  );
}

export default App;
