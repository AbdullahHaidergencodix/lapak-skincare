import React from 'react'

function ProductCard({ product, onAddToCart, onQuickView, onToggleWishlist, isWishlisted }) {
  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%23e0e7ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%236366f1"%3EProduct Image%3C/text%3E%3C/svg%3E'
  }

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Best Seller': return 'from-orange to-pink'
      case 'New': return 'from-green to-cyan'
      case 'Premium': return 'from-purple to-accent'
      case 'Popular': return 'from-accent to-purple'
      default: return 'from-accent to-purple'
    }
  }

  return (
    <div className="glass rounded-2xl border-2 border-transparent hover:border-accent overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 flex flex-col group transform hover:-translate-y-2">
      <div className="aspect-square bg-gradient-to-br from-secondary to-primary overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {product.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 bg-gradient-to-r ${getBadgeColor(product.badge)} text-white text-xs font-bold rounded-full shadow-lg`}>
            {product.badge}
          </div>
        )}
        
        <button
          onClick={() => onToggleWishlist(product.id)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full hover:bg-pink transition-colors z-10"
        >
          <svg className={`w-5 h-5 ${isWishlisted ? 'fill-pink text-pink' : 'text-dark'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <span className="bg-white text-accent px-6 py-3 rounded-full font-bold transform scale-90 group-hover:scale-100 transition-transform">
            Quick View
          </span>
        </button>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent to-purple text-white text-xs rounded-full font-medium">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-dark mb-2 leading-snug">{product.name}</h3>
        <p className="text-sm text-accentDark mb-4 flex-grow line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-accent font-medium">{product.size}</span>
          <div className="text-right">
            <div className="text-xs text-gray-400 line-through">PKR {product.originalPrice}</div>
            <div className="text-2xl font-black gradient-text">PKR {product.price}</div>
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-accent via-purple to-pink text-white py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-purple/50 transition-all transform hover:scale-105"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  )
}

export default ProductCard
