import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, X } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { getProductsByCategory } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';

const CategoryProducts: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortOption, setSortOption] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [filteredProducts, setFilteredProducts] = useState(
    categoryId ? getProductsByCategory(categoryId as Product['category']) : []
  );
  
  const category = categories.find((c) => c.id === categoryId);
  const products = categoryId ? getProductsByCategory(categoryId as Product['category']) : [];
  
  // Apply sorting and filtering
  useEffect(() => {
    let result = [...products];
    
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
  }, [categoryId, products, sortOption, priceRange]);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the category you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium capitalize">{category.name}</span>
      </div>
      
      {/* Category Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">
            {category.name}
          </h1>
          <p className="text-gray-600">{category.description}</p>
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
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-medium text-gray-800 mb-4">Filters</h3>
            
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
                className="w-full"
              />
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/category/${cat.id}`}
                      className={`block text-sm ${
                        cat.id === categoryId
                          ? 'text-amber-600 font-medium'
                          : 'text-gray-600 hover:text-amber-600'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
                    className="w-full"
                  />
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          to={`/category/${cat.id}`}
                          onClick={() => setFilterOpen(false)}
                          className={`block text-sm ${
                            cat.id === categoryId
                              ? 'text-amber-600 font-medium'
                              : 'text-gray-600 hover:text-amber-600'
                          }`}
                        >
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200">
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
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or browse other categories.
              </p>
              <button
                onClick={() => setPriceRange([0, 20000])}
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

export default CategoryProducts;