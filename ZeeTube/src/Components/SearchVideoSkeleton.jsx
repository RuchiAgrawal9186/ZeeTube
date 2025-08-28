import React from 'react'

const SearchVideoSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 my-4 md:h-80 px-2 animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-full md:w-[45%] aspect-video rounded-2xl bg-gray-300"></div>

      {/* Details Skeleton */}
      <div className="w-full md:w-2/2 flex flex-col gap-3">
        {/* Title */}
        <div className="h-5 md:h-7 bg-gray-300 rounded-md w-3/4"></div>

        {/* Published Time */}
        <div className="h-3 bg-gray-200 rounded-md w-1/4"></div>

        {/* Channel */}
        <div className="flex items-center gap-2 mt-2">
          <div className="w-[30px] h-[30px] rounded-full bg-gray-300"></div>
          <div className="h-3 bg-gray-200 rounded-md w-1/3"></div>
        </div>

        {/* Description */}
        <div className="h-3 bg-gray-200 rounded-md w-full"></div>
        <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded-md w-2/3"></div>
      </div>
    </div>
  );
}

export default SearchVideoSkeleton
