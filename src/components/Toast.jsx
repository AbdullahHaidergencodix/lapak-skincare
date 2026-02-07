import React, { useEffect } from 'react'

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const bgColor = type === 'success' ? 'bg-green' : 'bg-pink'

  return (
    <div className={`fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-up z-50 max-w-sm`}>
      <div className="flex items-center space-x-3">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  )
}

export default Toast
