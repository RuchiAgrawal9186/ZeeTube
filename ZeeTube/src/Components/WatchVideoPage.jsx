import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Video from "./Video";
import { YOUTUBE_VIDEO_API } from "../Utils/constants";
import SuggestedVideo from "./SuggestedVideo";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchVideoPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const id = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    // setVideosData(data?.items || []);
  };

  return (
    <div className="w-full overflow-auto   px-0">
      <div className="flex flex-col lg:flex-row gap-4 py-4">
        {/* Left Section: Video + Comments */}
        <div className="w-full lg:w-[66%] flex flex-col gap-4 mx-auto">
          {/* Video Player */}
          <div className="w-full aspect-video bg-black rounded-lg">
            <Video id={id} />
          </div>

          {/* Comments */}
          <div className="w-full ">
            <Comments id={id} />
          </div>
        </div>

        {/* Right Section: Suggested Videos */}
        <div className="w-full lg:w-[30%] mr-5">
          <LiveChat />
          <SuggestedVideo id={id}/>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoPage;
