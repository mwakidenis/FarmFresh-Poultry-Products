import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-amber-500">FarmFresh</span>
              <span className="text-xl font-bold">Poultry</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium poultry products delivered fresh to your doorstep. From farm to table with care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/category/chicks" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Chicks
                </Link>
              </li>
              <li>
                <Link to="/category/eggs" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Eggs
                </Link>
              </li>
              <li>
                <Link to="/category/chicken" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Chicken
                </Link>
              </li>
              <li>
                <Link to="/category/products" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Poultry Products
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-amber-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 Poultry Farm Road, Nakuru, Kenya</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-gray-300">+254 712 345 678</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" />
                <p className="text-gray-300">info@farmfreshpoultry.co.ke</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} FarmFresh Poultry. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Payment Methods: M-Pesa, Cash on Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;