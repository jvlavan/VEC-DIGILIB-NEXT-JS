"use client";
import React from "react";
import { useEffect, useState } from "react";
import App from "@/components/App";
import { Spinner } from "@nextui-org/react";

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

export default Page;
