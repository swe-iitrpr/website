import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import HeroSection from "./components/HeroSection";
import WhoAreWe from "./components/WhoAreWe";
import Mission from "./components/Mission";
import CoreTeam from "./components/CoreTeam";
import Events from "./components/Events";
import AllEvents from "./components/AllEvents";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* <Navbar />
      <main>
        <HeroSection />
        <WhoAreWe />
        <Mission />
        <CoreTeam />
        <Events />
      </main>
      <Footer /> */}

        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection/>
              <WhoAreWe />
              <Mission />
              <CoreTeam />
              <Events />
              <Footer />
            </>
          }
        />
        <Route path="/events" element={<AllEvents />} />
      </Routes>
    </div>
  );
};

export default App;
