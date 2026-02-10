import React from 'react'
import StarRating from './StarRating'

function ProductCard({ product, onAddToCart, onQuickView, onToggleWishlist, isWishlisted }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group glass-card rounded-3xl overflow-hidden flex flex-col cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="300" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23ffffff44" width="300" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%2366666688" font-size="14"%3EProduct%3C/text%3E%3C/svg%3E' }} 
        />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && <span className="px-3 py-1.5 bg-white/90 text-purple-700 text-[11px] font-bold rounded-full shadow-lg">{product.badge}</span>}
        </div>

        {discount > 0 && <span className="absolute top-3 right-14 px-2.5 py-1.5 bg-rose-500 text-white text-[11px] font-bold rounded-full shadow-lg">-{discount}%</span>}
        
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id) }}
          className={`absolute top-3 right-3 p-2.5 rounded-full shadow-lg transition-all ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white/90 text-pink-500 hover:bg-pink-500 hover:text-white'}`}
        >
          <svg className="w-4 h-4" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold shadow-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col bg-white/40 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold text-purple-700 bg-purple-100/80 px-3 py-1 rounded-full">{product.category}</span>
          {product.rating && <StarRating rating={product.rating} size="sm" />}
        </div>
        
        <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="flex items-end justify-between mb-4">
          <span className="text-xs text-gray-500 bg-white/60 px-2 py-1 rounded font-medium">{product.size}</span>
          <div className="text-right">
            <div className="text-xs text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</div>
            <div className="text-xl font-bold text-purple-700">PKR {product.price.toLocaleString()}</div>
          </div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product) }} 
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Add to Cart ✨
        </button>
      </div>
    </div>
  )
}

export default ProductCard
