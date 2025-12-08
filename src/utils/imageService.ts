/**
 * Image Service - Provides fallback images and optimizes image loading
 * 
 * This service helps with:
 * - Providing fallback images when external images fail to load
 * - Generating placeholder images using SVG
 * - Optimizing image loading performance
 */

// Generate SVG placeholder images
export const generatePlaceholder = (
  width: number,
  height: number,
  text: string,
  bgColor: string = '#f3f4f6',
  textColor: string = '#6b7280'
): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
            fill="${textColor}" font-family="Arial, sans-serif" font-size="14px">
        ${text}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// Product category specific placeholders
export const getProductPlaceholder = (category: string, productName?: string): string => {
  const placeholders = {
    chicks: generatePlaceholder(400, 300, 'Chicks', '#fef3c7', '#d97706'),
    eggs: generatePlaceholder(400, 300, 'Fresh Eggs', '#fef2f2', '#dc2626'),
    chicken: generatePlaceholder(400, 300, 'Chicken', '#f0fdf4', '#16a34a'),
    products: generatePlaceholder(400, 300, 'Products', '#f0f9ff', '#0ea5e9'),
  };
  
  return placeholders[category as keyof typeof placeholders] || 
    generatePlaceholder(400, 300, productName || 'Product Image');
};

// Hero image placeholders
export const getHeroPlaceholder = (): string => {
  return generatePlaceholder(800, 600, 'Farm Fresh Poultry', '#fef3c7', '#d97706');
};

// Category image placeholders
export const getCategoryPlaceholder = (category: string): string => {
  const placeholders = {
    chicks: generatePlaceholder(300, 200, 'Healthy Chicks', '#fef3c7', '#d97706'),
    eggs: generatePlaceholder(300, 200, 'Farm Fresh Eggs', '#fef2f2', '#dc2626'),
    chicken: generatePlaceholder(300, 200, 'Premium Chicken', '#f0fdf4', '#16a34a'),
    products: generatePlaceholder(300, 200, 'Poultry Supplies', '#f0f9ff', '#0ea5e9'),
  };
  
  return placeholders[category as keyof typeof placeholders] || 
    generatePlaceholder(300, 200, 'Category');
};

// Testimonial avatars
export const getAvatarPlaceholder = (name: string): string => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return generatePlaceholder(60, 60, initials, '#f59e0b', '#ffffff');
};

// Handle image error with fallback
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement>,
  fallback?: string,
  category?: string,
  productName?: string
): void => {
  const img = event.currentTarget;
  if (fallback) {
    img.src = fallback;
  } else if (category) {
    img.src = getProductPlaceholder(category, productName);
  } else {
    img.src = generatePlaceholder(400, 300, 'Image Not Available');
  }
};

// Optimized image component props
export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  category?: string;
  productName?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}