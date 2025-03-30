import React from "react";

const Main = () => {
  return (
    <main className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
      ></div>
      <section className="font-semibold 2xl::h-[600px] sm:h-[500px] h-[450px] bg-gradient-to-t to-gray-800 from-black flex flex-col items-center justify-center">
        <div className="opacity-40 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fff,transparent_1px),linear-gradient(to_bottom,#fff,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <h1 className="mt-26 2xl:text-5xl text-4xl px-8 font-medium text-center tracking-tight leading-[120%] text-white">
        Who wants to refuse the 9-to-5 
        <p>and choose freedom, purpose, and fulfillment</p>
        </h1>
      </section>
    </main>
  );
};

export default Main;
