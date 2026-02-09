import React from 'react'

const features = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'On orders over PKR 2,000'
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    description: '100% secure checkout'
  },
  {
    icon: '💯',
    title: 'Authentic Products',
    description: 'Genuine LA Pharma items'
  },
  {
    icon: '🔄',
    title: 'Easy Returns',
    description: '7-day return policy'
  },
  {
    icon: '💬',
    title: '24/7 Support',
    description: 'WhatsApp assistance'
  }
]

function FeaturesBanner() {
  return (
    <div className="bg-gradient-to-r from-dark via-accentDark to-dark py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...features, ...features].map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 mx-8"
          >
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <p className="text-white font-bold">{feature.title}</p>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesBanner
