"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.mediastack.com/v1/news?access_key=" +
          process.env.NEXT_PUBLIC_NEWS_API +
          "&categories=technology&limit=10"
      )
      .then((response) => {
        // var news = response.data.articles.filter(
        //   (news) => news.urlToImage != null
        // );
        // news = news.filter((news) => news.url != "https://removed.com/");
        setnews(response.data.data);
      })
      .catch((error) => {
        //console.error("Error fetching the news:", error);
        toast.error("Error fetching the news: " + JSON.stringify(error));
      });
  }, []);

  if (!news.length) {
    return (
      <>
        {" "}
        <div className="flex justify-center items-center bg-black mt-80 ">
          <Spinner color="warning" />
        </div>
      </>
    );
  }
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 px-4 py-4 justify-items-center">
        {news.map((news, index) => (
          <>
            <div
              key={index}
              className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {news.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-gray-600">
                    {news.source}
                  </p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                  <img
                    alt={news.title}
                    src={news.image || "/news.jpg"}
                    className="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-pretty text-sm text-gray-500">
                  {news.description}
                </p>
              </div>

              <a
                href={news.url || "/"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 mt-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
