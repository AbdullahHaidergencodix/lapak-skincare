import React, { useState } from 'react'
import StarRating from './StarRating'

function QuickViewModal({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [quantity, setQuantity] = useState(1)
  
  if (!isOpen || !product) return null

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product)
    }
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] glass-strong rounded-3xl z-[90] overflow-hidden animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-white/50 text-gray-600 hover:bg-white/80 transition-colors z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Image */}
          <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-gradient-to-br from-purple-100 to-pink-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="16"%3EProduct Image%3C/text%3E%3C/svg%3E' }} />
            {discount > 0 && <span className="absolute top-4 left-4 px-3 py-1.5 bg-rose-500 text-white text-sm font-bold rounded-full">-{discount}%</span>}
            {product.badge && <span className="absolute top-4 left-20 px-3 py-1.5 bg-white/90 text-purple-700 text-sm font-bold rounded-full shadow">{product.badge}</span>}
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col bg-white/50">
            <span className="text-purple-600 text-sm font-semibold bg-purple-100/80 px-3 py-1 rounded-full w-fit mb-3">{product.category}</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating || 4.5} />
              <span className="text-sm text-gray-500">({product.reviewCount || 0} reviews)</span>
            </div>

            <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

            {product.benefits && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, i) => (
                    <span key={i} className="text-xs bg-green-100/80 text-green-700 px-3 py-1 rounded-full">✓ {benefit}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-purple-700">PKR {product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
              </div>
              
              <p className="text-sm text-gray-500">Size: <span className="font-medium text-gray-700">{product.size}</span></p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/80 rounded-xl p-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">-</button>
                  <span className="w-10 text-center font-semibold text-gray-800">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">+</button>
                </div>
                <button onClick={() => onToggleWishlist(product.id)}
                  className={`p-3 rounded-xl transition-colors ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white/80 text-pink-500 hover:bg-pink-100'}`}>
                  <svg className="w-6 h-6" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <button onClick={handleAddToCart} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Add to Cart - PKR {(product.price * quantity).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickViewModal
