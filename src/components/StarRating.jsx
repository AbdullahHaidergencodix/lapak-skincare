import React from 'react'

function StarRating({ rating, size = 'md' }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-sm'

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={i} className={`${sizeClass} text-amber-500`}>★</span>)
    } else if (i === fullStars && hasHalf) {
      stars.push(<span key={i} className={`${sizeClass} text-amber-400`}>★</span>)
    } else {
      stars.push(<span key={i} className={`${sizeClass} text-gray-300`}>★</span>)
    }
  }

  return <div className="flex items-center gap-0.5">{stars}</div>
}

export default StarRating
