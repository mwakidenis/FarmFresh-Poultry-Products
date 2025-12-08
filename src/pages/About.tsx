import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Award, Users, Leaf, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Providing Quality Poultry Products Since 2010
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                FarmFresh Poultry is dedicated to delivering the highest quality poultry products
                to Kenyan families and businesses. With over a decade of experience, we combine
                traditional farming wisdom with modern practices to ensure the best results.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/slide5.jpeg"
                alt="Our Farm"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from raising our birds to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring you get the best every time.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to support your poultry farming journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We employ eco-friendly practices to ensure a better future for generations to come.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency in all our dealings with customers and partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2010, FarmFresh Poultry started as a small family farm with just 100 chickens.
              Today, we've grown to become one of Kenya's leading suppliers of quality poultry products,
              serving thousands of customers across the country.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our success is built on a foundation of hard work, dedication to quality, and a deep
              understanding of poultry farming. We combine traditional farming wisdom with modern
              practices to ensure the best results.
            </p>
            <p className="text-lg text-gray-600">
              We're proud to be part of Kenya's agricultural sector and remain committed to supporting
              local communities through sustainable farming practices and job creation.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Farm</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg"
                  alt="Farm Location"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">123 Poultry Farm Road, Nakuru, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+254 712 345 678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@farmfreshpoultry.co.ke</p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;