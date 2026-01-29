import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projets from "./pages/Projets.jsx";
import Agence from "./pages/Agence.jsx";
import Navbar from "./components/Navigation/Navigation.jsx";
import FullScreenNav from "./components/Navigation/FullScreenNav.jsx";
import Test from "./pages/test.jsx";

const App = () => {
  return (
    <div className>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
