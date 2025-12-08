import React, { useState } from 'react';
import { Calendar, Clock, Users, Send, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { APP_CONFIG, ERROR_MESSAGES, SUCCESS_MESSAGES } from '../utils/constants';

const BookTour: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00',
    groupSize: '1',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (formData.name.trim().length < APP_CONFIG.VALIDATION.NAME_MIN_LENGTH) {
      newErrors.name = ERROR_MESSAGES.NAME_TOO_SHORT;
    } else if (formData.name.trim().length > APP_CONFIG.VALIDATION.NAME_MAX_LENGTH) {
      newErrors.name = ERROR_MESSAGES.NAME_TOO_LONG;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!APP_CONFIG.VALIDATION.EMAIL.test(formData.email)) {
      newErrors.email = ERROR_MESSAGES.INVALID_EMAIL;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = ERROR_MESSAGES.REQUIRED_FIELD;
    } else if (!APP_CONFIG.VALIDATION.KENYAN_PHONE.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = ERROR_MESSAGES.INVALID_PHONE;
    }
    
    if (!formData.date) {
      newErrors.date = ERROR_MESSAGES.REQUIRED_FIELD;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = ERROR_MESSAGES.FUTURE_DATE_REQUIRED;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a more secure form submission
      const formDataToSubmit = new FormData();
      
      // Sanitize and add form data
      formDataToSubmit.append('name', formData.name.trim());
      formDataToSubmit.append('email', formData.email.trim().toLowerCase());
      formDataToSubmit.append('phone', formData.phone.trim());
      formDataToSubmit.append('date', formData.date);
      formDataToSubmit.append('time', formData.time);
      formDataToSubmit.append('groupSize', formData.groupSize);
      formDataToSubmit.append('message', formData.message.trim());
      formDataToSubmit.append('_subject', 'New Farm Tour Booking Request');
      formDataToSubmit.append('_template', 'table');
      
      // Submit to formsubmit.co
      const response = await fetch(`https://formsubmit.co/${APP_CONFIG.FORMS.CONTACT_EMAIL}`, {
        method: 'POST',
        body: formDataToSubmit
      });
      
      if (response.ok) {
        toast.success(SUCCESS_MESSAGES.TOUR_BOOKED);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '10:00',
          groupSize: '1',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(ERROR_MESSAGES.FORM_SUBMISSION_FAILED);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Book a Farm Tour</h1>
            <p className="text-lg text-gray-600">
              Experience our modern poultry farming practices firsthand. Book a tour to learn about our operations
              and get expert insights into poultry farming.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tour Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Information</h2>
            
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Guided tour of our modern poultry facilities
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Learn about different breeds and their care
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Understanding of feeding and health management
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-amber-600" />
                  </span>
                  Q&A session with our poultry experts
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Available Days</h3>
                  <p className="text-gray-600">Monday to Saturday</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Tour Times</h3>
                  <p className="text-gray-600">10:00 AM, 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="w-6 h-6 text-amber-600 mt-1" />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">Group Size</h3>
                  <p className="text-gray-600">Maximum 10 people per group</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Tour</h2>
              
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
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
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
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g., 0712345678 or +254712345678"
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Visitors *
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'person' : 'people'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 font-medium rounded-md transition-colors flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-amber-600 hover:bg-amber-700 text-white'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Book Tour'} 
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;