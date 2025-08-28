import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardSkeleton from "./VideoCardSkeleton";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
  }, []);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const data = await res.json();
      setVideosData(data?.items || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-4 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 25 }).map((_, i) => (
              <VideoCardSkeleton key={i} />
            ))
          : videosData?.map((video) => (
              <Link to={`/watch?v=${video?.id}`} key={video?.id}>
                <VideoCard info={video} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default VideoContainer;
