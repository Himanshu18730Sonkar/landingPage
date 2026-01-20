import React, { useState, useEffect, useRef } from "react";
import Disk from "../../../../assets/disk.webp";
import Plane from "../../../../assets/plane.webp";
import Mic from "../../../../assets/mic.webp";
import Setting from "../../../../assets/setting.webp";
import Decore from "../../../../assets/decore2.webp";
import Plus from "../../../../assets/plus.webp";



const services = [
  {
    id: 1,
    icon: Disk,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    imgWidth: "w-15",
    decorePos: "bottom-0 left-8",
  },
  {
    id: 2,
    icon: Plane,
    title: "Best flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    imgWidth: "w-28",
    decorePos: "bottom-6 left-6",
  },
  {
    id: 3,
    icon: Mic,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    imgWidth: "w-10",
    decorePos: "top-0 left-4",
  },
  {
    id: 4,
    icon: Setting,
    title: "Customizaton",
    desc: 'We deliver outsourced aviation services for military customers"',
    imgWidth: "w-15",
    decorePos: "-bottom-4 -right-4",
  },
];

const Category = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Only enable auto-hover on small screens
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(max-width: 767px)");
    if (!m.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setHoveredIndex(idx);
            found = true;
          }
        });
        if (!found) setHoveredIndex(null);
      },
      {
        root: null,
        // center band: trigger when element crosses the center ~20% above/below center
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    const onResize = () => {
      if (!window.matchMedia("(max-width: 767px)").matches) setHoveredIndex(null);
    };
    window.addEventListener("resize", onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-16 mt-16 mb-24 px-6 relative">
        <img
          src={Plus}
          alt="plus"
          className="absolute xl:right-40 -top-8 right-2 max-md:hidden -z-1"
        />
        <div className="text-center">
          <h1 className="text-2xl text-secondary font-semibold">Category</h1>
          <h2 className="text-5xl font-bold text-primary max-sm:text-4xl font-volkhov">
            We Offer Best Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto w-full relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-full h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex flex-col justify-between items-center space-y-4 w-full h-full text-center border-2 border-transparent rounded-[2.5rem] px-8 py-10 transition-all duration-300 cursor-pointer bg-white relative z-10 ${
                  hoveredIndex === index
                    ? "border-amber-400 shadow-2xl -translate-y-2"
                    : "hover:border-amber-400 hover:shadow-2xl"
                }`}
              >
                <div className="relative">
                  <img
                    src={Decore}
                    alt="decore"
                    width="48"
                    height="48"
                    className={`absolute ${service.decorePos} w-12`}
                  />
                  <img
                    src={service.icon}
                    alt="group"
                    width="64"
                    height="64"
                    className={`${service.imgWidth} relative z-10`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-primary m-0">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-secondary">
                  {service.desc}
                </p>
              </div>
              <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-red-600 rounded-tl-[30px] rounded-br-[10px] -z-1 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
