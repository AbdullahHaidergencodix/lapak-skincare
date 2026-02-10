import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import TrendingSection from './components/TrendingSection'
import BundlesSection from './components/BundlesSection'
import ProductsSection from './components/ProductsSection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import CartDrawer from './components/CartDrawer'
import WishlistModal from './components/WishlistModal'
import QuickViewModal from './components/QuickViewModal'
import Toast from './components/Toast'
import products from './data/products'
import bundles from './data/bundles'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false })

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('lapak-cart')
    const savedWishlist = localStorage.getItem('lapak-wishlist')
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('lapak-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('lapak-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const showToast = (message, type = 'success') => {
    setToast({ message, type, visible: true })
  }

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    showToast(`${product.name} added to cart!`)
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item))
    }
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
    showToast('Item removed from cart', 'info')
  }

  const toggleWishlist = (id) => {
    setWishlist(prev => {
      if (prev.includes(id)) {
        showToast('Removed from wishlist', 'info')
        return prev.filter(i => i !== id)
      }
      showToast('Added to wishlist! 💕')
      return [...prev, id]
    })
  }

  const addBundle = (bundle, bundleProducts) => {
    bundleProducts.forEach(p => addToCart(p))
    showToast(`${bundle.name} added to cart!`)
  }

  const handleCheckout = () => {
    const items = cart.map(item => `• ${item.name} (${item.size}) x${item.quantity} - PKR ${(item.price * item.quantity).toLocaleString()}`).join('\n')
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const message = `🛒 *New Order from LA Pakistan*\n\n${items}\n\n*Total: PKR ${total.toLocaleString()}*\n\nPlease confirm my order!`
    window.open(`https://wa.me/923054573962?text=${encodeURIComponent(message)}`, '_blank')
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onWishlistClick={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero />
        <TrustBadges />
        <TrendingSection products={products} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onToggleWishlist={toggleWishlist} wishlist={wishlist} />
        <BundlesSection bundles={bundles} products={products} onAddBundle={addBundle} />
        <ProductsSection products={products} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onToggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery} />
        <ReviewsSection products={products} />
        <FAQSection />
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onCheckout={handleCheckout} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} wishlistItems={wishlist} onRemoveFromWishlist={toggleWishlist} onAddToCart={addToCart} products={products} />
      <QuickViewModal product={quickViewProduct} isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false} />
      <Toast message={toast.message} type={toast.type} isVisible={toast.visible} onClose={() => setToast(prev => ({ ...prev, visible: false }))} />
    </div>
  )
}

export default App
