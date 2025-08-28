import React, { Fragment } from "react";
import moment from "moment";
import { IconUserCircle } from "@tabler/icons-react";

const SearchVideo = ({ snippet }) => {
  const { thumbnails, title, description, publishedAt, channelTitle } = snippet;
  //     {
  //     "kind": "youtube#searchResult",
  //     "etag": "T1U_sGRM-Z57AhPLBGzfuS4tflk",
  //     "id": {
  //         "kind": "youtube#video",
  //         "videoId": "9H-p1mkXPFA"
  //     },
  //     "snippet": {
  //         "publishedAt": "2025-08-24T17:59:53Z",
  //         "channelId": "UC3r_XFLWzM9JkgwYT44nmsQ",
  //         "title": "iPhone 17 Pro Max Trailer Official Look Launch | Apple Event",
  //         "description": "iPhone 17 Pro Max Trailer Official Look Launch | Apple Event iPhone 17 Pro Max Launch iPhone 17 Pro Max Release Date ...",
  //         "thumbnails": {
  //             "default": {
  //                 "url": "https://i.ytimg.com/vi/9H-p1mkXPFA/default.jpg",
  //                 "width": 120,
  //                 "height": 90
  //             },
  //             "medium": {
  //                 "url": "https://i.ytimg.com/vi/9H-p1mkXPFA/mqdefault.jpg",
  //                 "width": 320,
  //                 "height": 180
  //             },
  //             "high": {
  //                 "url": "https://i.ytimg.com/vi/9H-p1mkXPFA/hqdefault.jpg",
  //                 "width": 480,
  //                 "height": 360
  //             }
  //         },
  //         "channelTitle": "DrTech",
  //         "liveBroadcastContent": "none",
  //         "publishTime": "2025-08-24T17:59:53Z"
  //     }
  // }
  return (
    <Fragment>
      <div className="flex w-full gap-4 my-4  h-80">
        <div className="aspect-video rounded-2xl w-[45%] p-1">
          <img
            src={thumbnails?.high?.url}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-sm text-gray-800 font-semibold">
            {/* {Number(viewCount).toLocaleString()} views •{" "} */}
            {moment(publishedAt).fromNow()}
          </p>

          <div className="flex w-full gap-1 my-2  ">
            <div className="w-[30px] h-[30px]  ">
              {/* <img src={""} alt="url" className="object-contain" /> */}
              <IconUserCircle stroke={2} className="w-6 h-6 cursor-pointer" />
            </div>

            <div>
              <p className="text-1px">
                <span className="font-bold mr-1">{channelTitle}</span>
              </p>
            </div>
          </div>

          <p className="text-1xl">{description}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchVideo;
