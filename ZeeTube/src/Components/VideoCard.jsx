import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className="cursor-pointer"
      // onClick={() =>
      //   window.open(`https://www.youtube.com/watch?v=${id}`, "_blank")
      // }
    >
      <div className="w-full aspect-video overflow-hidden rounded-xl bg-black">
        <img
          src={thumbnails?.high?.url}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-2">
        <h3 className="text-md font-semibold text-black bg-white line-clamp-2 mt-2">
          {title}
        </h3>
        <p className="text-xs text-gray-800 font-semibold mt-1">
          {channelTitle}
        </p>
        <p className="text-xs text-gray-800 font-semibold">
          {Number(viewCount).toLocaleString()} views •{" "}
          {new Date(publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
