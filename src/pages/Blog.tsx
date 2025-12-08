import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts, getFeaturedPosts, getBlogCategories } from '../data/blog';
import { BlogPost } from '../data/blog';
import SEO from '../components/common/SEO';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  const categories = getBlogCategories();
  const featuredPosts = getFeaturedPosts();
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Poultry Farming Blog - Expert Tips & Guides"
        description="Learn from poultry farming experts with our comprehensive guides on chick care, egg production, disease prevention, and profitable farming techniques."
        keywords="poultry farming blog, chicken farming tips, egg production guide, poultry health, broiler production, layer management"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Poultry Farming Insights
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Expert advice, practical tips, and proven strategies to help you succeed in poultry farming
          </p>
        </div>
      </div>
      
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-600 text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{formatDate(post.publishedAt)}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {post.category}
                      </span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
                      >
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* All Posts Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">All Articles</h2>
            <div className="flex items-center">
              <label htmlFor="category" className="text-sm text-gray-700 mr-2">
                Filter by category:
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-600 text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{formatDate(post.publishedAt)}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No Articles Found</h3>
              <p className="text-gray-600 mb-4">
                Try selecting a different category or check back later for new content.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Poultry Journey?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Browse our quality products and get everything you need to start or expand your poultry farming operation.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-md bg-white text-amber-600 font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;