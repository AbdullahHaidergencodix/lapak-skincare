import React from 'react'
import StarRating from './StarRating'

function ReviewsSection({ products }) {
  const allReviews = products
    .filter(p => p.reviews && p.reviews.length > 0)
    .flatMap(p => p.reviews.map(r => ({ ...r, productName: p.name })))
    .slice(0, 8)

  return (
    <section id="reviews" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Customer Reviews</h2>
          <p className="text-white/80">See what our customers are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allReviews.map((review, index) => (
            <div key={index} className="glass-card rounded-2xl p-5 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                {review.verified && <span className="ml-auto text-xs text-green-600 bg-green-100/80 px-2 py-0.5 rounded-full">✓ Verified</span>}
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">{review.comment}</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">{review.productName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
