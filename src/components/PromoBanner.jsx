import React, { useState, useEffect } from 'react'

function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const promos = [
    { text: '🚚 FREE Shipping on orders over PKR 2,000!', highlight: 'FREE Shipping' },
    { text: '👩‍⚕️ Recommended by Dr. Fatima Abid - Director Medical Affairs, Obliege Group', highlight: 'DR Fatima Abid' },
    { text: '🏆 Trusted Since 2012 - Over a Decade of Excellence', highlight: 'Since 2012' },
    { text: '💼 Wholesale Available for Pharmacies Nationwide', highlight: 'Wholesale' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-accent via-purple to-pink text-white py-2.5 px-4 relative overflow-hidden">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-center relative z-10">
        <p className="text-xs sm:text-sm font-medium text-center animate-fade-in" key={currentIndex}>
          {promos[currentIndex].text}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 ml-4 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Progress Dots */}
      <div className="flex justify-center gap-1.5 mt-1.5">
        {promos.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-4' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default PromoBanner
