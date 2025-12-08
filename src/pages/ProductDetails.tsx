import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById, getProductsByCategory } from '../data/products';
import ProductCard from '../components/common/ProductCard';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);
  
  const product = productId ? getProductById(productId) : null;
  
  useEffect(() => {
    // Reset state when product changes
    if (product) {
      setQuantity(1);
      setActiveImage(0);
      setAdded(false);
      
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }, [productId, product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse Products
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Math.min(value, product.stock));
    setQuantity(newQuantity);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    
    // Reset added state after 3 seconds
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  };
  
  // Get related products (same category, excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to={`/category/${product.category}`} className="hover:text-amber-600 capitalize">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>
      
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Product Images */}
        <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="relative pb-[75%] bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                    activeImage === index
                      ? 'border-amber-500'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="lg:w-1/2 px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="text-sm capitalize px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
              {product.category}
            </div>
            <div className="mx-3 h-1 w-1 bg-gray-300 rounded-full"></div>
            <div className={`text-sm px-3 py-1 rounded-full ${
              product.stock > 10
                ? 'bg-green-100 text-green-800'
                : product.stock > 0
                ? 'bg-amber-100 text-amber-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {product.stock > 10
                ? 'In Stock'
                : product.stock > 0
                ? `Only ${product.stock} left`
                : 'Out of Stock'}
            </div>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-900">
                  KSh {product.discountPrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through ml-3">
                  KSh {product.price.toLocaleString()}
                </span>
                <span className="ml-3 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded">
                  Save {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-gray-900">
                KSh {product.price.toLocaleString()}
              </span>
            )}
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center mb-4">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
                className="p-2 border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                className="p-2 w-16 text-center border-t border-b border-gray-300 focus:outline-none"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
                className="p-2 border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0 || added}
              className={`w-full py-3 px-6 rounded-md transition-colors ${
                added
                  ? 'bg-green-600 text-white'
                  : product.stock === 0
                  ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700'
              }`}
            >
              {added ? (
                <span className="flex items-center justify-center">
                  <Check className="mr-2 h-5 w-5" /> Added to Cart
                </span>
              ) : product.stock === 0 ? (
                'Out of Stock'
              ) : (
                <span className="flex items-center justify-center">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </span>
              )}
            </button>
          </div>
          
          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
            <Link
              to={`/category/${product.category}`}
              className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;