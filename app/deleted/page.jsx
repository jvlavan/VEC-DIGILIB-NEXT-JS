import React from "react";

function Page() {
  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Account deleted successfully{" "}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            We feel sorry for leaving you .{" "}
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Want to create a new account?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Page;
