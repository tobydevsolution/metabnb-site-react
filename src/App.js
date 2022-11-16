import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Places from "../src/pages/Places";

function App() {
  return (
    <div>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
