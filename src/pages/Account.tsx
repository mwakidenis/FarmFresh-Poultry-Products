import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Package, MapPin, LogOut } from 'lucide-react';

const Account: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-4">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'profile'
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <User className="w-5 h-5 mr-3" />
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'orders'
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Package className="w-5 h-5 mr-3" />
                    My Orders
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('addresses')}
                    className={`w-full text-left px-4 py-2 rounded-md flex items-center ${
                      activeTab === 'addresses'
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <MapPin className="w-5 h-5 mr-3" />
                    My Addresses
                  </button>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 rounded-md flex items-center text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">My Profile</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={user?.name}
                      readOnly
                      className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      readOnly
                      className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={user?.phone}
                      readOnly
                      className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">My Orders</h2>
                
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                  <p className="text-amber-800 text-sm">
                    This is a demo app. Your orders will not be saved after refreshing the page.
                  </p>
                </div>
                
                <div className="text-center py-12">
                  <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Orders Yet</h3>
                  <p className="text-gray-600 mb-6">
                    You haven't placed any orders yet. Start shopping to place your first order!
                  </p>
                  <Link
                    to="/"
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors inline-block"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            )}
            
            {activeTab === 'addresses' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">My Addresses</h2>
                
                {user?.address ? (
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Default Address</h3>
                    <p className="text-gray-600">
                      {user.address.street}<br />
                      {user.address.city}, {user.address.county}<br />
                      {user.address.postalCode}
                    </p>
                    <div className="mt-4">
                      <button className="text-amber-600 hover:text-amber-700 font-medium">
                        Edit Address
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No Addresses Yet</h3>
                    <p className="text-gray-600 mb-6">
                      You haven't added any addresses yet. Add an address to make checkout faster.
                    </p>
                    <button className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                      Add New Address
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;