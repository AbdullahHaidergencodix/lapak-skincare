import React from 'react'

function StockBadge({ stock }) {
  if (stock === 0) {
    return (
      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
        Out of Stock
      </span>
    )
  }
  
  if (stock <= 5) {
    return (
      <span className="px-2 py-1 bg-gradient-to-r from-orange to-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
        Only {stock} left!
      </span>
    )
  }
  
  if (stock <= 15) {
    return (
      <span className="px-2 py-1 bg-orange text-white text-xs font-bold rounded-full shadow-lg">
        Low Stock
      </span>
    )
  }
  
  return (
    <span className="px-2 py-1 bg-green text-white text-xs font-bold rounded-full shadow-lg">
      In Stock
    </span>
  )
}

export default StockBadge
