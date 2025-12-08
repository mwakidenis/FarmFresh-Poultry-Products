import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId);
    toast.success(`${productName} removed from wishlist!`);
  };

  if (wishlist.length === 0) {
    return (
      <>
        <Helmet>
          <title>My Wishlist - Save Your Favorite Products | FarmFresh Poultry</title>
          <meta name="description" content="Save your favorite poultry products for later. Create your personal wishlist of premium products from FarmFresh Poultry." />
        </Helmet>
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start adding your favorite products to your wishlist so you can easily find them later!
            </p>
            <Link 
              to="/products" 
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Wishlist ({wishlist.length} items) - FarmFresh Poultry</title>
        <meta name="description" content="Your saved favorite products from FarmFresh Poultry. Premium poultry products you love." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Wishlist</h1>
            <p className="text-gray-600">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
          </div>
          
          {wishlist.length > 0 && (
            <button
              onClick={() => {
                clearWishlist();
                toast.success('Wishlist cleared!');
              }}
              className="flex items-center px-4 py-2 text-red-600 border border-red-300 rounded-md hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0] || '/placeholder-product.jpg'}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                {product.discountPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    Sale
                  </div>
                )}

                <button
                  onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                  className="absolute top-2 right-2 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
                >
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded">
                    {product.category}
                  </span>
                </div>

                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.discountPrice ? (
                      <>
                        <span className="text-lg font-bold text-amber-600">
                          KSh {product.discountPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          KSh {product.price.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-800">
                        KSh {product.price.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center px-3 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors text-sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default Wishlist;