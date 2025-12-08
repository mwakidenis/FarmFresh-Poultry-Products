import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Product } from '../../types';
import OptimizedImage from './OptimizedImage';

interface SearchBarProps {
  className?: string;
}

/**
 * SearchBar Component - Provides real-time product search functionality
 * 
 * Features:
 * - Real-time search as user types
 * - Dropdown with search suggestions
 * - Keyboard navigation (arrow keys, escape, enter)
 * - Click outside to close
 * - Search by product name and description
 * - Highlights matching text
 */
const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Product[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Perform search when query changes
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 6); // Limit to 6 results

    setResults(searchResults);
    setIsOpen(true);
    setSelectedIndex(-1);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleSelectProduct(results[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, results, selectedIndex]);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = () => {
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  // Highlight matching text in search results
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-amber-200 font-semibold">
          {part}
        </span>
      ) : part
    );
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search products..."
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-sm"
          aria-label="Search products"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <>
              {results.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className={`flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-amber-50' : ''
                  }`}
                  onClick={() => handleSelectProduct(product)}
                >
                  <OptimizedImage
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                    category={product.category}
                    productName={product.name}
                    loading="eager"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {highlightMatch(product.name, query)}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                      {highlightMatch(product.shortDescription, query)}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm font-semibold text-amber-600">
                        KSh {product.discountPrice || product.price}
                      </span>
                      {product.discountPrice && (
                        <span className="text-xs text-gray-400 line-through ml-2">
                          KSh {product.price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
              {results.length > 0 && (
                <div className="p-2 text-center">
                  <Link
                    to={`/search?q=${encodeURIComponent(query)}`}
                    className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                    onClick={() => handleSelectProduct(results[0])}
                  >
                    View all results for "{query}"
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="p-4 text-center text-gray-500 text-sm">
              No products found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;