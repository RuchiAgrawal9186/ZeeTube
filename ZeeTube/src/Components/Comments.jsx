import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../Utils/constants";
import Comment from "./Comment";
import CommentsSkeleton from "./CommentsSkeleton";

const Comments = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
  }, []);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(YOUTUBE_COMMENTS_API + id);
      const data = await res.json();

      setComments(data?.items || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full  ">
      <h1 className="text-2xl font-bold">Comments</h1>
      {isLoading
        ? Array.from({ length: 10 })?.map((_, i) => <CommentsSkeleton key={i} />)
        : comments?.map((el) => <Comment key={el?.id} {...el} />)}
    </div>
  );
};

export default Comments;
