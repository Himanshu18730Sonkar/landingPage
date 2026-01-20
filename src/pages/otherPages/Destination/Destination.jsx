import React from 'react'

const Destination = () => {
  const destinations = [
    {
      id: 1,
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image: "https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      city: "Paris, France",
      price: "$6.5k",
      duration: "7 Days Trip",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      city: "New York, USA",
      price: "$8.1k",
      duration: "15 Days Trip",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      city: "Tokyo, Japan",
      price: "$9.2k",
      duration: "14 Days Trip",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f9f7fe] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-lg font-bold text-gray-500 mb-2">Top Selling</h3>
          <h1 className="text-5xl font-bold font-volkhov text-[#181E4B]">Top Destinations</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
              <div className="h-80 overflow-hidden">
                 <img src={dest.image} alt={dest.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-gray-500 font-medium">
                    <span className="text-lg text-[#5E6282]">{dest.city}</span>
                    <span className="text-lg text-[#5E6282]">{dest.price}</span>
                </div>
                
                <div className="flex items-center gap-3 text-[#5E6282] mb-4">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/></svg>
                    <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destination
