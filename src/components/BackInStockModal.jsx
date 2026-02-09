import React, { useState } from 'react'

function BackInStockModal({ product, isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setEmail('')
      setPhone('')
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-dark/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl animate-slide-up">
        <div className="bg-gradient-to-r from-accent to-purple p-6 text-center">
          <div className="text-5xl mb-3">🔔</div>
          <h3 className="text-xl font-bold text-white">Get Notified!</h3>
          <p className="text-white/80 text-sm">When {product?.name} is back in stock</p>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-xl font-bold gradient-text">You're on the list!</h4>
              <p className="text-accentDark">We'll notify you as soon as it's available.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dark mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 focus:border-accent focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Email (Optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-accent/20 focus:border-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-accent via-purple to-pink text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Notify Me 🔔
              </button>
            </form>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default BackInStockModal
