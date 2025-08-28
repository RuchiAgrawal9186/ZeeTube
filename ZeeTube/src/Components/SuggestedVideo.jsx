import React, { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTED_VIDEO_API } from "../Utils/constants";

const SuggestedVideo = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getVidoes();
  }, []);

  const getVidoes = async () => {
    const res = await fetch(YOUTUBE_SUGGESTED_VIDEO_API + id);
    const data = await res.json();
    setData(data?.items || []);
  };
  return <div>{}</div>;
};

export default SuggestedVideo;
