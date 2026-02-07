import React from 'react'

function TrustBadges() {
  return (
    <section className="py-8 bg-white border-y-2 border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green to-cyan rounded-full flex items-center justify-center text-3xl">
              ✓
            </div>
            <p className="font-bold text-dark text-sm">100% Authentic</p>
            <p className="text-xs text-accentDark">Verified Products</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple to-pink rounded-full flex items-center justify-center text-3xl">
              🏥
            </div>
            <p className="font-bold text-dark text-sm">Doctor Backed</p>
            <p className="text-xs text-accentDark">Dermatologist Approved</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple rounded-full flex items-center justify-center text-3xl">
              🚚
            </div>
            <p className="font-bold text-dark text-sm">Fast Delivery</p>
            <p className="text-xs text-accentDark">Nationwide Shipping</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange to-pink rounded-full flex items-center justify-center text-3xl">
              💼
            </div>
            <p className="font-bold text-dark text-sm">Wholesale Ready</p>
            <p className="text-xs text-accentDark">Pharmacy Partners</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
