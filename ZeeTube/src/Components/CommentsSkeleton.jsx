import React from 'react'

const CommentsSkeleton = () => {
  return (
    <div className="flex w-full gap-3 my-3 animate-pulse">
      {/* Avatar Skeleton */}
      <div className="w-[30px] h-[30px] rounded-full bg-gray-300"></div>

      {/* Comment Content Skeleton */}
      <div className="flex flex-col w-full gap-2">
        {/* Username + Time */}
        <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>

        {/* Comment Text */}
        <div className="h-3 bg-gray-200 rounded-md w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded-md w-1/2"></div>

        {/* Like/Dislike/Reply Row */}
        <div className="flex gap-3 mt-2">
          <div className="h-3 w-8 bg-gray-200 rounded-md"></div>
          <div className="h-3 w-8 bg-gray-200 rounded-md"></div>
          <div className="h-3 w-12 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default CommentsSkeleton
