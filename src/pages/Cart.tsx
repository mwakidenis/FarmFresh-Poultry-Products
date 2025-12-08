import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="h-20 w-20 text-gray-300" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((item) => {
                  const product = item.product;
                  const price = product.discountPrice || product.price;
                  const totalPrice = price * item.quantity;
                  
                  return (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-4">
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              to={`/product/${product.id}`}
                              className="text-gray-900 font-medium hover:text-amber-600"
                            >
                              {product.name}
                            </Link>
                            <p className="text-gray-500 text-sm mt-1 capitalize">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => updateQuantity(product.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 border-t border-b border-gray-300 text-center min-w-[40px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, item.quantity + 1)}
                            disabled={item.quantity >= product.stock}
                            className="p-1 border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-gray-700">
                        KSh {price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-gray-900">
                        KSh {totalPrice.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/products"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({totalItems})</span>
                <span className="text-gray-800">KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-800">Calculated at checkout</span>
              </div>
              <div className="border-t pt-4 mt-4 border-gray-200">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-800">Subtotal</span>
                  <span className="text-gray-900">KSh {subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="w-full block py-3 px-4 bg-amber-600 text-white text-center font-medium rounded-md hover:bg-amber-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>We accept M-Pesa and Cash on Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;