import React from 'react'
const VideoCard = ({ shortDet }) => {
  return (
 <div className="flex flex-col justify-center items-center gap-3">
     <iframe
        className="w-[240px] h-[426px] rounded-xl"
        src={shortDet.videoLink}
        allowFullScreen
      />
   
      <p>{shortDet.views}</p>
 </div>

  );
};

export default VideoCard