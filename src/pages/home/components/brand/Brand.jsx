import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Axon from '../../../../assets/axon.webp'
import Jetstar from '../../../../assets/jetstar.webp'
import Expedia from '../../../../assets/expedia.webp'
import Quantas from '../../../../assets/quantas.webp'
import Alitalia from '../../../../assets/alitalia.webp'

const Brand = () => {
  const brands = [Axon, Jetstar, Expedia, Quantas, Alitalia]
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const rafRef = useRef(null)
  const pausedRef = useRef(false)
  const posRef = useRef(0)
  const [trackWidth, setTrackWidth] = useState(0)
  const location = useLocation()

  useEffect(() => {
    // Measure the track width using ResizeObserver and rAF to avoid forced reflow
    if (!trackRef.current) return

    let rafId = null
    const measure = () => {
      if (!trackRef.current) return
      // schedule measurement inside rAF so layout reads are batched
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const total = trackRef.current.scrollWidth
        const single = total / 2
        // only update if changed significantly to avoid extra renders
        setTrackWidth((prev) => (Math.abs(prev - single) > 1 ? single : prev))
      })
    }

    measure()

    // Use ResizeObserver so we respond to intrinsic size changes (e.g., image loads)
    const ro = new ResizeObserver(measure)
    ro.observe(trackRef.current)

    const onWindowResize = () => measure()
    window.addEventListener('resize', onWindowResize, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onWindowResize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [brands])

  useEffect(() => {
    if (!trackWidth) return

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let last = performance.now()
    const speed = 60 // pixels per second

    const step = (now) => {
      if (pausedRef.current) {
        last = now
        rafRef.current = requestAnimationFrame(step)
        return
      }

      const dt = now - last
      last = now
      posRef.current += (speed * dt) / 1000
      if (posRef.current >= trackWidth) posRef.current -= trackWidth
      if (trackRef.current) trackRef.current.style.transform = `translateX(${-posRef.current}px)`
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onVisibility = () => {
      if (document.visibilityState === 'visible') {
        last = performance.now()
      }
    }
    window.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('visibilitychange', onVisibility)
    }
  }, [trackWidth, location])

  // Pause on hover / focus
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onEnter = () => (pausedRef.current = true)
    const onLeave = () => (pausedRef.current = false)
    const onFocus = () => (pausedRef.current = true)
    const onBlur = () => (pausedRef.current = false)

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el.addEventListener('focusin', onFocus)
    el.addEventListener('focusout', onBlur)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      el.removeEventListener('focusin', onFocus)
      el.removeEventListener('focusout', onBlur)
    }
  }, [])

  return (
    <div className="my-40 max-w-7xl mx-auto overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div ref={containerRef} className="relative">
        <div
          ref={trackRef}
          className="flex sm:gap-24 gap-4 w-max"
          style={{ transform: 'translateX(0)', willChange: 'transform' }}
          aria-hidden
        >
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt="brand"
              loading="lazy"
              width="160"
              height="80"
              className="h-20 w-40 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Brand
