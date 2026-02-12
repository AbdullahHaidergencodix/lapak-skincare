import React from 'react'

function Testimonials() {
  const testimonials = [
    {
      name: "Pharmacy Owner",
      location: "Karachi",
      role: "Wholesale Partner",
      text: "We've been stocking LA Pakistan products for 3 years. Our customers trust DR Fatima Abid's recommendations. Quality is always consistent.",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      location: "Lahore",
      role: "Verified Customer",
      text: "Aquaphil Lotion completely transformed my dry skin. Finally found products that actually work! Fast delivery and authentic products.",
      rating: 5
    },
    {
      name: "Medical Store",
      location: "Islamabad",
      role: "Wholesale Partner",
      text: "Professional service, authentic products, competitive pricing. LA Pakistan is our trusted supplier. Their team is always helpful.",
      rating: 5
    },
    {
      name: "Ali Hassan",
      location: "Faisalabad",
      role: "Verified Customer",
      text: "Acnela Face Wash cleared my acne in just 3 weeks! Being from the same city as LA Pakistan, I trust their science-backed products from Obliege Pharmaceutical.",
      rating: 5
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary via-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text mb-3 md:mb-4">⭐ What People Say</h2>
          <p className="text-sm md:text-lg text-accentDark">Trusted by thousands across Pakistan since 2012</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-orange fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-dark leading-relaxed mb-4 text-sm md:text-base italic">"{testimonial.text}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-accent to-purple rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-accentDark">{testimonial.role} • {testimonial.location}</p>
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
