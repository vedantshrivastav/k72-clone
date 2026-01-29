import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".box",
      { height: 160 }, // start height
      {
        height: 400, // end height
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: true, // remove later
        },
      },
    );
  });

  return (
    <div className="text-xl h-[200vh] flex items-center justify-center">
      <div className="box flex items-center justify-center h-40 w-40 bg-red-200">
        test
      </div>
    </div>
  );
};

export default Test;
