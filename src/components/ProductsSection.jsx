import React, { useState, useMemo } from 'react'
import ProductCard from './ProductCard'

function ProductsSection({ products, onAddToCart, onQuickView, onToggleWishlist, wishlist, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['All', ...new Set(products.map(p => p.category))]

  const filteredProducts = useMemo(() => {
    let result = [...products]
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
    }
    
    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }
    
    return result
  }, [products, selectedCategory, sortBy, searchQuery])

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Our Products</h2>
          <p className="text-white/80 max-w-xl mx-auto">Professional skincare solutions for every skin type</p>
        </div>

        {/* Filters */}
        <div className="glass-strong rounded-2xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' : 'bg-white/50 text-gray-700 hover:bg-white/70'}`}>
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Sort */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/80 rounded-xl text-gray-700 text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-purple-400">
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-strong rounded-2xl p-12 text-center">
            <p className="text-xl text-gray-600">No products found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
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
        )}
        
        <p className="text-center text-white/60 text-sm mt-8">Showing {filteredProducts.length} of {products.length} products</p>
      </div>
    </section>
  )
}

export default ProductsSection
