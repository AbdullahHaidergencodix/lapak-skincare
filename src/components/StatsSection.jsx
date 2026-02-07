import React, { useState, useEffect, useRef } from 'react'

function StatsSection() {
  const [counts, setCounts] = useState({ products: 0, customers: 0, reviews: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounts({
        products: Math.floor(15 * progress),
        customers: Math.floor(5000 * progress),
        reviews: Math.floor(1200 * progress),
      })

      if (step >= steps) clearInterval(timer)
    }, interval)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-accent via-purple to-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-accent mb-2">{counts.products}+</div>
            <div className="text-dark font-medium">Premium Products</div>
          </div>
          <div className="glass rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-purple mb-2">{counts.customers}+</div>
            <div className="text-dark font-medium">Happy Customers</div>
          </div>
          <div className="glass rounded-2xl p-8 transform hover:scale-105 transition-transform">
            <div className="text-5xl font-bold text-pink mb-2">{counts.reviews}+</div>
            <div className="text-dark font-medium">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
