import React from 'react'

const Booking = () => {
  return (
    <div className="min-h-screen bg-[#f9f7fe] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Content & Steps */}
        <div className="lg:w-1/2 space-y-8 self-center">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-500">Easy and Fast</h3>
            <h1 className="text-5xl font-bold font-volkhov text-[#181E4B] leading-tight">
              Book your next trip <br /> in 3 easy steps
            </h1>
          </div>

          <div className="space-y-8 mt-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-[#F0BB1F] flex items-center justify-center shrink-0 shadow-lg shadow-[#F0BB1F]/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 text-lg">Choose Destination</h4>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-[#F15A2B] flex items-center justify-center shrink-0 shadow-lg shadow-[#F15A2B]/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 text-lg">Make Payment</h4>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-[#006380] flex items-center justify-center shrink-0 shadow-lg shadow-[#006380]/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 text-lg">Reach Airport on Selected Date</h4>
                <p className="text-gray-500 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 p-8 w-full max-w-md relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-volkhov">Book Your Flight</h3>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Destination</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Check-in</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Check-out</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Guests</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-600 appearance-none cursor-pointer">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Class</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-600 appearance-none cursor-pointer">
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>

              <button className="w-full py-4 mt-4 bg-gradient-to-t from-rose-500 to-red-400 text-white rounded-xl font-bold text-lg shadow-lg shadow-rose-500/30 hover:shadow-rose-500/40 active:scale-95 transition-all duration-200">
                Book Now
              </button>
            </form>

            {/* Decorative Card Behind */}
            <div className="absolute -bottom-10 -right-10 -z-10 w-full h-full bg-orange-50 rounded-3xl opacity-50 hidden md:block"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
