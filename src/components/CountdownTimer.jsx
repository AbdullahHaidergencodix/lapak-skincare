import React, { useState, useEffect } from 'react'

function CountdownTimer({ endTime, title = "Flash Sale Ends In" }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const end = new Date(endTime).getTime()
      const difference = end - now

      if (difference <= 0) {
        setIsExpired(true)
        return { hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [endTime])

  if (isExpired) return null

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-white text-dark text-xl sm:text-2xl md:text-3xl font-black w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg">
          {String(value).padStart(2, '0')}
        </div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div>
      </div>
      <span className="text-[10px] sm:text-xs text-white/80 mt-1.5 font-semibold uppercase tracking-wider">{label}</span>
    </div>
  )

  return (
    <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 py-3 sm:py-4 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl animate-bounce">🔥</span>
          <span className="text-white font-bold text-sm sm:text-base md:text-lg">{title}</span>
          <span className="text-xl sm:text-2xl animate-bounce delay-100">🔥</span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <TimeBlock value={timeLeft.hours} label="Hrs" />
          <span className="text-white text-xl sm:text-2xl font-bold animate-pulse">:</span>
          <TimeBlock value={timeLeft.minutes} label="Min" />
          <span className="text-white text-xl sm:text-2xl font-bold animate-pulse">:</span>
          <TimeBlock value={timeLeft.seconds} label="Sec" />
        </div>
        
        <button 
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-pink-600 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-lg hover:shadow-xl"
        >
          Shop Now →
        </button>
      </div>
    </div>
  )
}

export default CountdownTimer
