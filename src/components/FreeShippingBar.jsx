import React from 'react'

function FreeShippingBar({ cartTotal, threshold = 2000 }) {
  const progress = Math.min((cartTotal / threshold) * 100, 100)
  const remaining = threshold - cartTotal
  const hasQualified = cartTotal >= threshold

  return (
    <div className={`p-4 rounded-xl mb-4 ${hasQualified ? 'bg-gradient-to-r from-green/20 to-cyan/20 border-2 border-green' : 'bg-gradient-to-r from-accent/10 to-purple/10 border-2 border-accent/20'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-dark">
          {hasQualified ? (
            <span className="flex items-center gap-2">
              <span className="text-lg">🎉</span> FREE Shipping Unlocked!
            </span>
          ) : (
            <span>🚚 Add <span className="text-accent">PKR {remaining.toLocaleString()}</span> for FREE Shipping</span>
          )}
        </span>
        <span className="text-xs text-accentDark font-medium">
          PKR {cartTotal.toLocaleString()} / {threshold.toLocaleString()}
        </span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${hasQualified ? 'bg-gradient-to-r from-green to-cyan' : 'bg-gradient-to-r from-accent via-purple to-pink'}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      {!hasQualified && progress > 50 && (
        <p className="text-xs text-center text-accentDark mt-2 animate-pulse">
          ⚡ You're so close! Almost there...
        </p>
      )}
    </div>
  )
}

export default FreeShippingBar
