import React from "react";
import LeftHeroImg from "../../../../assets/traveller.webp";
import wave from "../../../../assets/decore.webp";
import Plane from "../../../../assets/plane.webp";
import LeftHeroImg400 from "../../../../assets/responsive/traveller-w400.webp";
import LeftHeroImg800 from "../../../../assets/responsive/traveller-w800.webp";
import LeftHeroImg1200 from "../../../../assets/responsive/traveller-w1200.webp";
import LeftHeroImg400Avif from "../../../../assets/responsive/traveller-w400.avif";
import LeftHeroImg800Avif from "../../../../assets/responsive/traveller-w800.avif";
import LeftHeroImg1200Avif from "../../../../assets/responsive/traveller-w1200.avif";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-center max-lg:flex-col max-sm:gap-8 max-lg:text-center max-w-7xl mx-auto pt-30 lg:pt-18 px-6 ">
        {/* Decorative background: lazy and has explicit dimensions to avoid layout shift */}
        <div className="sm:space-y-6 space-y-4">
          <h4 className="sm:text-2xl text-lg font-bold text-orange-600/90">
            BEST DESTINATION AROUND THE WORLD
          </h4>
          <h1 className="sm:text-8xl text-5xl text-primary leading-none font-extrabold font-volkhov">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="sm:text-lg text-sm font-semibold text-secondary">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex items-center gap-4">
            {/* Use CSS scale transition instead of framer-motion to reduce bundle size */}
            <button className="px-6 py-4 bg-orange-600/95 text-white rounded-lg active:scale-95 transition-transform duration-150">
              Find Out More
            </button>
            <img
              src={wave}
              alt="decorative wave"
              loading="lazy"
              width="800"
              height="600"
              className="w-[65%] h-auto absolute top-0 right-0 -z-1"
            />

            <button className="flex items-center gap-2 text-lg drop-shadow-2xl drop-shadow-black/20 active:scale-95 transition-transform duration-150">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-rose-500 text-white">
                {/* Inline small SVG for the play icon to avoid adding an icon dependency */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M5 3v18l15-9L5 3z" fill="white" />
                </svg>
              </div>
              Play Demo
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-138 relative " style={{ aspectRatio: "7 / 8" }}>
            <img
              src={Plane}
              alt="plane"
              loading="lazy"
              width="100"
              height="120"
              className="absolute top-12 left-0 max-sm:top-8 max-sm:w-25 "
            />
            <img
              src={Plane}
              alt="plane"
              loading="lazy"
              width="100"
              height="120"
              className="absolute top-32 -right-25 -z-1 max-sm:hidden"
            />
            {/* LCP image: use responsive sources (srcset) and keep eager + decoding */}
            <picture>
              <source
                type="image/avif"
                srcSet={`${LeftHeroImg1200Avif} 1200w, ${LeftHeroImg800Avif} 800w, ${LeftHeroImg400Avif} 400w`}
                sizes="(max-width: 768px) 80vw, 700px"
              />
              <source
                type="image/webp"
                srcSet={`${LeftHeroImg1200} 1200w, ${LeftHeroImg800} 800w, ${LeftHeroImg400} 400w`}
                sizes="(max-width: 768px) 80vw, 700px"
              />
              <img
                src={LeftHeroImg}
                alt="Traveller woman"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="700"
                height="800"
                className="w-full"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
