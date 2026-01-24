import React from "react";
import Video from "../components/Home/Video.jsx";
import HomeTopText from "../components/Home/HomeTopText.jsx";
import HomeBottomText from "../components/Home/HomeBottomText.jsx";
const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-2 overflow-hidden relative flex flex-col justify-between">
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
