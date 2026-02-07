import React from 'react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-purple to-pink py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 mb-6">
          <p className="text-white font-bold text-sm sm:text-base">
            🏥 Trusted by Dr Fatima Abid - Skin Dermatologist
          </p>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight animate-fade-in">
          ✨ Premium Medical Skincare
          <br />
          <span className="bg-white/20 px-6 py-2 rounded-2xl inline-block mt-4">
            Since 2012
          </span>
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4">
          Dermatologist-backed formulations trusted by professionals
        </p>
        <p className="text-lg text-white/80 mb-8">
          🚚 FREE Shipping on Orders Over PKR 2000 | 💼 Wholesale Available | ⏰ 24/7 Support
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            className="bg-white text-accent px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-110"
          >
            Shop Now 🛍️
          </button>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-green text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green/50 transition-all transform hover:scale-110 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Wholesale Inquiry</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
