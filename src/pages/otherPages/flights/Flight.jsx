import React, { useState } from 'react'
import Plane from '../../../assets/plane.webp'

const sampleFlights = [
  { id: 1, airline: 'Skyways', flight: 'SK123', from: 'Los Angeles', to: 'New York', depart: '08:00', arrive: '16:30', duration: '5h 30m', price: 289 },
  { id: 2, airline: 'Aurora', flight: 'AU456', from: 'Los Angeles', to: 'New York', depart: '11:00', arrive: '19:45', duration: '5h 45m', price: 315 },
  { id: 3, airline: 'BlueJet', flight: 'BJ789', from: 'San Francisco', to: 'Chicago', depart: '09:30', arrive: '15:00', duration: '4h 30m', price: 199 },
  { id: 4, airline: 'Horizon', flight: 'HZ101', from: 'New York', to: 'London', depart: '20:00', arrive: '08:00', duration: '7h 0m', price: 699 },
]

const Flight = () => {
  const [form, setForm] = useState({ from: '', to: '', departDate: '', returnDate: '', passengers: 1, travelClass: 'economy' })
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    setError('')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!form.from || !form.to || !form.departDate) return setError('Please fill From, To and Depart date.')

    const filtered = sampleFlights.filter((f) => f.from.toLowerCase().includes(form.from.toLowerCase()) && f.to.toLowerCase().includes(form.to.toLowerCase()))
    setResults(filtered)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Search panel */}
          <aside className="lg:col-span-1 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Search Flights</h2>
            <p className="text-sm text-gray-500 mb-4">Find the best flights for your trip</p>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
                <input id="from" name="from" value={form.from} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" placeholder="City or airport" />
              </div>

              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
                <input id="to" name="to" value={form.to} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" placeholder="City or airport" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="departDate" className="block text-sm font-medium text-gray-700">Depart</label>
                  <input id="departDate" name="departDate" type="date" value={form.departDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600" />
                </div>
                <div>
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700">Return</label>
                  <input id="returnDate" name="returnDate" type="date" value={form.returnDate} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Passengers</label>
                  <input id="passengers" name="passengers" type="number" min="1" value={form.passengers} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600" />
                </div>
                <div>
                  <label htmlFor="travelClass" className="block text-sm font-medium text-gray-700">Class</label>
                  <select id="travelClass" name="travelClass" value={form.travelClass} onChange={handleChange} className="mt-1 block w-full rounded-md border-0 py-2 px-3 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600">
                    <option value="economy">Economy</option>
                    <option value="premium">Premium</option>
                    <option value="business">Business</option>
                  </select>
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="flex gap-3">
                <button type="submit" className="flex-1 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">Search</button>
                <button type="button" onClick={() => { setForm({ from: '', to: '', departDate: '', returnDate: '', passengers: 1, travelClass: 'economy' }); setResults([]); setError('') }} className="py-2 px-3 rounded-md border border-gray-200 bg-white">Clear</button>
              </div>
            </form>

            <div className="mt-6 text-sm text-gray-500">
              <p>Tip: Try cities like <span className="text-blue-600">Los Angeles</span>, <span className="text-blue-600">New York</span>, <span className="text-blue-600">London</span>.</p>
            </div>
          </aside>

          {/* Results and hero area */}
          <section className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow mb-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Find great deals on flights</h3>
                <p className="text-sm text-gray-500">Search and compare prices from multiple airlines.</p>
              </div>
              <div className="hidden md:block w-32">
                <img src={Plane} alt="plane" className="w-full h-auto" loading="lazy" />
              </div>
            </div>

            {/* Results grid */}
            {results.length === 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleFlights.map((f) => (
                  <article key={f.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{f.airline}</h4>
                        <p className="text-xs text-gray-500">{f.flight} • {f.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${f.price}</p>
                        <p className="text-xs text-gray-500">Roundtrip</p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">{f.from}</p>
                        <p className="text-sm font-medium">{f.depart}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{f.to}</p>
                        <p className="text-sm font-medium">{f.arrive}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button className="px-3 py-1 rounded-md bg-orange-600 text-white">Book</button>
                      <button className="text-sm text-gray-500">Details</button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((f) => (
                  <article key={f.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{f.airline}</h4>
                        <p className="text-xs text-gray-500">{f.flight} • {f.duration}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${f.price}</p>
                        <p className="text-xs text-gray-500">Roundtrip</p>
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">{f.from}</p>
                        <p className="text-sm font-medium">{f.depart}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">{f.to}</p>
                        <p className="text-sm font-medium">{f.arrive}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button className="px-3 py-1 rounded-md bg-orange-600 text-white">Book</button>
                      <button className="text-sm text-gray-500">Details</button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Flight
