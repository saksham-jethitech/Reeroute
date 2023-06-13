import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Footer from "./Components/Footer";
import ContactUs from "./ContactUs";
import Careers from "./Careers";
import TermsAndConditions from "./TermsAndConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home isTrucker={false} />} />
        <Route exact path="/trucker" element={<Home isTrucker={true} />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/carrers" element={<Careers />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
        <Route
          exact
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
