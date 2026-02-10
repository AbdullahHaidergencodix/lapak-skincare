import React from 'react'

function TrustBadges() {
  const badges = [
    { icon: '✨', title: '100% Authentic', sub: 'Genuine Products' },
    { icon: '👩‍⚕️', title: 'Professional', sub: 'Expert Formulas' },
    { icon: '🚚', title: 'Free Delivery', sub: 'Orders 2000+' },
    { icon: '💜', title: 'Trusted', sub: 'Since 2012' },
  ]

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <span className="text-3xl mb-3 block">{badge.icon}</span>
              <p className="font-semibold text-white">{badge.title}</p>
              <p className="text-xs text-white/60">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBadges
