import React, { useState } from 'react'
import StarRating from './StarRating'
import StockBadge from './StockBadge'
import ProductReviews from './ProductReviews'

function ProductModal({ product, onClose, onAddToCart }) {
  const [activeTab, setActiveTab] = useState('details')
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const isOutOfStock = product.stock === 0
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleWhatsAppInquiry = () => {
    const message = `Hi! I'm interested in ${product.name} (PKR ${product.price}). Is it available?`
    window.open(`https://wa.me/923054573962?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div 
      className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-up shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-xl font-bold gradient-text">Product Details</h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full aspect-square object-cover rounded-2xl shadow-xl ${isOutOfStock ? 'grayscale-[30%]' : ''}`}
                  onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%23e0e7ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%236366f1"%3EProduct Image%3C/text%3E%3C/svg%3E'}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <StockBadge stock={product.stock} />
                  {product.badge && (
                    <span className="px-3 py-1 bg-gradient-to-r from-accent to-purple text-white text-xs font-bold rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-pink text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    -{discount}% OFF
                  </div>
                )}
              </div>
              
              {/* Info Section */}
              <div className="flex flex-col">
                <span className="inline-block self-start px-4 py-1 bg-gradient-to-r from-accent to-purple text-white text-sm rounded-full font-medium mb-3">
                  {product.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">{product.name}</h3>
                
                {product.rating && (
                  <div className="flex items-center gap-3 mb-4">
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
                    <span className="text-sm text-accentDark">({product.reviewCount} reviews)</span>
                  </div>
                )}
                
                <p className="text-accentDark mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                    📦 Size: {product.size}
                  </span>
                  {product.stock > 0 && product.stock <= 10 && (
                    <span className="text-sm text-orange font-medium">
                      ⚡ Hurry! Only {product.stock} left
                    </span>
                  )}
                </div>
                
                {/* Price Section */}
                <div className="bg-gradient-to-r from-secondary to-primary p-4 rounded-xl mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
                    <span className="text-3xl font-black gradient-text">PKR {product.price.toLocaleString()}</span>
                  </div>
                  <span className="text-sm text-green font-bold">
                    🎉 You save PKR {(product.originalPrice - product.price).toLocaleString()} ({discount}% off)
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3 mt-auto">
                  <button
                    onClick={() => { if (!isOutOfStock) { onAddToCart(product); onClose(); }}}
                    disabled={isOutOfStock}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      isOutOfStock 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-accent via-purple to-pink text-white hover:shadow-xl hover:shadow-purple/50 transform hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    {isOutOfStock ? '❌ Out of Stock' : '🛒 Add to Cart'}
                  </button>
                  
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-4 rounded-xl font-bold text-lg bg-[#25D366] text-white hover:bg-[#20BD5A] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Ask on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tabs Section */}
            <div className="mt-8 border-t pt-6">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeTab === 'details' 
                      ? 'bg-gradient-to-r from-accent to-purple text-white shadow-lg' 
                      : 'bg-secondary text-accentDark hover:bg-accent/20'
                  }`}
                >
                  📋 Details
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    activeTab === 'reviews' 
                      ? 'bg-gradient-to-r from-accent to-purple text-white shadow-lg' 
                      : 'bg-secondary text-accentDark hover:bg-accent/20'
                  }`}
                >
                  ⭐ Reviews ({product.reviewCount || 0})
                </button>
              </div>
              
              {activeTab === 'details' ? (
                <div className="bg-secondary/50 rounded-xl p-6">
                  <h4 className="font-bold text-dark mb-3">Product Information</h4>
                  <ul className="space-y-2 text-accentDark">
                    <li><strong>Name:</strong> {product.name}</li>
                    <li><strong>Category:</strong> {product.category}</li>
                    <li><strong>Size:</strong> {product.size}</li>
                    <li><strong>Price:</strong> PKR {product.price.toLocaleString()}</li>
                    <li><strong>Description:</strong> {product.description}</li>
                  </ul>
                </div>
              ) : (
                <ProductReviews 
                  reviews={product.reviews} 
                  rating={product.rating} 
                  reviewCount={product.reviewCount} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
