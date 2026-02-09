import React, { useState, useEffect } from 'react'

function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('lapak-newsletter-seen')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 15000) // Show after 15 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('lapak-newsletter-seen', 'true')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      localStorage.setItem('lapak-newsletter-seen', 'true')
      setTimeout(() => setIsOpen(false), 3000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-dark/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slide-up relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-gradient-to-br from-accent via-purple to-pink p-8 text-center">
          <div className="text-6xl mb-4">🎁</div>
          <h2 className="text-3xl font-black text-white mb-2">Get 15% OFF</h2>
          <p className="text-white/90">Your First Order!</p>
        </div>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold gradient-text mb-2">You're In!</h3>
              <p className="text-accentDark">Check your email for your discount code: <span className="font-bold text-accent">WELCOME15</span></p>
            </div>
          ) : (
            <>
              <p className="text-center text-accentDark mb-6">
                Subscribe to our newsletter and get exclusive deals, skincare tips, and early access to new products!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-4 rounded-xl border-2 border-accent/20 focus:border-accent focus:outline-none transition-colors text-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent via-purple to-pink text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple/30 transition-all transform hover:scale-[1.02]"
                >
                  Get My 15% Off 🎉
                </button>
              </form>
              <p className="text-xs text-center text-gray-400 mt-4">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>

        <div className="bg-secondary/50 p-4 flex justify-center gap-6 text-sm text-accentDark">
          <span className="flex items-center gap-1">✓ Free Shipping</span>
          <span className="flex items-center gap-1">✓ Easy Returns</span>
          <span className="flex items-center gap-1">✓ Secure Payment</span>
        </div>
      </div>
    </div>
  )
}

export default NewsletterPopup
