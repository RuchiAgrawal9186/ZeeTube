import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return pattern
  if (!isMenuOpen) return null;

  let sidebarData = [
    {
      title: "",
      items: [
        { name: "Home", icon: "", link: "/" },
        { name: "Shorts", icon: "" },
        { name: "Subscription", icon: "" },
      ],
    },
    {
      title: "You",
      items: [
        { name: "History", icon: "" },
        { name: "Playlists", icon: "" },
        { name: "Your Videos", icon: "" },
        { name: "Watch Later", icon: "" },
        { name: "Liked Videos", icon: "" },
      ],
    },
  ];
  return (
    <div className="w-60 h-full overflow-y-auto">
      {sidebarData?.map((el) => {
        return (
          <div className="border-b-2">
            <h2>{el?.title}</h2>
            {el?.items?.map((item) => {
              return (
                <Link to={item?.link}>
                  <div>{item?.name}</div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
