import React, { Fragment, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SERACH_QUERY_API } from "../Utils/constants";
import SearchVideo from "./SearchVideo";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import SearchVideoSkeleton from "./SearchVideoSkeleton";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [searchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const id = searchParam.get("search_query");
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
    dispatch(toggleMenu());
  }, [id]);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      setError(null); // reset error before fetching
      const res = await fetch(YOUTUBE_SERACH_QUERY_API + id);

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      // check if YouTube API error
      if (data.error) {
        throw new Error(data.error.message);
      }

      setData(data?.items || []);
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="w-full">
        {isLoading ? (
          Array.from({ length: 10 })?.map((_, i) => (
            <SearchVideoSkeleton key={i} />
          ))
        ) : error ? (
          <div className="text-center text-red-500 font-semibold py-10 text-4xl">
            ⚠️ {error}
          </div>
        ) : data?.length === 0 ? (
          <div className="text-center text-gray-600 font-semibold py-10 text-4xl">
            No results found
          </div>
        ) : (
          data?.map((el) => (
            <Link to={`/watch?v=${el?.id?.videoId}`} key={el?.id?.videoId}>
              <SearchVideo {...el} />
            </Link>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default SearchResults;
