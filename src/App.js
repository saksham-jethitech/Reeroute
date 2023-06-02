import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/trucker" element={<Home isTrucker={true} />} />
        <Route exact path="/" element={<Home isTrucker={false} />} />
      </Routes>
    </div>
  );
}

export default App;
