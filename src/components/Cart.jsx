import React from 'react'
import { whatsappNumber, businessName, shippingFee, freeShippingThreshold, bundleDiscountThreshold, bundleDiscountAmount } from '../data/config'

function Cart({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const bundleDiscount = totalItems >= bundleDiscountThreshold ? bundleDiscountAmount : 0
  const shipping = subtotal >= freeShippingThreshold ? 0 : (cart.length > 0 ? shippingFee : 0)
  const total = subtotal + shipping - bundleDiscount

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return

    let message = `*🛍️ New Order - ${businessName}*%0A%0A`
    message += `*ORDER DETAILS:*%0A`
    message += `━━━━━━━━━━━━━━━━━━━━%0A%0A`
    
    cart.forEach(item => {
      message += `📦 *${item.name}*%0A`
      message += `   Size: ${item.size}%0A`
      message += `   Qty: ${item.quantity}%0A`
      message += `   Price: PKR ${item.price} × ${item.quantity} = PKR ${item.price * item.quantity}%0A%0A`
    })
    
    message += `━━━━━━━━━━━━━━━━━━━━%0A`
    message += `💰 *Subtotal:* PKR ${subtotal}%0A`
    message += `🚚 *Shipping:* ${shipping === 0 ? 'FREE' : `PKR ${shipping}`}%0A`
    
    if (bundleDiscount > 0) {
      message += `🎉 *Bundle Discount (${totalItems} items):* -PKR ${bundleDiscount}%0A`
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━%0A`
    message += `*TOTAL: PKR ${total}*%0A%0A`
    message += `Please confirm this order and provide delivery details. Thank you! 😊`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 glass shadow-2xl z-50 flex flex-col border-l-4 border-accent">
        <div className="flex items-center justify-between p-4 border-b border-accent/20 bg-gradient-to-r from-accent/10 to-purple/10">
          <h2 className="text-xl font-bold gradient-text">Your Cart 🛒</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-grow flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-accent text-lg font-medium">Your cart is empty</p>
              <p className="text-sm text-accentDark mt-2">Add some products to get started!</p>
            </div>
          </div>
        ) : (
          <>
            {subtotal >= freeShippingThreshold ? (
              <div className="bg-gradient-to-r from-green/20 to-cyan/20 border border-green p-3 m-4 rounded-xl">
                <p className="text-sm font-bold text-green flex items-center">
                  🎉 Congratulations! You get FREE SHIPPING!
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-orange/20 to-pink/20 border border-orange p-3 m-4 rounded-xl">
                <p className="text-sm font-bold text-orange flex items-center">
                  🚚 Add PKR {freeShippingThreshold - subtotal} more for FREE shipping!
                </p>
              </div>
            )}
            
            {totalItems >= bundleDiscountThreshold && (
              <div className="bg-gradient-to-r from-green/20 to-cyan/20 border border-green p-3 mx-4 mb-4 rounded-xl">
                <p className="text-sm font-bold text-green flex items-center">
                  🎉 Bundle Discount Applied! Save PKR {bundleDiscountAmount}
                </p>
              </div>
            )}

            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="glass rounded-xl p-4 border border-accent/20 hover:border-accent transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-dark text-sm flex-grow pr-2">{item.name}</h3>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-pink hover:text-dark transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-accent mb-3">{item.size}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-dark">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold gradient-text">PKR {item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-accent/20 p-4 space-y-3 bg-white/50">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-dark">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">PKR {subtotal}</span>
                </div>
                <div className="flex justify-between text-dark">
                  <span>Shipping Fee</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green' : ''}`}>
                    {shipping === 0 ? 'FREE 🎉' : `PKR ${shipping}`}
                  </span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-green font-bold">
                    <span>Bundle Discount 🎉</span>
                    <span>-PKR {bundleDiscount}</span>
                  </div>
                )}
                <div className="border-t border-accent/20 pt-2"></div>
                <div className="flex justify-between items-center text-lg font-black">
                  <span className="gradient-text">Total</span>
                  <span className="gradient-text text-2xl">PKR {total}</span>
                </div>
              </div>
              
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-gradient-to-r from-green via-cyan to-green text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-green/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Checkout via WhatsApp</span>
              </button>
              
              <button
                onClick={onClearCart}
                className="w-full text-pink text-sm hover:text-dark transition-colors font-medium"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
