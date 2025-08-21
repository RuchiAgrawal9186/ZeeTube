import React, { Fragment, useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { getRandomSentence, randomNamegenerate } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [LiveMessge, setLiveMessage] = useState("");

  // API Polling

  useEffect(() => {
    let timeId = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNamegenerate(),
          message: getRandomSentence(),
        })
      );
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);
  return (
    <Fragment>
      <div className="border-2 rounded-t-sm w-full py-1 px-1 text-1xl">
        Top Chat
      </div>
      <div className="border-2  w-full h-[75dvh] overflow-y-auto  flex flex-col-reverse">
        {messages?.map((el, index) => {
          return <Chat key={index} {...el} />;
        })}
      </div>
      <div className="border-2 rounded-b-sm w-full py-2 px-1 text-1xl flex gap-2">
        <input
          type="text"
          placeholder="Chat..."
          className="w-[85%] px-2"
        />
        <button className="border-1 p-1">Send</button>
      </div>
    </Fragment>
  );
};

export default LiveChat;
