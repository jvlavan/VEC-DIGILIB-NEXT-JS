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
        "https://newsapi.org/v2/everything?q=science%news&apiKey=" +
          process.env.NEXT_PUBLIC_NEWS_API +
          "&pageSize=12"
      )
      .then((response) => {
        var news = response.data.articles.filter(
          (news) => news.urlToImage != null
        );
        news = news.filter((news) => news.url != "https://removed.com/");
        setnews(news);
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
      <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-items-center">
        {news.map((news, index) => (
          <>
            <div
              key={index}
              className="max-w-sm h-98 m-5 bg-white border border-gray-200 rounded-lg shadow "
            >
              <img
                className="object-cover rounded-t-lg "
                src={news.urlToImage || "/news.jpg"}
                alt={news.title}
              />

              <div className="p-5">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 ">
                  {news.title}
                </h5>

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
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
