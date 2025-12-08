import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, X, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import SEO from '../components/common/SEO';
import { products } from '../data/products';
import { Product } from '../types';

/**
 * Search Results Page Component
 * 
 * Features:
 * - Displays search results for a given query
 * - Advanced filtering by category, price range
 * - Sorting options
 * - No results state
 * - SEO optimized meta information
 */
const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<Product[]>([]);
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'chicks', 'eggs', 'chicken', 'products'];

  // Perform search when query changes
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setResults(searchResults);
  }, [query]);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...results];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => {
      const price = product.discountPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort results
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'relevance':
      default:
        // Keep original order (relevance-based from search)
        break;
    }

    setFilteredResults(filtered);
  }, [results, selectedCategory, priceRange, sortOption]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 20000]);
    setSortOption('relevance');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] !== 0 || priceRange[1] !== 20000;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={query ? `Search results for "${query}"` : 'Search Products'}
        description={query ? `Find ${query} products at FarmFresh Poultry. Browse our selection of premium poultry products with fast delivery across Kenya.` : 'Search for premium poultry products at FarmFresh Poultry. Find chicks, eggs, chicken, and farm supplies with advanced filtering and sorting.'}
        keywords={query ? `${query}, poultry products, farm fresh, Kenya, buy ${query}` : 'search poultry products, farm fresh, eggs, chicks, chicken, Kenya'}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {query ? `Search results for "${query}"` : 'Search Products'}
          </h1>
          <p className="text-gray-600">
            {filteredResults.length === 0 && results.length === 0 && query ? (
              'No products found.'
            ) : (
              `${filteredResults.length} product${filteredResults.length !== 1 ? 's' : ''} found`
            )}
          </p>
        </div>

        {results.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4 lg:hidden">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="p-2"
                  >
                    <Filter className="h-5 w-5" />
                  </button>
                </div>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="text-amber-600 focus:ring-amber-500"
                          />
                          <span className="ml-2 capitalize">
                            {category === 'all' ? 'All Categories' : category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          placeholder="Min"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                        <span>-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-amber-600"
                      />
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Sort Controls */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-600">
                  Showing {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
                </span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Products Grid */}
              {filteredResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {query ? (
                      <>
                        Try adjusting your search criteria or{' '}
                        <button
                          onClick={clearFilters}
                          className="text-amber-600 hover:text-amber-700 font-medium"
                        >
                          clear all filters
                        </button>
                      </>
                    ) : (
                      'Enter a search term to find products'
                    )}
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Browse All Products
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Results State */}
        {results.length === 0 && query && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No results found for "{query}"
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              We couldn't find any products matching your search. Try different keywords or browse our categories.
            </p>
            <div className="space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Browse All Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;