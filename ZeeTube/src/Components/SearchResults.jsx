import React, { Fragment, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SERACH_QUERY_API } from "../Utils/constants";
import SearchVideo from "./SearchVideo";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [searchParam] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const id = searchParam.get("search_query");
  useEffect(() => {
    setIsLoading(true);
    getVidoes();
    dispatch(toggleMenu());
  }, []);

  const getVidoes = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(YOUTUBE_SERACH_QUERY_API + id);
      const data = await res.json();
      setData(data?.items || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Fragment>
      <div className="w-full">
        {setIsLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <SearchVideoSkeleton key={i} />
            ))
          : data?.map((el) => (
              <Link to={`/watch?v=${el?.id?.videoId}`} key={el?.id?.videoId}>
                <SearchVideo {...el} />
              </Link>
            ))}
      </div>
    </Fragment>
  );
};

export default SearchResults;
