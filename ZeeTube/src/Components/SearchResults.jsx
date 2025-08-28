import React, { Fragment, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SERACH_QUERY_API } from "../Utils/constants";
import SearchVideo from "./SearchVideo";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParam.get("search_query");
  useEffect(() => {
    getVidoes();
    dispatch(toggleMenu());
  }, []);

  const getVidoes = async () => {
    const res = await fetch(YOUTUBE_SERACH_QUERY_API + id);
    const data = await res.json();
    setData(data?.items || []);
  };
  return (
    <Fragment>
      <div className=" w-full  ">
        {data?.map((el) => {
          return (
            <Link to={`/watch?v=${el?.id?.videoId}`} key={el?.id?.videoId}>
              <SearchVideo {...el}></SearchVideo>
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default SearchResults;
