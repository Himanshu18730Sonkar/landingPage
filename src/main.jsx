import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/layout/Layout'

// Lazy load pages to keep initial bundle small
const Home = lazy(() => import('./pages/home/Home'))
const Login = lazy(() => import('./pages/authpages/Login/Login'))
const SignUp = lazy(() => import('./pages/authpages/SignUp/SignUp'))
const Flights = lazy(() => import('./pages/otherPages/flights/Flight'))
const Bookings = lazy(() => import('./pages/otherPages/bookings/Booking'))
const Hotels = lazy(() => import('./pages/otherPages/Hotels/Hotel'))
const Destination = lazy(() => import('./pages/otherPages/Destination/Destination'))

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold">404 — Page not found</h1>
      <p className="mt-2 text-sm text-gray-500">The page you're looking for doesn't exist.</p>
    </div>
  </div>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center py-20">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="flights" element={<Flights />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="hotels" element={<Hotels />} />
            <Route path="destinations" element={<Destination />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
