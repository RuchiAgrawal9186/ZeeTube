import {
  IconBallFootball,
  IconBrandYoutube,
  IconClock,
  IconClockPause,
  IconDeviceGamepad2,
  IconFileMinus,
  IconFlame,
  IconHeart,
  IconHelpCircle,
  IconHome,
  IconHome2,
  IconMessageCircle,
  IconMusic,
  IconPlayerPlay,
  IconPlaylist,
  IconPlaystationSquare,
  IconSettings,
  IconThumbUp,
  IconVideo,
  IconX,
} from "@tabler/icons-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../Utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch()

  // early return pattern
  // if (!isMenuOpen) return null;

  const handleCloseMenu = () => {
      dispatch(toggleMenu()); // close menu on overlay or icon click
    };

  const sidebarData = [
    {
      title: "",
      items: [
        { name: "Home", icon: <IconHome2 size={20} />, link: "/" },
        { name: "Shorts", icon: <IconPlayerPlay size={20} />, link: "/" },
        {
          name: "Subscriptions",
          icon: <IconBrandYoutube size={20} />,
          link: "/",
        },
      ],
    },
    {
      title: "You",
      items: [
        { name: "History", icon: <IconClock size={20} />, link: "/" },
        {
          name: "Playlists",
          icon: <IconPlaylist size={20} />,
          link: "/",
        },
        {
          name: "Your Videos",
          icon: <IconVideo size={20} />,
          link: "/",
        },
        {
          name: "Watch Later",
          icon: <IconClockPause size={20} />,
          link: "/",
        },
        { name: "Liked Videos", icon: <IconHeart size={20} />, link: "/" },
      ],
    },
    {
      title: "Explore",
      items: [
        { name: "Trending", icon: <IconFlame size={20} />, link: "/" },
        { name: "Music", icon: <IconMusic size={20} />, link: "/" },
        {
          name: "Gaming",
          icon: <IconDeviceGamepad2 size={20} />,
          link: "/",
        },
        {
          name: "Sports",
          icon: <IconBallFootball size={20} />,
          link: "/",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          name: "Settings",
          icon: <IconSettings size={20} />,
          link: "/",
        },
        { name: "Help", icon: <IconHelpCircle size={20} />, link: "/" },
        {
          name: "Send Feedback",
          icon: <IconMessageCircle size={20} />,
          link: "/",
        },
      ],
    },
  ];
  return (
    <div
      className={`h-screen overflow-y-auto  bg-white transition-all duration-300  fixed
        ${isMenuOpen ? "w-60" : "w-30"}`}
    >
      <button className="absolute top-0 left-0 md:hidden lg:hidden" onClick={handleCloseMenu}>
        <IconX stroke={2} />
      </button>
      <div className="mt-1">
        {sidebarData?.map((section, idx) => (
          <div key={idx} className="border-b py-3">
            {isMenuOpen && section?.title && (
              <p className="px-4 text-1xl font-bold mb-2">{section?.title}</p>
            )}
            {section?.items?.map((item, i) => (
              <Link to={item?.link} key={i}>
                <div
                  className={`flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-gray-100 cursor-pointer
                  ${!isMenuOpen ? "justify-center" : ""}`}
                >
                  {item?.icon}
                  {isMenuOpen && (
                    <span className="text-md font-semibold">{item?.name}</span>
                  )}
                </div>
                {!isMenuOpen && (
                  <p className="text-md font-semibold text-center">
                    {item?.name}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
