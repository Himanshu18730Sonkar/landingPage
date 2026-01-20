import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Joddo from "/src/assets/Logo.webp";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }

  const location = useLocation();
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  }
  return (
    <div className="w-full fixed z-50 bg-white/90">
      <div className="px-6 h-16 flex items-center w-full md:justify-around justify-between relative">
        <div className="shrink-0">
          <Link to="/" aria-label="Home">
            <img src={Joddo} alt="Joddo Travel Logo" className=" w-22 " />
          </Link>
        </div>
        <div className="max-md:hidden">
          <ul className="flex items-center gap-6 ">
            <li>
              <Link to="/" className={`text-xl hover:text-stone-600 ${isActive('/') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
            </li>
            <li>
              <Link to="/destinations" className={`text-xl hover:text-stone-600 ${isActive('/destinations') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/destinations') ? 'page' : undefined}>Destination</Link>
            </li>
            <li>
              <Link to="/hotels" className={`text-xl hover:text-stone-600 ${isActive('/hotels') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/hotels') ? 'page' : undefined}>Hotels</Link>
            </li>
            <li>
              <Link to="/flights" className={`text-xl hover:text-stone-600 ${isActive('/flights') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/flights') ? 'page' : undefined}>Flights</Link>
            </li>
            <li>
              <Link to="/bookings" className={`text-xl hover:text-stone-600 ${isActive('/bookings') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/bookings') ? 'page' : undefined}>Bookings</Link>
            </li>
            <li>
              <Link to="/login" className={`inline-flex items-center px-3 py-1 rounded-md hover:bg-gray-100 ${isActive('/login') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/login') ? 'page' : undefined}>
                {/* Inline user icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20v-1c0-2.761 3.582-5 8-5s8 2.239 8 5v1H4z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
            
          </ul>
        </div>
        <div className="md:hidden">
          <div className="flex gap-4 items-center">
            <Link to="/login" className={`inline-flex items-center px-3 py-1 rounded-md hover:bg-gray-100 ${isActive('/login') ? 'text-blue-600 font-semibold' : ''}`} aria-current={isActive('/login') ? 'page' : undefined}>
                {/* Inline user icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM4 20v-1c0-2.761 3.582-5 8-5s8 2.239 8 5v1H4z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            {/* Inline user and menu icons */}
            <div  onClick={handleMenu}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="#6B7280"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`${menu ? "block" : "hidden"} md:hidden absolute top-16 left-1/2 -translate-x-1/2 bg-stone-200 backdrop-blur-2xl shadow rounded-2xl p-8 w-[90%] z-50`}
        >
          <ul className="flex flex-col items-center w-full gap-6 ">
            <li>
              <Link to="/" onClick={handleMenu} className={`text-xl font-semibold hover:text-stone-600 ${isActive('/') ? 'text-blue-600' : ''}`} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
            </li>
            <li>
              <Link to="/destinations" onClick={handleMenu} className={`text-xl font-semibold hover:text-stone-600 ${isActive('/destinations') ? 'text-blue-600' : ''}`} aria-current={isActive('/destinations') ? 'page' : undefined}>Destination</Link>
            </li>
            <li>
              <Link to="/hotels" onClick={handleMenu} className={`text-xl font-semibold hover:text-stone-600 ${isActive('/hotels') ? 'text-blue-600' : ''}`} aria-current={isActive('/hotels') ? 'page' : undefined}>Hotels</Link>
            </li>
            <li>
              <Link to="/flights" onClick={handleMenu} className={`text-xl font-semibold hover:text-stone-600 ${isActive('/flights') ? 'text-blue-600' : ''}`} aria-current={isActive('/flights') ? 'page' : undefined}>Flights</Link>
            </li>
            <li>
              <Link to="/bookings" onClick={handleMenu} className={`text-xl font-semibold hover:text-stone-600 ${isActive('/bookings') ? 'text-blue-600' : ''}`} aria-current={isActive('/bookings') ? 'page' : undefined}>Bookings</Link>
            </li>
            <li className="w-full mt-4 flex gap-3">
              <Link to="/login" onClick={handleMenu} className={`flex-1 text-center py-2 rounded-md border border-gray-200 bg-white ${isActive('/login') ? 'ring-1 ring-blue-500' : ''}`}>Sign in</Link>
              <Link to="/signup" onClick={handleMenu} className={`flex-1 text-center py-2 rounded-md text-white ${isActive('/signup') ? 'bg-blue-700' : 'bg-blue-600'}`}>Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
