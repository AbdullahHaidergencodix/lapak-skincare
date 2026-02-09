import React from 'react'

function StarRating({ rating = 0, reviewCount = 0, size = 'sm', showCount = true }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  
  const starSize = sizes[size] || sizes.sm

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = star <= Math.floor(rating)
          const halfFilled = !filled && star - 0.5 <= rating
          
          return (
            <svg
              key={star}
              className={`${starSize} ${filled || halfFilled ? 'text-orange' : 'text-gray-300'}`}
              fill={filled ? 'currentColor' : halfFilled ? 'url(#half)' : 'none'}
              stroke="currentColor"
              strokeWidth={filled || halfFilled ? 0 : 1}
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          )
        })}
      </div>
      {showCount && reviewCount > 0 && (
        <span className="text-xs text-accentDark font-medium ml-1">
          ({reviewCount})
        </span>
      )}
    </div>
  )
}

export default StarRating
