import React, { useEffect } from 'react'

function Toast({ message, type = 'success', isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === 'success' ? 'from-green-500 to-emerald-500' : 
                  type === 'error' ? 'from-red-500 to-rose-500' : 
                  'from-purple-500 to-pink-500'

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className={`px-6 py-3 bg-gradient-to-r ${bgColor} text-white rounded-full shadow-xl flex items-center gap-3`}>
        {type === 'success' && <span>✓</span>}
        {type === 'error' && <span>✕</span>}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  )
}

export default Toast
