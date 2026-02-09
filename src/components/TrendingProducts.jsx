import React, { useRef } from 'react'
import StarRating from './StarRating'

function TrendingProducts({ products, onQuickView, onAddToCart }) {
  const scrollRef = useRef(null)
  
  // Get top 6 products by rating
  const trendingProducts = [...products]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 bg-gradient-to-r from-orange/10 via-pink/10 to-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange to-pink text-white text-sm font-bold rounded-full mb-3">
              🔥 TRENDING NOW
            </span>
            <h2 className="text-3xl font-black gradient-text">Hot Products</h2>
            <p className="text-accentDark">What everyone's loving right now</p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="300" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="300" height="200" fill="%23e0e7ff"/%3E%3C/svg%3E'}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-orange to-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                      #{index + 1} Trending
                    </span>
                  </div>
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <span className="bg-white text-accent px-4 py-2 rounded-full font-bold text-sm">
                      Quick View
                    </span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.rating && (
                      <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                    )}
                  </div>
                  <h3 className="font-bold text-dark mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 line-through">PKR {product.originalPrice}</span>
                      <p className="text-lg font-black gradient-text">PKR {product.price}</p>
                    </div>
                    <button
                      onClick={() => onAddToCart(product)}
                      disabled={product.stock === 0}
                      className={`p-2 rounded-xl transition-all ${product.stock === 0 ? 'bg-gray-200 text-gray-400' : 'bg-accent text-white hover:bg-accentDark'}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingProducts
