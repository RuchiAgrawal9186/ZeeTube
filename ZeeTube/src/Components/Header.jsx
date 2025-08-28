import React, { Fragment, useEffect, useState } from "react";
import { IconMenu2, IconSearch, IconUserCircle } from "@tabler/icons-react";
import logo from "../assets/ZeeTube_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { chcheResults } from "../Utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSugesstion] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  /*
searchCache : {
  iphone: [iphone1 ,iphone2]
  }
  */

  // debouncing search api
  useEffect(() => {
    let timerId = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugesstion(searchCache[searchQuery]);
      } else {
        getSearchVideo();
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  async function getSearchVideo() {
    let res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    let data = await res.json();
    setSugesstion(data?.items || []);

    dispatch(chcheResults({ [searchQuery]: data?.items }));
   
  }
  return (
    <Fragment>
      <div className="grid grid-cols-12 items-center px-4 py-2 shadow-md bg-white gap-4 md:grid-cols-12 sm:grid-cols-8 sticky top-0 ">
        {/* Left: Menu + Logo (col-span-3) */}
        <div className="col-span-4 flex items-center gap-4 ">
          <IconMenu2
            stroke={2}
            className="w-6 h-6 cursor-pointer "
            onClick={handleToggleMenu}
          />
          <img src={logo} alt="ZeeTube" className="h-8 w-auto" />
        </div>

        {/* Center: Search Bar (col-span-6) */}
        <div className="hidden sm:col-span-6 sm:block">
          <div className="relative w-full">
            <div className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onFocus={(e) => {
                  e.stopPropagation();
                  setShowPopup(true);
                }}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-full px-4 py-1 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-gray-100 border border-gray-300 border-l-0 px-4 py-1 rounded-r-full hover:bg-gray-200">
                <IconSearch stroke={2} />
              </button>
            </div>
            {showPopup && searchQuery && (
              <div
                className="
      absolute bg-white 
      z-[2000]   /* 👈 higher than ButtonList */
      py-2 border border-gray-200 rounded-b-2xl 
      w-full  px-5 mt-0.5 shadow-2xl
    "
              >
                {/* <ul className="items-center"> */}
                {suggestion?.slice(0, 10)?.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        navigate(
                          `/results?search_query=${item?.snippet?.title}`
                        );
                        setShowPopup(false);
                         setSearchQuery("");
                      }}
                      key={item?.id?.videoId}
                    >
                      <h3
                        className="flex gap-1 items-center py-1 hover:bg-gray-300"
                        key={item?.id?.videoId}
                      >
                        {" "}
                        <IconSearch stroke={2} style={{ height: "17px" }} />
                        <span className="text-1xl">{item?.snippet?.title}</span>
                      </h3>
                    </div>
                  );
                })}
                {/* </ul> */}
              </div>
            )}
          </div>
        </div>

        {/* Right: User Icon (col-span-3) */}
        <div className="col-span-8 lg:col-span-2 flex justify-end ">
          <IconUserCircle stroke={2} className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <div className="block sm:hidden w-full px-4 py-2 bg-white shadow-md">
        <div className="relative w-full">
          <div className="flex w-full">
            <input
              type="text"
              value={searchQuery}
              onFocus={(e) => {
                e.stopPropagation();
                setShowPopup(true);
              }}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-gray-100 border border-gray-300 border-l-0 px-4 py-2 rounded-r-full hover:bg-gray-200">
              <IconSearch stroke={2} />
            </button>
          </div>
          {showPopup && searchQuery && (
            <div
              className="
      absolute bg-white 
      z-[2000]   /* 👈 higher than ButtonList */
      py-2 border border-gray-200 rounded-b-2xl 
      w-full  px-5 mt-0.5 shadow-2xl
    "
            >
              {/* <ul className="items-center"> */}
              {suggestion?.slice(0, 10)?.map((item) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/results?search_query=${item?.snippet?.title}`);
                      setShowPopup(false);
                    }}
                    key={item?.id?.videoId}
                  >
                    <h3
                      className="flex gap-1 items-center py-1 hover:bg-gray-300"
                      key={item?.id?.videoId}
                    >
                      {" "}
                      <IconSearch stroke={2} style={{ height: "17px" }} />
                      <span className="text-1xl">{item?.snippet?.title}</span>
                    </h3>
                  </div>
                );
              })}
              {/* </ul> */}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
