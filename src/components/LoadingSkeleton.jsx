import React from 'react'

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
          <div className="aspect-square bg-secondary"></div>
          <div className="p-4 space-y-3">
            <div className="h-4 bg-secondary rounded w-1/3"></div>
            <div className="h-6 bg-secondary rounded w-full"></div>
            <div className="h-4 bg-secondary rounded w-full"></div>
            <div className="h-4 bg-secondary rounded w-2/3"></div>
            <div className="h-10 bg-secondary rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
