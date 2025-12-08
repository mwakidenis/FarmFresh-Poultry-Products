import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-amber-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Fresh & Healthy <span className="text-amber-600">Poultry</span> Products
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Experience the finest quality poultry products delivered right to your doorstep. From farm-fresh eggs to healthy chicks, we provide everything you need for your poultry farming success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/category/chicks"
                className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md transition-colors hover:bg-amber-700 inline-flex items-center"
              >
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/book-tour"
                className="px-6 py-3 bg-white text-amber-600 font-medium rounded-md border border-amber-600 transition-colors hover:bg-amber-50"
              >
                Book Farm Tour
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img
              src="/slide1.jpg"
              alt="Our Poultry Farm"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Curved design at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 40"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,40L1320,40C1200,40,960,40,720,40C480,40,240,40,120,40L0,40Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;