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
      <div className="bg-dark text-white text-2xl md:text-3xl font-black w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-lg">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs text-white/80 mt-1 font-medium">{label}</span>
    </div>
  )

  return (
    <div className="bg-gradient-to-r from-pink via-purple to-accent py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-bounce">🔥</span>
          <span className="text-white font-bold text-lg md:text-xl">{title}</span>
          <span className="text-2xl animate-bounce">🔥</span>
        </div>
        <div className="flex items-center gap-3">
          <TimeBlock value={timeLeft.hours} label="HRS" />
          <span className="text-white text-2xl font-bold animate-pulse">:</span>
          <TimeBlock value={timeLeft.minutes} label="MIN" />
          <span className="text-white text-2xl font-bold animate-pulse">:</span>
          <TimeBlock value={timeLeft.seconds} label="SEC" />
        </div>
        <button className="bg-white text-accent px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
          Shop Now →
        </button>
      </div>
    </div>
  )
}

export default CountdownTimer
