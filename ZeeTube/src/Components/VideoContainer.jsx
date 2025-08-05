import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    getVidoes();
  }, []);

  const getVidoes = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    setVideosData(data?.items || []);
  };
  return (
    <div className="p-4 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData.map((video, index) => (
          <Link to={`/watch?v=${video?.id}`} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
