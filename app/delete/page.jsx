"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <section className="min-w-screen grid  gap-4 mt-40 bg-black place-items-center">
      <div className="p-4 md:p-5 text-center">
        <Toaster />
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete your account?
        </h3>
        <button
          onClick={async () => {
            axios({
              method: "delete",
              url: "/api/delete-user",
            })
              .then((res) => {
                if (res.data.message) {
                  window.location.href = "/deleted";
                }
              })
              .catch((err) => toast(JSON.stringify(err)));
          }}
          type="button"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
        >
          Yes, I'm sure
        </button>
      </div>
    </section>
  );
}

export default Page;

function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <App />
      ) : (
        <>
          {" "}
          <div className="flex justify-center items-center mt-80">
            <Spinner label="Loading UI Please Wait..." color="warning" />
          </div>
        </>
      )}
    </>
  );
}
