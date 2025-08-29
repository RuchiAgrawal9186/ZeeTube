import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../Utils/constants";
import Comment from "./Comment";
import CommentsSkeleton from "./CommentsSkeleton";

const Comments = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
  }, []);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const res = await fetch(YOUTUBE_COMMENTS_API + id);
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
      const data = await res.json();

      // check if YouTube API error
      if (data.error) {
        throw new Error(data.error.message);
      }

      setComments(data?.items || []);
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full  ">
      <h1 className="text-2xl font-bold">Comments</h1>
      {isLoading ? (
        Array.from({ length: 10 })?.map((_, i) => <CommentsSkeleton key={i} />)
      ) : error ? (
        <div className="text-center text-red-500 font-semibold py-10 text-4xl">
          ⚠️ {error}
        </div>
      ) : (
        comments?.map((el) => <Comment key={el?.id} {...el} />)
      )}
    </div>
  );
};

export default Comments;
