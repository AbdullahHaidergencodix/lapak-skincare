import React, { useState } from 'react'

function SortFilter({ onSortChange, onFilterChange, totalProducts, activeFilters }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const sortOptions = [
    { value: 'default', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'bestseller', label: 'Best Sellers' }
  ]

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-300', label: 'Under PKR 300' },
    { value: '300-500', label: 'PKR 300 - 500' },
    { value: '500-800', label: 'PKR 500 - 800' },
    { value: '800+', label: 'PKR 800+' }
  ]

  const stockFilters = [
    { value: 'all', label: 'All Products' },
    { value: 'instock', label: 'In Stock Only' },
    { value: 'lowstock', label: 'Low Stock (Hurry!)' }
  ]

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <p className="text-accentDark font-medium">
          Showing <span className="text-accent font-bold">{totalProducts}</span> products
        </p>
        
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <div className="relative">
            <select
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border-2 border-accent/20 rounded-xl px-4 py-2 pr-10 font-medium text-dark focus:outline-none focus:border-accent cursor-pointer"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-accent pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${isFilterOpen ? 'bg-accent text-white' : 'bg-white border-2 border-accent/20 text-dark hover:border-accent'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {activeFilters > 0 && (
              <span className="bg-pink text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {activeFilters}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="bg-white rounded-2xl border-2 border-accent/20 p-6 animate-slide-up">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Price Range */}
            <div>
              <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                💰 Price Range
              </h4>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => onFilterChange('price', range.value)}
                    className="px-4 py-2 rounded-full text-sm font-medium border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all"
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div>
              <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
                📦 Availability
              </h4>
              <div className="flex flex-wrap gap-2">
                {stockFilters.map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => onFilterChange('stock', filter.value)}
                    className="px-4 py-2 rounded-full text-sm font-medium border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all"
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <div className="mt-6 pt-4 border-t border-accent/10 flex justify-end">
            <button
              onClick={() => onFilterChange('clear', null)}
              className="text-accent font-medium hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SortFilter
