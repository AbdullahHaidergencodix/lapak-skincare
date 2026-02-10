import React from 'react'

function Hero() {
  const scrollTo = () => {
    const el = document.getElementById('products')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-float" style={{animationDelay:'2s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-glow"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="glass-strong inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 animate-fade-in shadow-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-700 text-sm font-medium">Led by DR Fatima Abid • Since 2012</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{animationDelay:'0.1s'}}>
          <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">Premium Skincare</span>
          <br />
          <span className="bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg">
            & Aesthetics
          </span>
        </h1>
        
        <p className="text-lg text-white/90 max-w-xl mx-auto mb-8 animate-fade-in drop-shadow-lg" style={{animationDelay:'0.2s'}}>
          Professional skincare formulations trusted by families across Pakistan
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{animationDelay:'0.3s'}}>
          <span className="glass-strong px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow">🚚 Free Shipping 2000+</span>
          <span className="glass-strong px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow">💼 Wholesale Available</span>
          <span className="glass-strong px-4 py-2 rounded-full text-gray-700 text-sm font-medium shadow">✨ 100% Authentic</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay:'0.4s'}}>
          <button onClick={scrollTo} className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 transition-all">
            Shop Now ✨
          </button>
          <a href="https://wa.me/923054573962" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass-strong rounded-2xl text-gray-700 font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Wholesale Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
