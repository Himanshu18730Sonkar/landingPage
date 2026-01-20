import React, { useState, useEffect } from "react";
import Mike from "../../../../assets/profile.png";
import Chris from '../../../../assets/profile2.webp'
import David from '../../../../assets/profile3.webp'
import Emily from '../../../../assets/profile4.webp'

const Testmonials = () => {
  const testimonials = [
    {
      profile: Mike,
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      review:
        "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    },
    {
      profile: Chris,
      name: "Chris Thomas",
      location: "CEO of Red Button",
      review:
        "The booking process was incredibly smooth. I found the perfect destination within minutes and the payment was secure and fast.",
    },
    {
      profile: Emily,
      name: "Emily Wilson",
      location: "Travel Blogger",
      review:
        "Absolutely amazing experience! The customer support team was very helpful in sorting out my itinerary. Highly recommended for hassle-free travel.",
    },
    {
      profile: David,
      name: "David Brown",
      location: "London, UK",
      review:
        "I loved how easy it was to compare flight prices. The interface is user-friendly and I saved a lot on my trip to Paris.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length, isHovered]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
      <div className="flex gap-4 justify-between items-center max-md:flex-col mb-20 mt-50 max-w-7xl mx-auto px-10 ">
        <div className="md:max-w-[50%] space-y-4 ">
          <p className="text-xl text-secondary font-semibold">Testmonials</p>
          <h4 className="text-5xl max-sm:text-center font-bold text-primary max-sm:text-4xl font-volkhov">
            What People Say <br className="max-sm:hidden " /> About Us
          </h4>
          <div className="flex gap-4 mt-10">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === i ? "bg-secondary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <div
          className="max-md:mt-20 relative w-full md:w-[45%] h-80 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((item, i) => {
            const offset =
              (i - index + testimonials.length) % testimonials.length;
            const style = {
              zIndex: offset === 0 ? 10 : 10 - offset,
              transform: `translateY(${offset === 0 ? 0 : 40 * offset}px) scale(${offset === 0 ? 1 : 1 - offset * 0.05})`,
              opacity: offset === 0 ? 1 : offset > 2 ? 0 : 1 - offset * 0.3,
              transition: 'transform 0.5s ease, opacity 0.5s ease'
            };

            return (
              <div
                key={i}
                style={style}
                className="absolute w-full max-w-[30rem] bg-white px-6 py-8 space-y-6 shadow-xl rounded-2xl border border-gray-100 testimonial-card"
              >
                <div className="absolute -top-8 -left-8 w-16 h-16 overflow-hidden rounded-full shadow-md ">
                  <img
                    src={item.profile}
                    alt="profile"
                    className=" object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                    width="64"
                    height="64"
                  />
                </div>
                <p className="text-primary">"{item.review}"</p>
                <div>
                  <h5 className="text-lg font-bold text-secondary">
                    {item.name}
                  </h5>
                  <p className="text-sm font-semibold text-secondary">
                    {item.location}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="absolute -right-6 md:-right-12 flex flex-col gap-3 z-20">
            <button
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-lg text-secondary hover:bg-gray-50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M7 14l5-5 5 5" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-lg text-secondary hover:bg-gray-50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M17 10l-5 5-5-5" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
