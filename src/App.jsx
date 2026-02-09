import React, { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import TrustBadges from './components/TrustBadges'
import ProductGrid from './components/ProductGrid'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import TrustSections from './components/TrustSections'
import StatsSection from './components/StatsSection'
import Footer from './components/Footer'
import Cart from './components/Cart'
import ProductModal from './components/ProductModal'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import LoadingSkeleton from './components/LoadingSkeleton'
import SEO from './components/SEO'
import WhatsAppWidget from './components/WhatsAppWidget'
import SalesNotification from './components/SalesNotification'
import CountdownTimer from './components/CountdownTimer'
import NewsletterPopup from './components/NewsletterPopup'
import SortFilter from './components/SortFilter'
import BundleDeals from './components/BundleDeals'
import TrendingProducts from './components/TrendingProducts'
import FeaturesBanner from './components/FeaturesBanner'
import BackInStockModal from './components/BackInStockModal'
import products from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [recentlyViewed, setRecentlyViewed] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [toast, setToast] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('default')
  const [filters, setFilters] = useState({ price: 'all', stock: 'all' })
  const [backInStockProduct, setBackInStockProduct] = useState(null)

  // Set flash sale end time (24 hours from now)
  const flashSaleEndTime = useMemo(() => {
    const end = new Date()
    end.setHours(end.getHours() + 24)
    return end.toISOString()
  }, [])

  useEffect(() => {
    const savedCart = localStorage.getItem('lapak-cart')
    const savedWishlist = localStorage.getItem('lapak-wishlist')
    const savedRecentlyViewed = localStorage.getItem('lapak-recently-viewed')
    
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
    if (savedRecentlyViewed) setRecentlyViewed(JSON.parse(savedRecentlyViewed))
    
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  useEffect(() => {
    localStorage.setItem('lapak-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('lapak-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  useEffect(() => {
    localStorage.setItem('lapak-recently-viewed', JSON.stringify(recentlyViewed))
  }, [recentlyViewed])

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
  }

  const addToCart = (product) => {
    if (product.stock === 0) {
      setBackInStockProduct(product)
      return
    }
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
    showToast(`${product.name} added to cart! 🎉`)
  }

  const addBundle = (bundle) => {
    setCart([...cart, { 
      id: bundle.id, 
      name: bundle.name, 
      price: bundle.bundlePrice,
      originalPrice: bundle.originalPrice,
      image: bundle.image,
      size: 'Bundle',
      quantity: 1,
      isBundle: true
    }])
    showToast(`${bundle.name} bundle added! 🎁`)
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const clearCart = () => {
    setCart([])
    showToast('Cart cleared!')
  }

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
      showToast('Removed from wishlist')
    } else {
      setWishlist([...wishlist, productId])
      showToast('Added to wishlist! ❤️')
    }
  }

  const handleQuickView = (product) => {
    setSelectedProduct(product)
    if (!recentlyViewed.find(p => p.id === product.id)) {
      setRecentlyViewed([product, ...recentlyViewed].slice(0, 4))
    }
  }

  const handleSortChange = (value) => {
    setSortBy(value)
  }

  const handleFilterChange = (type, value) => {
    if (type === 'clear') {
      setFilters({ price: 'all', stock: 'all' })
    } else {
      setFilters(prev => ({ ...prev, [type]: value }))
    }
  }

  const categories = ['All', ...new Set(products.map(p => p.category))]

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory)
    }

    // Price filter
    if (filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number)
      if (max) {
        result = result.filter(p => p.price >= min && p.price <= max)
      } else {
        result = result.filter(p => p.price >= 800)
      }
    }

    // Stock filter
    if (filters.stock === 'instock') {
      result = result.filter(p => p.stock > 0)
    } else if (filters.stock === 'lowstock') {
      result = result.filter(p => p.stock > 0 && p.stock <= 10)
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'bestseller':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
        break
      case 'newest':
        result.sort((a, b) => (a.badge === 'New' ? -1 : 1))
        break
      default:
        break
    }

    return result
  }, [products, searchQuery, selectedCategory, filters, sortBy])

  const activeFiltersCount = Object.values(filters).filter(v => v !== 'all').length

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      
      {/* Flash Sale Countdown */}
      <CountdownTimer endTime={flashSaleEndTime} title="🔥 Flash Sale Ends In" />
      
      <PromoBanner />
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onWishlistClick={() => showToast(`You have ${wishlist.length} items in wishlist! ❤️`)}
      />
      
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <FeaturesBanner />
        
        {/* Trending Products Section */}
        <TrendingProducts 
          products={products}
          onQuickView={handleQuickView}
          onAddToCart={addToCart}
        />
        
        {/* Bundle Deals Section */}
        <BundleDeals onAddBundle={addBundle} />
        
        {/* Products Section */}
        <div id="products" className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/40 to-purple/40 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink/40 to-cyan/40 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple/20 to-accent/20 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-black gradient-text mb-3">
                🛍️ All Products
              </h2>
              <p className="text-lg text-accentDark font-medium">
                Dermatologist-recommended skincare solutions
              </p>
            </div>

            {/* Search & Categories */}
            <div className="mb-6 space-y-4">
              <input
                type="text"
                placeholder="🔍 Search for your perfect product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-accent/20 glass focus:outline-none focus:ring-4 focus:ring-accent/30 transition-all text-lg shadow-xl"
              />
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-accent via-purple to-pink text-white shadow-xl shadow-purple/50'
                        : 'glass text-dark hover:bg-accent hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & Filter */}
            <SortFilter 
              onSortChange={handleSortChange}
              onFilterChange={handleFilterChange}
              totalProducts={filteredProducts.length}
              activeFilters={activeFiltersCount}
            />
            
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <ProductGrid
                products={filteredProducts}
                onAddToCart={addToCart}
                onQuickView={handleQuickView}
                wishlist={wishlist}
                onToggleWishlist={toggleWishlist}
              />
            )}

            {/* Recently Viewed */}
            {recentlyViewed.length > 0 && (
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black gradient-text mb-2">👀 Recently Viewed</h2>
                  <p className="text-accentDark">Products you've checked out</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {recentlyViewed.map(product => (
                    <div
                      key={product.id}
                      onClick={() => handleQuickView(product)}
                      className="glass rounded-xl p-4 cursor-pointer hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-accent"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover rounded-lg mb-2"
                        onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="200" fill="%23e0e7ff"/%3E%3C/svg%3E'}
                      />
                      <p className="text-sm font-bold text-dark truncate">{product.name}</p>
                      <p className="text-xs text-accent font-semibold">PKR {product.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <StatsSection />
        <Testimonials />
        <FAQ />
        <TrustSections />
      </main>
      
      <Footer />
      
      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
      
      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
      
      {/* Back in Stock Modal */}
      <BackInStockModal
        product={backInStockProduct}
        isOpen={!!backInStockProduct}
        onClose={() => setBackInStockProduct(null)}
      />
      
      {/* Newsletter Popup */}
      <NewsletterPopup />
      
      {/* Social Proof Notifications */}
      <SalesNotification products={products} />
      
      {/* Scroll to Top */}
      <ScrollToTop />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber="923054573962" 
        message="Hi! I'm interested in LA Pakistan skincare products. Can you help me?" 
      />
      
      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default App
