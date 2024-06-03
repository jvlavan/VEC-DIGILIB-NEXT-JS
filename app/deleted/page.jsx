import React from "react";

function Page() {
  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Account deleted successfully{" "}
          </p>
          <p className="mb-4 text-lg font-light text-gray-200">
            We feel sorry for leaving you .{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
