import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, ChevronDown, Heart, Activity } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { categories } from '../../data/categories';
import SearchBar from '../common/SearchBar';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-amber-600">FarmFresh</span>
            <span className="text-xl font-bold text-gray-700">Poultry</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              Home
            </NavLink>
            
            {/* Products Link */}
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              All Products
            </NavLink>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-amber-600 transition-colors"
                onClick={toggleDropdown}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10">
                  {categories.map((category) => (
                    <Link 
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              Blog
            </NavLink>
            
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              Services
            </NavLink>
            
            <NavLink 
              to="/book-tour" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              Book Tour
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-amber-600 font-medium" : "text-gray-700 hover:text-amber-600 transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>

          {/* User and Cart */}
          <div className="flex items-center space-x-4">
            {/* Live Tracker Link */}
            <Link 
              to="/live-tracker" 
              className="hidden md:flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
              title="Live Stock Tracker"
            >
              <Activity className="w-5 h-5" />
              <span className="text-sm font-medium">Live</span>
            </Link>

            {/* Wishlist Link */}
            <Link to="/wishlist" className="relative p-2" title="My Wishlist">
              <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Link */}
            <Link to="/cart" className="relative p-2" title="Shopping Cart">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  className="flex items-center text-gray-700 hover:text-amber-600"
                  onClick={toggleDropdown}
                >
                  <User className="w-6 h-6" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Signed in as <span className="font-medium">{user?.name}</span>
                    </div>
                    <Link
                      to="/account"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setDropdownOpen(false)}
                    >
                      My Account
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                      onClick={() => setDropdownOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                to="/login" 
                className="hidden md:block px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
              >
                Sign In
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            {/* Mobile Search Bar */}
            <div className="mb-4">
              <SearchBar />
            </div>
            
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              All Products
            </NavLink>
            
            <div className="py-2">
              <div className="font-medium text-gray-700 mb-2">Categories</div>
              <div className="pl-4 space-y-2">
                {categories.map((category) => (
                  <Link 
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="block py-1 text-gray-600 hover:text-amber-600"
                    onClick={closeMobileMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
            
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              Blog
            </NavLink>
            
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
            
            <NavLink 
              to="/book-tour" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              Book Tour
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 text-amber-600 font-medium" 
                  : "block py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
            
            <NavLink 
              to="/wishlist" 
              className={({ isActive }) => 
                isActive 
                  ? "flex items-center py-2 text-amber-600 font-medium" 
                  : "flex items-center py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              <Heart className="w-4 h-4 mr-2" />
              Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
            </NavLink>
            
            <NavLink 
              to="/live-tracker" 
              className={({ isActive }) => 
                isActive 
                  ? "flex items-center py-2 text-amber-600 font-medium" 
                  : "flex items-center py-2 text-gray-700 hover:text-amber-600"
              }
              onClick={closeMobileMenu}
            >
              <Activity className="w-4 h-4 mr-2" />
              Live Tracker
            </NavLink>
            
            {!isAuthenticated && (
              <Link 
                to="/login" 
                className="block py-2 text-gray-700 hover:text-amber-600"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;