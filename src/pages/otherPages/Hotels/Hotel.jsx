import React from 'react'

const Hotel = () => {
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Italy",
      location: "Rome, Italy",
      rating: "4.8",
      reviews: "120",
      price: "$150",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "London Bridge Hotel",
      location: "London, UK",
      rating: "4.5",
      reviews: "85",
      price: "$220",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Dubai Burj Al Arab",
      location: "Dubai, UAE",
      rating: "4.9",
      reviews: "200",
      price: "$550",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Santorini Resort",
      location: "Santorini, Greece",
      rating: "4.7",
      reviews: "95",
      price: "$300",
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Swiss Alps Lodge",
      location: "Zurich, Switzerland",
      rating: "4.9",
      reviews: "150",
      price: "$400",
      image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Kyoto Ryokan",
      location: "Kyoto, Japan",
      rating: "4.6",
      reviews: "110",
      price: "$180",
      image: "https://images.unsplash.com/photo-1601918774757-6e5aa135f26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7fe] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-lg font-bold text-gray-500 mb-2">Top Selling</h3>
          <h1 className="text-5xl font-bold font-volkhov text-[#181E4B]">Top Destinations & Hotels</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer">
              <div className="h-64 overflow-hidden relative">
                 <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-orange-600 shadow-sm">
                    {hotel.price} <span className="text-gray-500 font-normal">/night</span>
                 </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-[#181E4B] mb-1">{hotel.name}</h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            {hotel.location}
                        </div>
                    </div>
                    <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-lg">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <span className="font-bold text-orange-600 text-sm">{hotel.rating}</span>
                    </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <span className="text-gray-400 text-sm">{hotel.reviews} reviews</span>
                    <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 active:scale-95 transition-all">
                        Book Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hotel
