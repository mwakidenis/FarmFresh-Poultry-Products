import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface LocationState {
  orderNumber: string;
  paymentMethod: 'mpesa' | 'cash';
  mpesaReference?: string;
}

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  if (!state || !state.orderNumber) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600">
            Your order has been received and is now being processed.
          </p>
        </div>
        
        <div className="border-t border-b border-gray-200 py-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="font-medium text-gray-800">{state.orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Date</p>
              <p className="font-medium text-gray-800">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Payment Method</p>
              <p className="font-medium text-gray-800 capitalize">{state.paymentMethod}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <p className="font-medium text-green-600">Processing</p>
            </div>
          </div>
        </div>
        
        {state.paymentMethod === 'mpesa' && state.mpesaReference && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
            <p className="text-green-800">
              <span className="font-medium">M-Pesa Payment Received</span><br />
              Reference: {state.mpesaReference}
            </p>
          </div>
        )}
        
        {state.paymentMethod === 'cash' && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
            <p className="text-amber-800">
              <span className="font-medium">Cash on Delivery</span><br />
              Please have the exact amount ready when your order is delivered.
            </p>
          </div>
        )}
        
        <p className="text-gray-600 mb-8">
          You will receive an email confirmation shortly at your registered email address.
          If you have any questions about your order, please contact our customer support team.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/"
            className="px-6 py-3 bg-amber-600 text-white text-center font-medium rounded-md hover:bg-amber-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/orders"
            className="px-6 py-3 border border-gray-300 text-gray-700 text-center font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            View Order History <ArrowRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;