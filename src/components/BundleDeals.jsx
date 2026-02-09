import React from 'react'

const bundles = [
  {
    id: 'bundle-1',
    name: 'Acne Fighter Bundle',
    description: 'Complete acne care routine for clear skin',
    products: ['Acnela Bar', 'Acnela Cream', 'Acnela Face Wash'],
    originalPrice: 1490,
    bundlePrice: 1190,
    savings: 300,
    image: '/content/images/acnela-bar.jpg',
    badge: 'Most Popular'
  },
  {
    id: 'bundle-2',
    name: 'Hydration Hero Bundle',
    description: 'Ultimate moisturizing combo for dry skin',
    products: ['Aquaphil Gel', 'Aquaphil Lotion', 'Aquaphil Bar'],
    originalPrice: 1078,
    bundlePrice: 850,
    savings: 228,
    image: '/content/images/aquaphil-gel.jpg',
    badge: 'Best Value'
  },
  {
    id: 'bundle-3',
    name: 'Glow Getter Bundle',
    description: 'Premium brightening skincare set',
    products: ['Lavite Cream', 'Cariderm Cream', 'Sunla Sunblock'],
    originalPrice: 2129,
    bundlePrice: 1699,
    savings: 430,
    image: '/content/images/lavite-cream.jpg',
    badge: 'Premium'
  }
]

function BundleDeals({ onAddBundle }) {
  return (
    <section className="py-16 bg-gradient-to-br from-purple/10 via-pink/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent to-purple text-white text-sm font-bold rounded-full mb-4">
            💰 SAVE MORE
          </span>
          <h2 className="text-4xl font-black gradient-text mb-4">Bundle Deals</h2>
          <p className="text-lg text-accentDark max-w-2xl mx-auto">
            Get complete skincare routines at special prices. Curated by our experts for best results!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map(bundle => (
            <div 
              key={bundle.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-accent group"
            >
              {/* Image & Badge */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-primary overflow-hidden">
                <img 
                  src={bundle.image} 
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="200" fill="%23e0e7ff"/%3E%3C/svg%3E'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-pink to-purple text-white text-xs font-bold rounded-full">
                  {bundle.badge}
                </span>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-accentDark mb-4">{bundle.description}</p>
                
                {/* Products in Bundle */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-dark mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {bundle.products.map((product, idx) => (
                      <li key={idx} className="text-sm text-accentDark flex items-center gap-2">
                        <span className="text-green">✓</span> {product}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-accent/10 to-purple/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400 line-through">PKR {bundle.originalPrice.toLocaleString()}</p>
                      <p className="text-2xl font-black gradient-text">PKR {bundle.bundlePrice.toLocaleString()}</p>
                    </div>
                    <div className="bg-green text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save PKR {bundle.savings}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onAddBundle(bundle)}
                  className="w-full bg-gradient-to-r from-accent via-purple to-pink text-white py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-purple/30 transition-all transform hover:scale-[1.02]"
                >
                  Add Bundle to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BundleDeals
