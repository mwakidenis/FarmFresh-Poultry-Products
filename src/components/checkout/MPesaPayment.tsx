import React, { useState } from 'react';
import { Phone, Check, AlertCircle } from 'lucide-react';

interface MPesaPaymentProps {
  amount: number;
  onComplete: (reference: string) => void;
  onCancel: () => void;
}

const MPesaPayment: React.FC<MPesaPaymentProps> = ({ amount, onComplete, onCancel }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  
  // Enhanced Kenyan phone number validation
  const isValidPhoneNumber = (number: string) => {
    // Remove spaces and special characters
    const cleanNumber = number.replace(/[\s-()]/g, '');
    
    // Comprehensive validation for Kenyan phone numbers
    // Formats: +254XXXXXXXXX, 254XXXXXXXXX, 07XXXXXXXX, 01XXXXXXXX
    const patterns = [
      /^\+254[17]\d{8}$/, // +254XXXXXXXXX
      /^254[17]\d{8}$/,   // 254XXXXXXXXX  
      /^0[17]\d{8}$/      // 0XXXXXXXXX
    ];
    
    return patterns.some(pattern => pattern.test(cleanNumber));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Please enter a valid Kenyan phone number (e.g., +254712345678, 0712345678)');
      return;
    }
    
    setLoading(true);
    setStatus('pending');
    setError(''); // Clear any previous errors
    
    // Simulate M-Pesa STK push and payment
    setTimeout(() => {
      // 90% chance of success for demo purposes
      if (Math.random() < 0.9) {
        setStatus('success');
        // Generate fake M-Pesa reference with timestamp
        const timestamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 14);
        const reference = 'MPESA' + timestamp + Math.floor(Math.random() * 1000);
        onComplete(reference);
      } else {
        setStatus('error');
        setError('Payment failed. Please check your M-Pesa balance and try again, or contact M-Pesa customer support.');
      }
      setLoading(false);
    }, 3000);
  };
  
  if (status === 'success') {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Payment Successful!</h3>
        <p className="text-green-700 mb-4">
          Your M-Pesa payment has been received. Thank you for your order.
        </p>
      </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div className="text-center p-6 bg-red-50 rounded-lg">
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <AlertCircle className="h-8 w-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-red-800 mb-2">Payment Failed</h3>
        <p className="text-red-700 mb-4">{error}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setStatus('idle')}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Phone className="w-6 h-6 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold">M-Pesa Payment</h3>
      </div>
      
      <div className="bg-amber-50 p-4 rounded-md mb-6">
        <p className="text-amber-800 text-sm">
          You will receive an M-Pesa prompt on your phone to complete the payment of 
          <span className="font-bold"> KSh {amount.toLocaleString()}</span>.
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            M-Pesa Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="e.g., 0712345678 or +254712345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter the phone number registered with M-Pesa
          </p>
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 bg-green-600 text-white rounded-md transition-colors ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay with M-Pesa'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MPesaPayment;