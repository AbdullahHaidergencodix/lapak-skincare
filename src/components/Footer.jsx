import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-20">
      <div className="glass-strong mx-4 rounded-t-3xl">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-bold text-gray-800 text-xl mb-4">LA Pakistan</h3>
              <p className="text-sm text-gray-600 mb-4">Premium skincare & aesthetic products since 2012.</p>
              <div className="bg-white/50 rounded-xl p-4 text-sm space-y-2 shadow-inner">
                <p className="font-semibold text-gray-800">DR Fatima Abid</p>
                <p className="text-gray-500 text-xs">Skincare & Aesthetic Professional</p>
                <p className="font-semibold text-gray-800 mt-2">DR Muhammad Abid Yasin Ghumman</p>
                <p className="text-gray-500 text-xs">Skin Dermatologist</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
              <div className="space-y-2">
                <a href="https://wa.me/923054573962" className="flex items-center gap-3 bg-green-100/80 px-4 py-3 rounded-xl text-green-700 text-sm font-medium shadow">💬 +92 305 4573962</a>
                <a href="mailto:lapakofficials@gmail.com" className="flex items-center gap-3 bg-purple-100/80 px-4 py-3 rounded-xl text-purple-700 text-sm font-medium shadow">✉️ lapakofficials@gmail.com</a>
                <a href="https://instagram.com/lapak.officials" className="flex items-center gap-3 bg-pink-100/80 px-4 py-3 rounded-xl text-pink-700 text-sm font-medium shadow">📷 @lapak.officials</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Visit Us</h4>
              <div className="bg-white/50 rounded-xl p-4 text-gray-700 mb-4 shadow-inner">
                <p className="font-medium">📍 LA Pakistan</p>
                <p className="text-sm text-gray-500">2-Z-3, FSR Madina Town</p>
                <p className="text-sm text-gray-500">Faisalabad, Pakistan 38000</p>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>✨ 100% Authentic Products</p>
                <p>🚚 Free Shipping over PKR 2,000</p>
                <p>💼 Wholesale Available</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/40 text-center text-sm text-gray-600">
            <p>© {year} <span className="text-gray-800 font-semibold">LA Pakistan</span> — Premium Skincare & Aesthetics</p>
            <p className="mt-1 text-purple-600">Made with 💜 for beautiful skin</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
