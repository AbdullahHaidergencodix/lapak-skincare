import React from 'react'

function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isFreeShipping = total >= 2000

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md glass-strong z-[90] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="p-5 border-b border-white/20 flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500">
          <h2 className="text-xl font-bold text-white">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-5 py-3 bg-white/20">
          {isFreeShipping ? (
            <p className="text-green-700 text-sm font-medium text-center">🎉 You've unlocked FREE shipping!</p>
          ) : (
            <div>
              <p className="text-gray-700 text-sm text-center mb-2">Add PKR {(2000 - total).toLocaleString()} more for FREE shipping</p>
              <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all" style={{ width: `${Math.min((total / 2000) * 100, 100)}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-600 font-medium">Your cart is empty</p>
              <p className="text-gray-500 text-sm mt-1">Add some products to get started!</p>
              <button onClick={onClose} className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-white/50 rounded-2xl">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-white/50"
                  onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.size}</p>
                  <p className="text-purple-700 font-bold mt-1">PKR {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg bg-white/80 text-gray-600 font-bold hover:bg-white transition-colors">-</button>
                    <span className="w-8 text-center font-medium text-gray-800">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg bg-white/80 text-gray-600 font-bold hover:bg-white transition-colors">+</button>
                    <button onClick={() => onRemoveItem(item.id)} className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/20 bg-white/30 space-y-4">
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total:</span>
              <span className="text-purple-700">PKR {total.toLocaleString()}</span>
            </div>
            {!isFreeShipping && <p className="text-xs text-gray-500 text-center">+ Shipping calculated at checkout</p>}
            <button onClick={onCheckout} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Checkout via WhatsApp 💬
            </button>
            <p className="text-xs text-gray-500 text-center">Secure checkout • Cash on Delivery available</p>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
