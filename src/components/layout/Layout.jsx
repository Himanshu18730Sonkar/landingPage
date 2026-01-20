import React, { Suspense, lazy } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../layout/Spinner'

const Navbar = lazy(() => import('./navbar/Navbar'))
const Footer = lazy(() => import('./footer/Footer'))

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<div className="h-16" aria-hidden />}>
        <Navbar />
      </Suspense>


      <div>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>

      <Suspense fallback={<div className="mt-8" aria-hidden />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Layout
