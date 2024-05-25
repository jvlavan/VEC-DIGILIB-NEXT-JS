"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function BlogPage() {
  const [chatData, setchatData] = useState([]);
  const [loading, setloading] = useState(false);
  const [oldchat, setoldchat] = useState("");
  const [chat, setchat] = useState("");
  const [chatpayload, setchatpayload] = useState([
    {
      role: "system",
      content:
        "Your name is  VEC DIGICHAT ,you can't write code and you was developed by  developer named Lavan JV , Mistrai AI team and Velammal Engineering College",
    },
  ]);

  let chatdataarray = [
    {
      role: "system",
      content:
        "Your name is  VEC DIGICHAT ,you can't write code and you was developed by  developer named Lavan JV , Mistrai AI team and Velammal Engineering College",
    },
  ];
  const handleInputChange = (event) => {
    setchat(event.target.value);

    setoldchat(event.target.value);
    // console.log("Text typed:", event.target.value);
  };
  let chatpayloadhandler = async () => {
    // console.log(chat);
    setloading(true);
    chatdataarray = [...chatdataarray, { role: "user", content: chat }];
    //console.log(chatdataarray);
    //setchatData([...chatData, { role: "user", content: chat }]);

    setchat("");
    if (chatdataarray) {
      axios
        .post(
          "/api/llmgen",
          { messages: chatdataarray },
          {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_AUTHORISATION_KEY,
            },
          }
        )
        .then(async (response) => {
          //   console.log(response.data);
          chatdataarray = [
            { role: "user", content: oldchat },
            { role: "system", content: response.data.res.result.response },
          ];
          //    console.log(chatdataarray);
          setchatpayload([...chatdataarray]);
          //    console.log(chatpayload);
          // console.log(response.data.res.result.response);
          setloading(false);
          toast.success("One new message from VEC DigiChat!");
        });
    }
  };

  // console.log(chatpayload);
  return (
    <div className="flex h-[97vh] w-full flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm  sm:text-base sm:leading-7">
        <div className="flex items-start">
          <img
            className="mr-2 h-8 w-8 rounded-full"
            alt="VEC Digichat"
            src="/ai.jpg"
          />
          <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4  sm:max-w-md md:max-w-2xl">
            <p>
              Howdy user my name is VEC DIGICHAT you can ask me anything but I
              have some limitations
            </p>
          </div>
        </div>

        {chatpayload.length >= 2 &&
          chatpayload.map((item, index) => (
            <>
              {item.role === "system" ? (
                <div className="flex items-start" key={index}>
                  <img
                    className="mr-2 h-8 w-8 rounded-full"
                    src="/ai.jpg"
                    alt="VEC Digichat"
                  />
                  <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 sm:max-w-md md:max-w-2xl">
                    <p>{item.content}</p>
                  </div>
                </div>
              ) : null}
              {item.role === "user" ? (
                <div className="flex flex-row-reverse items-start" key={index}>
                  <img
                    className="ml-2 h-8 w-8 rounded-full"
                    src="/student.jpg"
                    alt="user DP"
                  />
                  <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 sm:min-h-0 sm:max-w-md md:max-w-2xl">
                    <p>{item.content}</p>
                  </div>
                </div>
              ) : null}
            </>
          ))}
        {loading && (
          <>
            {" "}
            <div className="flex items-start">
              <img
                className="mr-2 h-8 w-8 rounded-full"
                alt="VEC Digichat"
                src="/ai.jpg"
              />
              <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4  sm:max-w-md md:max-w-2xl">
                <p>
                  I am thinking hang on ,I will be answering you shortly....
                </p>
              </div>
            </div>
          </>
        )}
        <>
          <label htmlFor="chat-input" className="sr-only">
            Enter your prompt
          </label>
          <div className="relative">
            <textarea
              id="chat-input"
              className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none ring-2 ring-blue-600   sm:text-base"
              placeholder="Enter your prompt"
              rows="1"
              required
              onChange={handleInputChange}
              value={chat}
            ></textarea>
            <button
              onClick={chatpayloadhandler}
              className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  sm:text-base"
            >
              Send <span className="sr-only">Send message</span>
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
