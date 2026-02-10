import React from 'react'
import ProductCard from './ProductCard'

function TrendingSection({ products, onAddToCart, onQuickView, onToggleWishlist, wishlist }) {
  const trending = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular').slice(0, 4)

  if (trending.length === 0) return null

  return (
    <section id="trending" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Trending Now 🔥</h2>
          <p className="text-white/80">Our most loved products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trending.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
