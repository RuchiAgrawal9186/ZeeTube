import React from 'react'

const VideoCardSkeleton = () => {
  return (
    <div className="cursor-pointer">
      {/* Thumbnail Skeleton */}
      <div className="w-full aspect-video overflow-hidden rounded-xl bg-gray-300 animate-pulse"></div>

      {/* Title Skeleton */}
      <div className="mt-2">
        <div className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse mt-2"></div>
        <div className="h-3 bg-gray-200 rounded-md w-1/2 animate-pulse mt-2"></div>
        <div className="h-3 bg-gray-200 rounded-md w-2/3 animate-pulse mt-2"></div>
      </div>
    </div>
  );
}

export default VideoCardSkeleton
