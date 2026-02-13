import React from 'react'
import StarRating from './StarRating'

function ProductCard({ product, onAddToCart, onQuickView, onToggleWishlist, isWishlisted }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col cursor-pointer active:scale-[0.98] transition-transform"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="300" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f3e8ff" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%239333ea" font-size="14"%3EProduct%3C/text%3E%3C/svg%3E' }} 
        />
        
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2 sm:px-3 py-1 bg-white/90 text-purple-700 text-[10px] sm:text-[11px] font-bold rounded-full shadow-lg">
              {product.badge}
            </span>
          )}
        </div>

        {discount > 0 && (
          <span className="absolute top-2 sm:top-3 right-12 sm:right-14 px-2 py-1 bg-rose-500 text-white text-[10px] sm:text-[11px] font-bold rounded-full shadow-lg">
            -{discount}%
          </span>
        )}
        
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id) }}
          className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-2 sm:p-2.5 rounded-full shadow-lg transition-all active:scale-90 ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-500'}`}
        >
          <svg className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      <div className="p-3 sm:p-5 flex-grow flex flex-col bg-white/40 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-[10px] sm:text-[11px] font-semibold text-purple-700 bg-purple-100/80 px-2 sm:px-3 py-1 rounded-full">
            {product.category}
          </span>
          {product.rating && <StarRating rating={product.rating} size="sm" />}
        </div>
        
        <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="flex items-end justify-between mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-xs text-gray-500 bg-white/60 px-2 py-1 rounded font-medium">{product.size}</span>
          <div className="text-right">
            <div className="text-[10px] sm:text-xs text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</div>
            <div className="text-base sm:text-xl font-bold text-purple-700">PKR {product.price.toLocaleString()}</div>
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product) }} 
          className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 transition-all active:scale-[0.97] text-sm sm:text-base"
        >
          Add to Cart ✨
        </button>
      </div>
    </div>
  )
}

export default ProductCard
