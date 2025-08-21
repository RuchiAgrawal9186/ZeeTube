import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../Utils/constants';
import Comment from './Comment';

const Comments = ({id}) => {

const [comments,setComments]=useState([])
    useEffect(() => {
      getVidoes();
    }, []);
  
    const getVidoes = async () => {
      const res = await fetch(YOUTUBE_COMMENTS_API+id);
      const data = await res.json();
console.log(data?.items)
      setComments(data?.items || []);
    };
  return (
    <div className="w-full  ">
      <h1 className="text-2xl font-bold">Comments</h1>
      {comments?.map((el) => (
        <Comment key={el?.id} {...el} />
      ))}
    </div>
  );
}

export default Comments
