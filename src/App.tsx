import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import ChatWidget from './components/common/ChatWidget';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { PageSkeleton } from './components/common/Skeleton';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const CategoryProducts = lazy(() => import('./pages/CategoryProducts'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderConfirmation = lazy(() => import('./pages/OrderConfirmation'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Account = lazy(() => import('./pages/Account'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Delivery = lazy(() => import('./pages/Delivery'));
const BookTour = lazy(() => import('./pages/BookTour'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Services = lazy(() => import('./pages/Services'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const LiveStockTracker = lazy(() => import('./pages/LiveStockTracker'));

// Loading fallback component
const PageLoader = () => (
  <PageSkeleton />
);

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
                <div className="min-h-screen flex flex-col bg-gray-50">
                  <Navbar />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:postId" element={<BlogPost />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product/:productId" element={<ProductDetails />} />
                        <Route path="/category/:categoryId" element={<CategoryProducts />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/order-confirmation" element={<OrderConfirmation />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/delivery" element={<Delivery />} />
                        <Route path="/book-tour" element={<BookTour />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/live-tracker" element={<LiveStockTracker />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </div>
                <Toaster 
                  position="top-right"
                  toastOptions={{
                    style: {
                      background: '#363636',
                      color: '#fff',
                    },
                    duration: 3000,
                  }}
                />
                {/* AI Chat Widget */}
                <ChatWidget />
              </Router>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;