import React from "react";
import portfolioHighlights from "../datas/data";
import VideoCard from "../components/videoCard";
import shortDet from "../datas/videoData.js";

const Works = () => {
  return (
    <section className="w-screen min-h-screen px-4 sm:px-8 lg:px-16">
      
      {/* Achievements */}
      <div className="py-10 max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolioHighlights.map((point, index) => (
            <li key={index} className="pointsLi text-sm sm:text-base">
              • {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Works Section */}
      <div className="flex flex-col items-center gap-10">

        <h1 className="text-sm sm:text-base bg-white text-black rounded-full px-4 py-1">
          My Works
        </h1>

        {/* Long Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/LLk1PW65Pes"
              allowFullScreen
            />
          </div>

          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iqyIUnec3HA"
              allowFullScreen
            />
          </div>

        </div>

        {/* Shorts */}
        <div className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
          
 

          {shortDet.map((item, i) => (
            <VideoCard key={i} shortDet={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;
