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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "You",
        message: LiveMessge,
      })
    );
    setLiveMessage("");
  };
  return (
    <Fragment>
      <div className="border-1 rounded-t-sm w-full py-1 px-1 text-1xl font-bold">
        Top Chat
      </div>
      <div className="border-1  w-full h-[75dvh] overflow-y-auto  flex flex-col-reverse">
        {messages?.map((el, index) => {
          return <Chat key={index} {...el} />;
        })}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="border-1 rounded-b-sm w-full py-2 px-1 text-1xl flex gap-2">
          <input
            type="text"
            placeholder="Chat..."
            className="w-[85%] px-2"
            value={LiveMessge|| ""}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button className="border-1 p-1 bg-slate-400 rounded-md cursor-pointer" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default LiveChat;
