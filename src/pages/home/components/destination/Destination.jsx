import React from "react";
import Rome400 from "../../../../assets/responsive/rome-w400.webp";
import Rome800 from "../../../../assets/responsive/rome-w800.webp";
import Rome1200 from "../../../../assets/responsive/rome-w1200.webp";

import London400 from "../../../../assets/responsive/london-w400.webp";
import London800 from "../../../../assets/responsive/london-w800.webp";
import London1200 from "../../../../assets/responsive/london-w1200.webp";

import Europe400 from "../../../../assets/responsive/europe-w400.webp";
import Europe800 from "../../../../assets/responsive/europe-w800.webp";
import Europe1200 from "../../../../assets/responsive/europe-w1200.webp";

import Rome from "../../../../assets/rome.webp";
import London from "../../../../assets/london.webp";
import Europe from "../../../../assets/europe.webp";
import Arrow from "../../../../assets/arrow.webp";
import decore from "../../../../assets/decore3.webp";
const Destination = () => {
  const destination = [
    {
      image: Rome,
      srcSet: `${Rome1200} 1200w, ${Rome800} 800w, ${Rome400} 400w`,
      name: "Rome, Italy",
      price: "5,42k",
      days: "10",
    },
    {
      image: London,
      srcSet: `${London1200} 1200w, ${London800} 800w, ${London400} 400w`,
      name: "London, UK",
      price: "4.2k",
      days: "12",
    },
    {
      image: Europe,
      srcSet: `${Europe1200} 1200w, ${Europe800} 800w, ${Europe400} 400w`,
      name: "Full Europe",
      price: "15k",
      days: "28",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-16 mt-40 mb-24 px-6 relative ">
        <div className="text-center">
          <h1 className="text-2xl text-secondary font-semibold">Top Selling</h1>
          <h2 className="text-5xl font-bold text-primary max-sm:text-4xl font-volkhov">
            Top Destination
          </h2>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto relative">
            <img src={decore} alt="decore" loading="lazy" width="100" height="150" className="absolute -right-12 bottom-10 -z-2 max-md:hidden" />
          {destination.map((item, index) => {
            return (
              <div key={index} className="group overflow-hidden rounded-2xl h-100 w-full shadow-sm bg-white cursor-pointer transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl">
                <div className="overflow-hidden h-[77%]">
                  <img src={item.image} srcSet={item.srcSet} sizes="(max-width: 768px) 90vw, 600px" alt={item.name} loading="lazy" decoding="async" className="w-full object-cover transform transition-transform duration-300 group-hover:scale-105" width="600" height="420" />
                </div>
                <div className="px-4 pt-4 pb-5 space-y-2 ">
                  <div className="flex justify-between ">
                    <h4 className="text-secondary font-semibold ">{item.name}</h4>
                    <p className="font-medium text-secondary">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Arrow} alt="arrow" width="16" height="16" className="w-4" /> <p>{item.days} Days Trip</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destination;
