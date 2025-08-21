import { IconUserCircle } from "@tabler/icons-react";
import React, { Fragment } from "react";

const Chat = ({ name, message }) => {
  return (
    <Fragment>
      <div className="flex w-full gap-2 my-2 px-1 ">
        <div className="w-[20px] h-[20px]  ">
          {/* <img src={""} alt="url" className="object-contain" /> */}
          <IconUserCircle stroke={2} className="w-6 h-6 cursor-pointer" />
        </div>

        <div>
          <p className="text-1px">
            <span className="font-bold mr-1">{name}</span> {message}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
