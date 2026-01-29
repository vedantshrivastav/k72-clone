import React from "react";

const ProjectCard = ({ image1, image2 }) => {
  return (
    <>
      <div className="w-1/2 group h-full transition-all relative rounded-none hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 h-full w-full left-0 bg-black/10">
          <h2 className="text-6xl font-[font-1] uppercase border-3 pt-4 px-4 text-white border-white rounded-full">
            Vior le projets
          </h2>
        </div>
      </div>
      <div className="w-1/2 group h-full transition-all relative rounded-none hover:rounded-[70px] overflow-hidden">
        <img className="h-full w-full object-cover" src={image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 h-full w-full left-0 bg-black/10">
          <h2 className="text-6xl font-[font-1] uppercase border-3 pt-4 px-4 text-white border-white rounded-full">
            Vior le projets
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
