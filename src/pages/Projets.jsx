import React from "react";
import ProjectCard from "../components/Projets/ProjectCard.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Projets = () => {
  const projets = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 80%",
        end: "top -20%",
        markers: true,
        scrub: true,
      },
    });
  });
  return (
    <div className="p-4 mb-[100vh]">
      <div className="pt-[45vh]">
        <h2 className="font-[font-2] text-[9.5vw] uppercase">Projets</h2>
      </div>
      <div className="-mt-10 lol">
        {projets.map((item, index) => (
          <div
            key={index}
            className="hero w-full h-[850px] mb-4 flex gap-4 overflow-hidden"
          >
            <ProjectCard image1={item.image1} image2={item.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
