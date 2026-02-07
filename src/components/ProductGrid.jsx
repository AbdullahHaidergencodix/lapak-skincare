import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({ products, onAddToCart, onQuickView, wishlist, onToggleWishlist }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-xl text-accent font-medium">No products found</p>
        <p className="text-accentDark mt-2">Try a different search or category</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={wishlist.includes(product.id)}
        />
      ))}
    </div>
  )
}

export default ProductGrid
