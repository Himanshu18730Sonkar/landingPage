import React from "react";
import EasyImg from '../../../../assets/travel.webp'
const EasyFast = () => {
  const steps = [
    {
      image: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2l3 5 5 .5-4 3 1 5-5-3-5 3 1-5-4-3L9 7 12 2z" fill="#fff"/>
        </svg>
      ),
      imgBg: "bg-amber-500",
      title: "Choose Destination & Dates",
      step: "Search destinations, pick travel dates and preferred flight options, then review available routes and fares.",
    },
    {
      image: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v6M6 12h12M4 20h16" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      imgBg: "bg-rose-600",
      title: "Secure Payment",
      step: "Pay securely with card or digital wallet; receive instant confirmation and an e-ticket.",
    },
    {
      image: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v10M6 6h12M4 20h16" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      imgBg: "bg-blue-700",
      title: "Prepare & Travel",
      step: "Complete online check-in, arrive at the airport with necessary documents, and enjoy your trip.",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center gap-4 max-md:flex-col mt-50 max-w-7xl mx-auto px-8">
        <div className="space-y-4">
          <p className="text-xl text-secondary font-semibold">Easy and Fast</p>
          <h4 className="text-5xl font-bold text-primary max-sm:text-4xl font-volkhov">
            Book Your Next Trip In 3 Easy Steps
          </h4>
          <div className="space-y-6 mt-8">
            {steps.map((item, index) => {
              return (
                <div key={index} className="flex gap-2.5 items-center">
                  <div
                    className={`${item.imgBg} w-10 h-10 shrink-0 rounded-md text-white/90 flex items-center justify-center`}
                  >
                    {item.image}
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-secondary">{item.title}</h5>
                    <p className="text-primary">{item.step}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="shrink-0 flex items-center justify-center max-sm:hidden">
          <img src={EasyImg} alt="easyTravel" width="420" height="300" className="shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default EasyFast;
