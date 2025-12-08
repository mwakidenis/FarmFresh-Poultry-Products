import React from 'react';
import { OptimizedImageProps, handleImageError } from '../../utils/imageService';

/**
 * OptimizedImage Component - Enhanced image component with fallbacks and optimization
 * 
 * Features:
 * - Automatic fallback for failed image loads
 * - Lazy loading support
 * - Category-specific placeholder generation
 * - SEO-friendly alt text
 * - Performance optimized
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fallback,
  category,
  productName,
  loading = 'lazy',
  width,
  height,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onError={(event) => handleImageError(event, fallback, category, productName)}
      {...props}
    />
  );
};

export default OptimizedImage;