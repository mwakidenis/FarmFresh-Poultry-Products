import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, ChevronRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import MPesaPayment from '../components/checkout/MPesaPayment';
import toast from 'react-hot-toast';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'cash'>('mpesa');
  const [showMpesaForm, setShowMpesaForm] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address?.street || '',
    city: user?.address?.city || '',
    county: user?.address?.county || '',
    postalCode: user?.address?.postalCode || ''
  });
  
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            You need to add items to your cart before proceeding to checkout.
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  
  const handlePaymentMethodSelect = (method: 'mpesa' | 'cash') => {
    setPaymentMethod(method);
    if (method === 'cash') {
      handlePlaceOrder();
    } else {
      setShowMpesaForm(true);
    }
  };
  
  const handleMpesaComplete = (reference: string) => {
    // Process order with M-Pesa payment
    handlePlaceOrder(reference);
  };
  
  const handlePlaceOrder = (mpesaReference?: string) => {
    // Simulate order processing
    setTimeout(() => {
      // Generate order number
      const orderNumber = 'ORD' + Math.floor(Math.random() * 1000000);
      
      // Clear cart
      clearCart();
      
      // Show success message
      toast.success('Order placed successfully!');
      
      // Navigate to confirmation
      navigate('/order-confirmation', { 
        state: { 
          orderNumber,
          paymentMethod,
          mpesaReference
        } 
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === 'details' || step === 'payment' || step === 'confirmation'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step !== 'details' ? <Check className="h-5 w-5" /> : 1}
            </div>
            <span className="text-sm mt-2 text-gray-600">Details</span>
          </div>
          
          <div className="flex-1 h-1 mx-2 bg-gray-200">
            <div className={`h-full ${
              step === 'payment' || step === 'confirmation' ? 'bg-amber-600' : 'bg-gray-200'
            }`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === 'payment' || step === 'confirmation'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step === 'confirmation' ? <Check className="h-5 w-5" /> : 2}
            </div>
            <span className="text-sm mt-2 text-gray-600">Payment</span>
          </div>
          
          <div className="flex-1 h-1 mx-2 bg-gray-200">
            <div className={`h-full ${
              step === 'confirmation' ? 'bg-amber-600' : 'bg-gray-200'
            }`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === 'confirmation'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
            <span className="text-sm mt-2 text-gray-600">Confirmation</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {step === 'details' && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Details</h2>
              
              <form onSubmit={handleDetailsSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City/Town *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">
                      County *
                    </label>
                    <input
                      type="text"
                      id="county"
                      name="county"
                      value={formData.county}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Link
                    to="/cart"
                    className="px-4 py-2 text-amber-600 border border-amber-600 rounded-md hover:bg-amber-50 transition-colors"
                  >
                    Back to Cart
                  </Link>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Continue to Payment <ChevronRight className="inline-block ml-1 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {step === 'payment' && (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Payment Method</h2>
              
              {!showMpesaForm ? (
                <div className="space-y-4 mb-6">
                  <div
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === 'mpesa'
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-300 hover:border-amber-500 hover:bg-amber-50'
                    }`}
                    onClick={() => setPaymentMethod('mpesa')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        paymentMethod === 'mpesa' ? 'border-amber-500' : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'mpesa' && (
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">M-Pesa</p>
                        <p className="text-sm text-gray-600">Pay directly from your M-Pesa account</p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    className={`border rounded-md p-4 cursor-pointer ${
                      paymentMethod === 'cash'
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-gray-300 hover:border-amber-500 hover:bg-amber-50'
                    }`}
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                        paymentMethod === 'cash' ? 'border-amber-500' : 'border-gray-300'
                      }`}>
                        {paymentMethod === 'cash' && (
                          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Cash on Delivery</p>
                        <p className="text-sm text-gray-600">Pay when your order is delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <MPesaPayment
                  amount={subtotal}
                  onComplete={handleMpesaComplete}
                  onCancel={() => setShowMpesaForm(false)}
                />
              )}
              
              {!showMpesaForm && (
                <div className="flex justify-between">
                  <button
                    onClick={() => setStep('details')}
                    className="px-4 py-2 text-amber-600 border border-amber-600 rounded-md hover:bg-amber-50 transition-colors"
                  >
                    Back to Details
                  </button>
                  <button
                    onClick={() => handlePaymentMethodSelect(paymentMethod)}
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    {paymentMethod === 'mpesa' ? 'Continue with M-Pesa' : 'Place Order'} <ChevronRight className="inline-block ml-1 h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="max-h-64 overflow-y-auto mb-6">
              {cart.map((item) => {
                const product = item.product;
                const price = product.discountPrice || product.price;
                
                return (
                  <div key={product.id} className="flex py-3 border-b border-gray-200 last:border-b-0">
                    <div className="h-16 w-16 flex-shrink-0 rounded overflow-hidden mr-3">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-medium line-clamp-1">{product.name}</h3>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      <p className="text-gray-800 mt-1">KSh {(price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t pt-2 mt-2 border-gray-200">
                <div className="flex justify-between font-medium">
                  <span className="text-gray-800">Total</span>
                  <span className="text-gray-900">KSh {subtotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-6">
              <p>We accept M-Pesa and Cash on Delivery</p>
              <p className="mt-2">Your personal data will be used to process your order and support your experience throughout this website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;