import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoCardSkeleton from "./VideoCardSkeleton";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
  }, []);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const res = await fetch(YOUTUBE_VIDEOS_API);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setVideosData(data?.items || []);
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-4 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 25 }).map((_, i) => (
            <VideoCardSkeleton key={i} />
          ))
        ) : error ? (
          <div className="text-center text-red-500 font-semibold py-10 text-4xl">
            ⚠️ {error}
          </div>
        ) : (
          videosData?.map((video) => (
            <Link to={`/watch?v=${video?.id}`} key={video?.id}>
              <VideoCard info={video} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
