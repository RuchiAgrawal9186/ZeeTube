import React, { Fragment } from "react";
import moment from "moment";
import { IconUserCircle } from "@tabler/icons-react";

const SearchVideo = ({ snippet }) => {
  const { thumbnails, title, description, publishedAt, channelTitle } = snippet;

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row w-full gap-4 my-4 md:h-80 px-2">
        {/* Thumbnail */}
        <div className="w-full md:w-[45%] aspect-video rounded-2xl p-1">
          <img
            src={thumbnails?.high?.url}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-2/2 flex flex-col">
          <p className="text-lg md:text-2xl font-semibold line-clamp-2 pt-1">{title}</p>
          <p className="text-xs md:text-sm text-gray-800 font-semibold">
            {moment(publishedAt)?.fromNow()}
          </p>

          <div className="flex items-center gap-2 my-2">
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <IconUserCircle stroke={2} className="w-6 h-6 cursor-pointer" />
            </div>
            <p className="text-xs md:text-sm font-semibold text-gray-700">
              {channelTitle}
            </p>
          </div>

          <p className="text-md md:text-base text-gray-700 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchVideo;
