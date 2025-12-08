import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogPostById, blogPosts } from '../data/blog';
import SEO from '../components/common/SEO';

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  
  if (!postId) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = getBlogPostById(postId);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, the article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title={`${post.title} - Poultry Farming Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        type="article"
      />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-amber-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">{post.category}</span>
        </div>
      </div>
      
      {/* Article Header */}
      <article className="bg-white">
        <div className="relative h-96 bg-gray-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <span className="px-3 py-1 bg-amber-600 text-white text-sm rounded-full mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center text-white/90 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-6">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-6">{formatDate(post.publishedAt)}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div 
                    className="article-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4 mt-12 lg:mt-0">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Article Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">By {post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">{post.readingTime} minute read</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Share this article</h4>
                    <div className="flex space-x-2">
                      <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Facebook
                      </button>
                      <button className="px-3 py-2 bg-blue-400 text-white rounded text-sm hover:bg-blue-500 transition-colors">
                        Twitter
                      </button>
                      <button className="px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-32">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.id}`}
                        className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center"
                      >
                        Read More <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Navigation */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition-colors"
            >
              Shop Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;