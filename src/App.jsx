import React, { Suspense, lazy } from 'react'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LeftHeroImg from './assets/traveller.webp'

// Lazy load the Home component to reduce initial bundle size
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  return (
   <HelmetProvider>
      <Helmet>
        <title>Joddo - Best Travel Destinations</title>
        <meta name="description" content="Travel, enjoy and live a new and full life with Joddo. Find the best destinations, hotels, and flights around the world." />
        <meta name="keywords" content="travel, destination, hotel, flight, booking, vacation" />
        


        {/* Preload LCP image to improve Largest Contentful Paint */}
        <link rel="preload" as="image" href={LeftHeroImg} />
      </Helmet>
      {/* Use a small inline loader rather than full-screen to reduce perceived delay */}
      <Suspense fallback={<div className="flex items-center justify-center py-20">Loading…</div>}>
        <Home/>
      </Suspense>
   </HelmetProvider>
  )
}

export default App
