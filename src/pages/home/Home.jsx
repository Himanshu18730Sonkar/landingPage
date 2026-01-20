import React, { Suspense, lazy } from 'react'
import Navbar from '../../components/layout/navbar/Navbar'
import Hero from './components/hero/Hero'
const Footer = lazy(() => import('../../components/layout/footer/Footer'))
const Category = lazy(() => import('./components/category/Category'))
const Destination = lazy(() => import('./components/destination/Destination'))
const EasyFast = lazy(() => import('./components/esay&fast/EasyFast'))
const Testimonials = lazy(() => import('./components/testimonials/Testmonials'))
const Brand = lazy(() => import('./components/brand/Brand'))
const Newsletter = lazy(() => import('./components/newsletter/Newsletter'))

const Placeholder = ({height='200px'}) => <div style={{minHeight: height}} aria-hidden></div>

const Home = () => {
  React.useEffect(() => {
    // Prefetch likely next pages during idle time to speed up navigation
    const prefetch = () => {
      import('../otherPages/flights/Flight')
      import('../otherPages/bookings/Booking')
      import('../otherPages/Hotels/Hotel')
    }

    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(() => prefetch())
    } else {
      setTimeout(() => prefetch(), 2000)
    }
  }, [])

  return (
    <>
    
      <main>
        <Hero/>

        <Suspense fallback={<Placeholder height="240px"/>}>
          <Category/>
        </Suspense>

        <Suspense fallback={<Placeholder height="380px"/>}>
          <Destination/>
        </Suspense>

        <Suspense fallback={<Placeholder height="160px"/>}>
          <EasyFast/>
        </Suspense>

        <Suspense fallback={<Placeholder height="260px"/>}>
          <Testimonials/>
        </Suspense>

        <Suspense fallback={<Placeholder height="120px"/>}>
          <Brand/>
        </Suspense>

        <Suspense fallback={<Placeholder height="200px"/>}>
          <Newsletter/>
        </Suspense>
        
      </main>
    </>
  )
}

export default Home
