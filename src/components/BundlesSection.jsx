import React from 'react'

function BundlesSection({ bundles, products, onAddBundle, onQuickView }) {
  if (!bundles || bundles.length === 0) return null

  return (
    <section id="bundles" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Value Bundles</h2>
          <p className="text-white/80">Save more with our curated bundles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, index) => {
            const bundleProducts = bundle.products?.map(id => products.find(p => p.id === id)).filter(Boolean) || []
            
            return (
              <div key={bundle.id} className="glass-card rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex -space-x-4">
                      {bundleProducts.slice(0, 3).map((p, i) => (
                        <img 
                          key={p.id} 
                          src={p.image} 
                          alt={p.name} 
                          className="w-20 h-20 object-cover rounded-xl border-2 border-white shadow-lg cursor-pointer hover:scale-110 hover:z-10 transition-transform"
                          style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
                          onClick={() => onQuickView(p)}
                          onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} 
                        />
                      ))}
                    </div>
                  </div>
                  {bundle.badge && <span className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">{bundle.badge}</span>}
                </div>
                
                <div className="p-5 bg-white/50">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{bundle.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {bundleProducts.map(p => (
                      <button 
                        key={p.id} 
                        onClick={() => onQuickView(p)}
                        className="text-xs bg-purple-100/80 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-200 hover:scale-105 transition-all cursor-pointer font-medium"
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-700">PKR {bundle.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through">PKR {bundle.originalPrice.toLocaleString()}</span>
                    <span className="text-xs text-green-600 font-semibold bg-green-100/80 px-2 py-1 rounded-full">Save PKR {bundle.savings}</span>
                  </div>
                  
                  <button onClick={() => onAddBundle(bundle, bundleProducts)} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Add Bundle to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BundlesSection
