import React from 'react';

/**
 * Skeleton Loading Component - Provides animated loading placeholders
 * 
 * Features:
 * - Animated shimmer effect
 * - Configurable dimensions and shapes
 * - Accessible loading indicators
 * - Multiple skeleton types (text, card, product)
 */

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4' 
}) => (
  <div 
    className={`${width} ${height} bg-gray-200 rounded animate-pulse ${className}`}
    role="status"
    aria-label="Loading..."
  />
);

// Product Card Skeleton
export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-2/3" />
      <div className="flex items-center justify-between mt-4">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-8 w-8 bg-gray-200 rounded" />
      </div>
    </div>
  </div>
);

// Search Results Skeleton
export const SearchResultsSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="flex items-center p-3 animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0" />
      <div className="ml-3 flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/4" />
      </div>
    </div>
  </div>
);

// Page Loading Skeleton
export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50 animate-pulse">
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 bg-gray-200 rounded w-1/3 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

// Text Skeleton for various content
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        width={i === lines - 1 ? 'w-2/3' : 'w-full'} 
        height="h-4" 
      />
    ))}
  </div>
);

export default Skeleton;