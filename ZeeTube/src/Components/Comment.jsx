import React, { Fragment } from "react";
import moment from "moment";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";

const Comment = ({ snippet }) => {
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    textDisplay,
    textOriginal,
authorChannelUrl,
    likeCount,
  } = snippet?.topLevelComment?.snippet;
  return (
    <Fragment>
      <div className="flex  w-full gap-3 my-2">
        <div className="w-[30px] h-[30px] rounded-full border-2 overflow-hidden ">
          <img src={authorProfileImageUrl} alt="url" className="object-contain"/>
        </div>
        <div className="flex-col">
          <p className="font-bold">
            {authorDisplayName}{" "}
            <span className="text-gray-500 text-1xl">
              {moment(publishedAt).fromNow()}
            </span>
          </p>
          <p>{textOriginal}</p>
          <div className="flex gap-2">
            <IconThumbUp stroke={2} /> <span>{likeCount}</span>
            <IconThumbDown stroke={2} />
            <span>0</span>
            <div className="w-[20px] h-[20px] rounded-full border-2 overflow-hidden ">
              <img src={authorChannelUrl} alt="url" />
            </div>
            <span>reply {snippet?.totalReplyCount}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Comment;
