import React from "react";
import ProjectCard from "../components/Projets/ProjectCard.jsx";
const Projets = () => {
  const projet = [
    "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
    "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
    "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
    "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
    "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
  ];
  return (
    <div className="p-4">
      <div className="pt-[45vh]">
        <h2 className="font-[font-2] text-[9.5vw] uppercase">Projets</h2>
      </div>
      <div className="-mt-10">
        {projet.map((item, index) => (
          <div key={index} className="w-full h-[850px] mb-4 flex gap-4">
            <ProjectCard imgSrc={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
