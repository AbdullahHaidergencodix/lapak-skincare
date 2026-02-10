import React from 'react'

function WishlistModal({ isOpen, onClose, wishlistItems, onRemoveFromWishlist, onAddToCart, products }) {
  if (!isOpen) return null

  const wishlistProducts = products.filter(p => wishlistItems.includes(p.id))

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md glass-strong z-[90] flex flex-col animate-slide-up">
        <div className="p-5 border-b border-white/20 flex items-center justify-between bg-gradient-to-r from-pink-500 to-rose-500">
          <h2 className="text-xl font-bold text-white">Wishlist ({wishlistProducts.length})</h2>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">💕</div>
              <p className="text-gray-600 font-medium">Your wishlist is empty</p>
              <p className="text-gray-500 text-sm mt-1">Save items you love!</p>
              <button onClick={onClose} className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-medium">
                Browse Products
              </button>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div key={product.id} className="flex gap-4 p-3 bg-white/50 rounded-2xl">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-xl bg-white/50"
                  onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.size}</p>
                  <p className="text-purple-700 font-bold mt-1">PKR {product.price.toLocaleString()}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => { onAddToCart(product); onRemoveFromWishlist(product.id) }} className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs rounded-lg font-medium">
                      Add to Cart
                    </button>
                    <button onClick={() => onRemoveFromWishlist(product.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default WishlistModal
