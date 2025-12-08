import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    
    // Submit form using formsubmit.co
    form.action = "https://formsubmit.co/ngondimarklewis@gmail.com";
    form.method = "POST";
    
    // Add formsubmit configuration
    const formConfig = document.createElement('input');
    formConfig.type = 'hidden';
    formConfig.name = '_next';
    formConfig.value = window.location.href;
    form.appendChild(formConfig);
    
    form.submit();
    
    toast.success('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Have questions about our products or services? We're here to help!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600">123 Poultry Farm Road</p>
                  <p className="text-gray-600">Nakuru, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+254 712 345 678</p>
                  <p className="text-gray-600">+254 734 567 890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">info@farmfreshpoultry.co.ke</p>
                  <p className="text-gray-600">support@farmfreshpoultry.co.ke</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg"
                alt="Our Farm"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Farm</h2>
            <p className="text-gray-600">
              Come see our facilities and meet our team. We're always happy to show visitors around
              our farm and discuss our poultry farming practices.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg"
              alt="Farm Location"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;