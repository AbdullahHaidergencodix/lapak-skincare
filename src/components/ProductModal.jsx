import React from 'react'

function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="400" fill="%23e0e7ff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%236366f1"%3EProduct Image%3C/text%3E%3C/svg%3E'
  }

  return (
    <>
      <div className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50 animate-fade-in" onClick={onClose}></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <img
                src={product.image}
                alt={product.name}
                onError={handleImageError}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <button
                onClick={onClose}
                className="self-end mb-4 p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent to-purple text-white text-xs rounded-full mb-4 w-fit">
                {product.category}
              </span>
              <h2 className="text-3xl font-bold text-dark mb-4">{product.name}</h2>
              <p className="text-accentDark mb-6 leading-relaxed">{product.description}</p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-accent font-medium">Size: {product.size}</span>
                <span className="text-3xl font-bold gradient-text">PKR {product.price}</span>
              </div>
              <button
                onClick={() => {
                  onAddToCart(product)
                  onClose()
                }}
                className="w-full bg-gradient-to-r from-accent via-purple to-pink text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-purple/50 transition-all transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductModal
