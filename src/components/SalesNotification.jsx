import React, { useState, useEffect } from 'react'

const customerNames = [
  'Ayesha from Lahore', 'Ahmed from Karachi', 'Fatima from Islamabad',
  'Ali from Rawalpindi', 'Sara from Faisalabad', 'Usman from Multan',
  'Hira from Peshawar', 'Bilal from Sialkot', 'Maryam from Gujranwala',
  'Hassan from Hyderabad', 'Zainab from Quetta', 'Omar from Sargodha'
]

const timeAgo = ['just now', '2 mins ago', '5 mins ago', '8 mins ago', '12 mins ago', '15 mins ago']

function SalesNotification({ products }) {
  const [notification, setNotification] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const randomProduct = products[Math.floor(Math.random() * products.length)]
      const randomCustomer = customerNames[Math.floor(Math.random() * customerNames.length)]
      const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)]
      
      setNotification({
        product: randomProduct,
        customer: randomCustomer,
        time: randomTime
      })
      setIsVisible(true)
      
      setTimeout(() => setIsVisible(false), 5000)
    }

    // First notification after 10 seconds
    const initialTimeout = setTimeout(showNotification, 10000)
    
    // Then every 30-60 seconds randomly
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 30000
      setTimeout(showNotification, randomDelay)
    }, 45000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [products])

  if (!notification || !isVisible) return null

  return (
    <div className={`fixed bottom-24 left-4 z-40 max-w-sm transform transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-green/20 p-4 flex gap-3 items-center animate-slide-up">
        <div className="relative">
          <img 
            src={notification.product.image} 
            alt={notification.product.name}
            className="w-16 h-16 rounded-xl object-cover"
            onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="64" height="64" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="64" height="64" fill="%23e0e7ff"/%3E%3C/svg%3E'}
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-dark truncate">{notification.customer}</p>
          <p className="text-xs text-accentDark truncate">purchased <span className="font-semibold text-accent">{notification.product.name}</span></p>
          <p className="text-xs text-gray-400 mt-1">🕐 {notification.time}</p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SalesNotification
