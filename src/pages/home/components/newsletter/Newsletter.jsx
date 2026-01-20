import React from "react";
const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-40">

      <div className="relative flex items-center justify-center bg-[#f9f7fe]  [clip-path:inset(0px_0px_0px_0px_round_100px_16px_16px_16px)] sm:p-16 p-8 overflow-hidden" >
        <div className="absolute -bottom-15 -left-15 w-80 h-80 bg-indigo-600/20 rounded-full " />
        <div className="absolute -top-15 -right-15 w-80 h-80 bg-indigo-600/20 rounded-full " />
        <div className="relative z-10 flex sm:gap-20 gap-10 flex-col items-center max-w-4xl text-center" >
          <h1 className="text-4xl sm:leading-13 leading-10 font-bold text-[#5e6282] max-sm:text-3xl">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
          <div className="flex max-sm:flex-col gap-6 md:w-2xl w-full ">
            <div className="flex items-center gap-2 bg-white px-6 rounded-lg w-full shadow-md inset-2">
              {/* Inline mail icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 18.5v-12zM4.5 6l7.5 5L19.5 6" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Your Email"
                className=" h-14 bg-transparent border-none outline-none "
              />
            </div>
            <button className="px-10 py-4 bg-linear-to-t from-rose-500 to-red-400 text-white rounded-xl active:scale-95 transition-transform duration-150">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
