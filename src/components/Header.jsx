import React from 'react'

function Header({ cartCount, onCartClick, wishlistCount, onWishlistClick }) {
  return (
    <header className="sticky top-0 z-50 glass border-b-2 border-accent/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent via-purple to-pink rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-2xl font-black gradient-text">LA Pakistan</h1>
            <span className="hidden sm:inline-block px-3 py-1 bg-gradient-to-r from-accent to-purple text-white text-xs rounded-full">
              Premium Skincare
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onWishlistClick}
              className="relative p-2 rounded-xl hover:bg-pink/10 transition-colors group"
              aria-label="Wishlist"
            >
              <svg className="w-6 h-6 text-pink group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink to-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-xl hover:bg-accent/10 transition-colors group"
              aria-label="Shopping cart"
            >
              <svg className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-accent to-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
