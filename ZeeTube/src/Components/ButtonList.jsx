import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useRef } from "react";

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 200;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const ButtonListData = [
    "All",
    "Podcasts",
    "Data Structures",
    "Music",
    "Resumes",
    "Gujarati cinema",
    "Comedy cluns",
    "News",
    "Cooking",
    "Resumes",
    "Kapil sharma",
    "Libra",
    "Study Skills",
    "Auditions",
    "Web development",
    "Thoughts",
  ];
  return (
    <div className="sticky top-0 flex items-center bg-white px-4 py-2">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow-md rounded-full p-1"
      >
        <IconChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Button List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-2 overflow-x-hidden px-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {ButtonListData.map((el, index) => (
          <button
            key={index}
            className="whitespace-nowrap px-4 py-1 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-medium"
          >
            {el}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow-md rounded-full p-1"
      >
        <IconChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ButtonList;
