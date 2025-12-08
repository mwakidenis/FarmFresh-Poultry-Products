import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Features from '../components/home/Features';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import SEO from '../components/common/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <SEO 
        title="Premium Poultry Products - Farm Fresh Quality"
        description="Experience the finest quality poultry products delivered right to your doorstep in Kenya. From farm-fresh eggs to healthy chicks, we provide everything you need for your poultry farming success."
        keywords="poultry products Kenya, farm fresh eggs, healthy chicks, chicken delivery, organic poultry, day-old chicks, broiler chicks, layer chicks, kienyeji chicken"
        type="website"
      />
      
      <Hero />
      
      <FeaturedProducts />
      
      <Categories />
      
      <ServicesPreview />
      
      <div className="bg-amber-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quality Poultry Products Delivered to Your Doorstep
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            From farm-fresh eggs to healthy chicks and premium chicken meat, 
            we provide the best quality poultry products in Kenya.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-md bg-white text-amber-600 font-medium hover:bg-gray-100 transition-colors"
          >
            Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <Features />
      
      <Testimonials />
    </div>
  );
};

export default Home;