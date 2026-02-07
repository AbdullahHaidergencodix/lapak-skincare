import React, { useState } from 'react'

function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-pink via-purple to-accent text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-center relative z-10">
        <p className="text-sm sm:text-base font-medium text-center">
          ✨ Special Offer: Free shipping on orders over PKR 1000! Limited time only! ✨
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PromoBanner
