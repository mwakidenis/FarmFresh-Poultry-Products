import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';
import SEO from '../components/common/SEO';

const Products: React.FC = () => {
  const [sortOption, setSortOption] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Apply sorting and filtering
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      (product) => 
        (product.discountPrice || product.price) >= priceRange[0] && 
        (product.discountPrice || product.price) <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-desc':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'featured':
      default:
        // Featured or newest products first
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [sortOption, priceRange, selectedCategory]);
  
  const resetFilters = () => {
    setPriceRange([0, 20000]);
    setSelectedCategory('all');
    setSortOption('featured');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="All Products - Premium Poultry Products"
        description="Browse our complete range of premium poultry products including chicks, eggs, chicken, feed, and equipment. Quality guaranteed with fast delivery across Kenya."
        keywords="poultry products Kenya, farm fresh eggs, healthy chicks, chicken delivery, poultry equipment, chicken feed, day-old chicks"
      />
      
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">Products</span>
      </div>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Discover our complete range of premium poultry products - from healthy chicks to farm-fresh eggs and quality equipment.
          </p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden mr-4 flex items-center py-2 px-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </button>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="text-sm text-gray-700 mr-2 hidden md:inline">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 mr-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-24">
            <h3 className="font-medium text-gray-800 mb-4">Filters</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">
                  KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20000"
                step="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-amber-500"
              />
            </div>
            
            <button
              onClick={resetFilters}
              className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Mobile Filters */}
        {filterOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden">
            <div className="relative w-full max-w-xs bg-white h-full ml-auto shadow-xl overflow-y-auto">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Filters</h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 text-sm">
                      KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 space-y-2">
                <button
                  onClick={resetFilters}
                  className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset Filters
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Products */}
        <div className="flex-1">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {selectedCategory !== 'all' && (
                <span className="ml-2">
                  in <span className="font-medium capitalize">{categories.find(c => c.id === selectedCategory)?.name}</span>
                </span>
              )}
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or browse all products.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;