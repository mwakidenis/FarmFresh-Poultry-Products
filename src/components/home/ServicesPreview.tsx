import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Shield, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'incubation',
      title: 'Incubation Service',
      description: 'Professional egg incubation with 85%+ hatch rate guarantee',
      image: '/incubation.jpg',
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      features: ['Temperature controlled', '24/7 monitoring', 'Expert supervision']
    },
    {
      id: 'consulting', 
      title: 'Poultry Consulting',
      description: 'Expert advice for successful poultry farming operations',
      image: '/poultry.jpg',
      icon: <Users className="h-8 w-8 text-amber-600" />,
      features: ['Farm planning', 'Breed selection', 'Business guidance']
    },
    {
      id: 'vaccination',
      title: 'Vaccination Services',
      description: 'Comprehensive vaccination programs for healthy poultry',
      image: '/vacc.jpeg',
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      features: ['Complete schedules', 'On-farm service', 'Health monitoring']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Poultry Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert services to ensure your poultry farming success from day one to profitability
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/services"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;