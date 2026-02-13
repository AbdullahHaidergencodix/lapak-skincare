import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'

function QuickViewModal({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [quantity, setQuantity] = useState(1)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setQuantity(1)
      setImageLoaded(false)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen || !product) return null

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Mobile: Bottom sheet, Desktop: Center modal */}
      <div className="relative w-full sm:max-w-lg sm:mx-4 bg-white sm:rounded-3xl rounded-t-3xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden animate-slide-in-bottom sm:animate-bounce-in flex flex-col">
        {/* Drag indicator for mobile */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-white/90 rounded-full shadow-lg active:scale-90 transition-transform"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto scroll-touch flex-1">
          {/* Image */}
          <div className="relative aspect-square bg-gradient-to-br from-purple-50 to-pink-50">
            {!imageLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}
            <img 
              src={product.image} 
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.badge && (
                <span className="px-3 py-1.5 bg-white/90 text-purple-700 text-xs font-bold rounded-full shadow-lg">
                  {product.badge}
                </span>
              )}
              {discount > 0 && (
                <span className="px-3 py-1.5 bg-rose-500 text-white text-xs font-bold rounded-full shadow-lg">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Wishlist */}
            <button 
              onClick={() => onToggleWishlist(product.id)}
              className={`absolute top-4 right-14 p-3 rounded-full shadow-lg transition-all active:scale-90 ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-500'}`}
            >
              <svg className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {product.size}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            
            {product.rating && (
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
              </div>
            )}

            <p className="text-gray-600 text-sm sm:text-base mb-4">{product.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-purple-700">
                PKR {product.price.toLocaleString()}
              </span>
              <span className="text-base sm:text-lg text-gray-400 line-through">
                PKR {product.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded">
                Save {discount}%
              </span>
            </div>

            {/* Reviews preview */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Latest Review</h4>
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">
                    {product.reviews[0].name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-gray-800 text-sm">{product.reviews[0].name}</span>
                      {product.reviews[0].verified && (
                        <span className="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded">✓ Verified</span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">"{product.reviews[0].comment}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky bottom actions */}
        <div className="flex-shrink-0 border-t bg-white p-4 pb-safe">
          <div className="flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center bg-gray-100 rounded-xl">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-600 active:bg-gray-200 rounded-l-xl transition-colors text-lg font-medium"
              >
                −
              </button>
              <span className="w-10 text-center font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 active:bg-gray-200 rounded-r-xl transition-colors text-lg font-medium"
              >
                +
              </button>
            </div>

            {/* Add to cart */}
            <button 
              onClick={handleAddToCart}
              className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold shadow-lg shadow-purple-500/30 active:scale-[0.98] transition-transform"
            >
              Add to Cart — PKR {(product.price * quantity).toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal
