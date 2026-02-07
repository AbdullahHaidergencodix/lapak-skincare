import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      name: "Pharmacy Owner - Karachi",
      role: "Wholesale Partner",
      text: "We've been stocking LA Pakistan products for 2 years. Our customers love the quality and results. DR Ghumman's backing gives us confidence.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      role: "Verified Customer",
      text: "Aquaphil Lotion transformed my dry skin. Finally found products that actually work! Fast delivery to Lahore.",
      rating: 5
    },
    {
      name: "Medical Store - Islamabad",
      role: "Wholesale Partner",
      text: "Professional service, authentic products, competitive pricing. Perfect partner for our pharmacy. Highly recommended.",
      rating: 5
    },
    {
      name: "Ali Hassan",
      role: "Verified Customer",
      text: "Acnela Face Wash cleared my acne in 3 weeks. Dermatologist-backed products really make a difference!",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-secondary to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black gradient-text mb-4">⭐ What People Say</h2>
          <p className="text-lg text-accentDark">Trusted by thousands across Pakistan</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-dark leading-relaxed mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
