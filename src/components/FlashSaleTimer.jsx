import React, { useState, useEffect } from 'react'

const FlashSaleTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-xl px-3 py-2 min-w-[60px]">
        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs font-medium text-gray-500 mt-1">{label}</span>
    </div>
  )

  return (
    <section className="py-6 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Flash Sale
              </span>
            </h2>
            <p className="text-gray-600">
              Limited time offer on premium skincare
            </p>
          </div>

          <div className="flex items-center gap-4">
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <span className="text-2xl font-light text-gray-400">:</span>
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <span className="text-2xl font-light text-gray-400">:</span>
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>

          <button 
            onClick={() => {
              const productsSection = document.getElementById('products')
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Shop Now →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FlashSaleTimer
