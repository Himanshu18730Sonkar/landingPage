import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-orange-100"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-orange-600 border-t-transparent animate-spin"></div>
      </div>
    </div>
  )
}

export default Spinner