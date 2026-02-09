import React, { useState } from 'react'
import FreeShippingBar from './FreeShippingBar'

function Cart({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [checkoutStep, setCheckoutStep] = useState('cart') // cart, info, confirm

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = appliedPromo ? subtotal * 0.15 : 0
  const shipping = subtotal >= 2000 ? 0 : 200
  const total = subtotal - discount + shipping

  const validPromoCodes = ['WELCOME15', 'SKIN15', 'LAPAK15']

  const applyPromoCode = () => {
    if (validPromoCodes.includes(promoCode.toUpperCase())) {
      setAppliedPromo(promoCode.toUpperCase())
    } else {
      alert('Invalid promo code')
    }
  }

  const handleWhatsAppCheckout = () => {
    const itemsList = cart.map(item => 
      `• ${item.name} (x${item.quantity}) - PKR ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n')
    
    const message = `🛒 *New Order from LA Pakistan*\n\n` +
      `*Items:*\n${itemsList}\n\n` +
      `*Subtotal:* PKR ${subtotal.toLocaleString()}\n` +
      `${appliedPromo ? `*Discount (${appliedPromo}):* -PKR ${discount.toLocaleString()}\n` : ''}` +
      `*Shipping:* ${shipping === 0 ? 'FREE 🎉' : `PKR ${shipping}`}\n` +
      `*Total:* PKR ${total.toLocaleString()}\n\n` +
      `I would like to place this order. Please confirm availability and payment details.`
    
    window.open(`https://wa.me/923054573962?text=${encodeURIComponent(message)}`, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-dark/70 backdrop-blur-sm z-50">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-up overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent via-purple to-pink p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              🛒 Your Cart
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-dark mb-2">Your cart is empty</h3>
              <p className="text-accentDark mb-6">Add some amazing products!</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-accent to-purple text-white px-6 py-3 rounded-xl font-bold"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Free Shipping Progress */}
              <FreeShippingBar cartTotal={subtotal} threshold={2000} />

              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-secondary/50 rounded-xl p-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="80" height="80" fill="%23e0e7ff"/%3E%3C/svg%3E'}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-dark truncate">{item.name}</h4>
                      <p className="text-sm text-accentDark">{item.size}</p>
                      <p className="text-accent font-bold">PKR {item.price.toLocaleString()}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border-2 border-accent/20 rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-accent hover:text-white transition-colors rounded-l-lg"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-accent hover:text-white transition-colors rounded-r-lg"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-pink hover:bg-pink/10 p-2 rounded-lg transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-purple/10 rounded-xl">
                <p className="text-sm font-bold text-dark mb-2">🎁 Have a promo code?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-accent/20 focus:border-accent focus:outline-none text-sm"
                    disabled={appliedPromo}
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={appliedPromo}
                    className={`px-4 py-2 rounded-lg font-bold text-sm ${appliedPromo ? 'bg-green text-white' : 'bg-accent text-white hover:bg-accentDark'}`}
                  >
                    {appliedPromo ? '✓ Applied' : 'Apply'}
                  </button>
                </div>
                {appliedPromo && (
                  <p className="text-green text-sm mt-2 font-medium">
                    🎉 {appliedPromo} applied! You save PKR {discount.toLocaleString()}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer - Order Summary */}
        {cart.length > 0 && (
          <div className="border-t bg-white p-4 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-accentDark">Subtotal</span>
                <span className="font-medium">PKR {subtotal.toLocaleString()}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-green">
                  <span>Discount ({appliedPromo})</span>
                  <span className="font-medium">-PKR {discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-accentDark">Shipping</span>
                <span className={`font-medium ${shipping === 0 ? 'text-green' : ''}`}>
                  {shipping === 0 ? 'FREE' : `PKR ${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t">
                <span>Total</span>
                <span className="gradient-text">PKR {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Checkout via WhatsApp
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-accentDark py-2 font-medium hover:text-pink transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
