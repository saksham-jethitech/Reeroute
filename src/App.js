import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Footer from "./Components/Footer";
import ContactUs from "./ContactUs";
import Careers from "./Careers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home isTrucker={false} />} />
        <Route exact path="/trucker" element={<Home isTrucker={true} />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/carrers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
