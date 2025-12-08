import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Shield, Phone, Star } from 'lucide-react';
import SEO from '../components/common/SEO';

const Services: React.FC = () => {
  const services = [
    {
      id: 'incubation',
      title: 'Incubation Service',
      description: 'Professional egg incubation services with state-of-the-art equipment and expert monitoring.',
      image: '/incubation.jpg',
      features: [
        'Temperature & humidity controlled environment',
        'Regular turning and monitoring',
        '85%+ hatch rate guarantee',
        'Disease prevention protocols',
        'Expert supervision 24/7'
      ],
      pricing: 'From KSH 50 per egg',
      duration: '21 days for chickens',
      icon: <Clock className="h-8 w-8" />
    },
    {
      id: 'consulting',
      title: 'Poultry Consulting Services',
      description: 'Expert advice and guidance for successful poultry farming operations.',
      image: '/poultry.jpg',
      features: [
        'Farm setup and planning consultation',
        'Breed selection guidance',
        'Feed management strategies',
        'Disease prevention and management',
        'Business planning and profitability analysis'
      ],
      pricing: 'From KSH 5,000 per consultation',
      duration: '2-4 hours per session',
      icon: <Users className="h-8 w-8" />
    },
    {
      id: 'vaccination',
      title: 'Vaccination Services',
      description: 'Comprehensive vaccination programs to keep your poultry healthy and productive.',
      image: '/vacc.jpeg',
      features: [
        'Complete vaccination schedules',
        'On-farm vaccination services',
        'Quality vaccines from trusted suppliers',
        'Health monitoring and follow-up',
        'Emergency treatment services'
      ],
      pricing: 'From KSH 100 per bird',
      duration: 'Ongoing program',
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const testimonials = [
    {
      name: 'Mary Wanjiku',
      location: 'Kiambu County',
      service: 'Incubation Service',
      rating: 5,
      comment: 'Excellent hatch rate! Got 42 chicks from 50 eggs. Very professional service.',
      image: '/1.jpg'
    },
    {
      name: 'John Mwangi',
      location: 'Nakuru County',
      service: 'Consulting Service',
      rating: 5,
      comment: 'The consultation helped me increase my egg production by 40%. Worth every shilling!',
      image: '/3.jpg'
    },
    {
      name: 'Grace Akinyi',
      location: 'Kisumu County',
      service: 'Vaccination Program',
      rating: 5,
      comment: 'No disease outbreaks since starting their vaccination program. Highly recommended!',
      image: '/4.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Professional Poultry Services - Expert Care for Your Farm"
        description="Professional poultry services including incubation, consulting, and vaccination. Expert care for successful poultry farming in Kenya."
        keywords="poultry services Kenya, egg incubation, poultry consulting, chicken vaccination, farm consultation, poultry health"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Poultry Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert services to ensure your poultry farming success from day one to profitability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+254700000000"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive poultry services designed to maximize your farming success
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } lg:flex`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <div className="text-amber-600 mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Pricing</h4>
                      <p className="text-amber-600 font-bold">{service.pricing}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
                      <p className="text-gray-600">{service.duration}</p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Years of experience and proven results in poultry farming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced poultry specialists with decades of combined experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful projects with measurable improvements in productivity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support for emergencies and ongoing consultation needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-3">"{testimonial.comment}"</p>
                <p className="text-amber-600 font-semibold text-sm">{testimonial.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your poultry farming needs and how our services can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <div className="flex items-center justify-center space-x-4 text-white">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">+254 700 000 000</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;