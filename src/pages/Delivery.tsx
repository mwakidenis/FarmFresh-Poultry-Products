import React from 'react';
import { Truck, Clock, MapPin, Phone } from 'lucide-react';

const Delivery: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Delivery Information</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-amber-50 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Truck className="w-6 h-6 text-amber-600 mt-1" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Delivery Areas</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same-day delivery within Nairobi</li>
                  <li>• Next-day delivery to major towns</li>
                  <li>• 2-3 days delivery to other locations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg">
            <div className="flex items-start mb-4">
              <Clock className="w-6 h-6 text-amber-600 mt-1" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Delivery Times</h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monday to Saturday: 8:00 AM - 6:00 PM</li>
                  <li>• Sunday: 9:00 AM - 4:00 PM</li>
                  <li>• Same-day cutoff: 2:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Rates</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Nairobi CBD</td>
                  <td className="px-6 py-4 whitespace-nowrap">Same Day</td>
                  <td className="px-6 py-4 whitespace-nowrap">KSh 200</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Greater Nairobi</td>
                  <td className="px-6 py-4 whitespace-nowrap">Same Day</td>
                  <td className="px-6 py-4 whitespace-nowrap">KSh 300-500</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Major Towns</td>
                  <td className="px-6 py-4 whitespace-nowrap">Next Day</td>
                  <td className="px-6 py-4 whitespace-nowrap">KSh 500-1000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Other Locations</td>
                  <td className="px-6 py-4 whitespace-nowrap">2-3 Days</td>
                  <td className="px-6 py-4 whitespace-nowrap">KSh 1000-2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Our Delivery Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-amber-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Phone Support</h3>
                <p className="text-gray-600">+254 712 345 678</p>
                <p className="text-gray-600">+254 734 567 890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-amber-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Main Office</h3>
                <p className="text-gray-600">123 Poultry Farm Road</p>
                <p className="text-gray-600">Nakuru, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-amber-600 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800 mb-1">Support Hours</h3>
                <p className="text-gray-600">Mon-Sat: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sun: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;