import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import OptimizedImage from './OptimizedImage';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success(`${product.name} removed from wishlist!`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`);
    }
  };
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[75%] overflow-hidden">
          <OptimizedImage
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            category={product.category}
            productName={product.name}
            loading="lazy"
          />
          {product.discountPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </div>
          )}
          
          {/* Wishlist button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-all duration-200"
            aria-label="Add to wishlist"
          >
            <Heart 
              className={`w-4 h-4 transition-colors ${
                isInWishlist(product.id) 
                  ? 'text-red-500 fill-current' 
                  : 'text-gray-600 hover:text-red-500'
              }`} 
            />
          </button>
        </div>
        
        <div className="p-4">
          <div className="text-sm text-amber-600 font-medium mb-1 capitalize">
            {product.category}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex justify-between items-end">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold">
                    KSh {product.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm line-through ml-2">
                    KSh {product.price.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-gray-900 font-bold">
                  KSh {product.price.toLocaleString()}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-amber-500 text-white p-2 rounded-full transition-colors hover:bg-amber-600"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;