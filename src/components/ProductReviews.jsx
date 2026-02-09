import React from 'react'
import StarRating from './StarRating'

function ProductReviews({ reviews, rating, reviewCount }) {
  return (
    <div>
      {/* Rating Summary */}
      {rating && (
        <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-secondary to-primary rounded-xl">
          <div className="text-center">
            <div className="text-4xl font-black gradient-text">{rating}</div>
            <StarRating rating={rating} showCount={false} size="md" />
            <div className="text-sm text-accentDark mt-1">{reviewCount} reviews</div>
          </div>
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews?.filter(r => Math.floor(r.rating) === star).length || 0
              const percentage = reviewCount ? (count / reviewCount) * 100 : 0
              return (
                <div key={star} className="flex items-center gap-2 text-sm">
                  <span className="w-3">{star}</span>
                  <svg className="w-4 h-4 text-orange fill-orange" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange to-pink rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <span className="w-8 text-accentDark">{count}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
      
      {/* Reviews List */}
      {(!reviews || reviews.length === 0) ? (
        <div className="text-center py-8 text-accentDark">
          <div className="text-4xl mb-2">📝</div>
          <p>No reviews yet. Be the first to review!</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary/50 rounded-xl p-4 border border-accent/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent via-purple to-pink rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-bold text-dark">{review.name}</span>
                    {review.verified && (
                      <span className="ml-2 text-xs text-green font-medium bg-green/10 px-2 py-0.5 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
                <StarRating rating={review.rating} showCount={false} size="sm" />
              </div>
              <p className="text-sm text-accentDark leading-relaxed">{review.comment}</p>
              {review.date && (
                <p className="text-xs text-gray-400 mt-2">{review.date}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductReviews
