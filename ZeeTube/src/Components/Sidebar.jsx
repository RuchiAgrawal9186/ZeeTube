import {
  IconClock,
  IconFileMinus,
  IconHome,
  IconPlaystationSquare,
  IconThumbUp,
  IconVideo,
} from "@tabler/icons-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  // if (!isMenuOpen) return null;

  const sidebarData = [
    {
      title: "",
      items: [
        { name: "Home", icon: <IconHome size={22} />, link: "/" },
        { name: "Shorts", icon: <IconFileMinus size={22} />, link: "/shorts" },
        {
          name: "Subscriptions",
          icon: <IconPlaystationSquare size={22} />,
          link: "/subscriptions",
        },
      ],
    },
    {
      title: "You",
      items: [
        { name: "History", icon: <IconClock size={22} />, link: "/history" },
        {
          name: "Playlists",
          icon: <IconVideo size={22} />,
          link: "/playlists",
        },
        {
          name: "Your Videos",
          icon: <IconPlaystationSquare size={22} />,
          link: "/your-videos",
        },
        {
          name: "Watch Later",
          icon: <IconClock size={22} />,
          link: "/watch-later",
        },
        {
          name: "Liked Videos",
          icon: <IconThumbUp size={22} />,
          link: "/liked",
        },
      ],
    },
  ];
  return (
    <div
      className={`h-full overflow-y-auto  bg-white transition-all duration-300 
        ${isMenuOpen ? "w-60" : "w-30"}`}
    >
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
                {item.icon}
                {isMenuOpen && (
                  <span className="text-md font-semibold">{item.name}</span>
                )}
              </div>
              {!isMenuOpen && (
                <p className="text-md font-semibold text-center">{item.name}</p>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
