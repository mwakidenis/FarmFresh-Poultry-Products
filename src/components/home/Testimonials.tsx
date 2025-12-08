import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Kamau',
    role: 'Poultry Farmer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content: 'I\'ve been buying day-old chicks from FarmFresh Poultry for over two years now. The quality is consistently excellent, and their after-sale support is unmatched. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Wanjiku',
    role: 'Restaurant Owner',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    content: 'As a restaurant owner, I need consistent quality and reliable delivery. FarmFresh Poultry has never let me down with their chicken supplies. My customers can taste the difference!',
    rating: 5
  },
  {
    id: 3,
    name: 'David Omondi',
    role: 'Home Customer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    content: 'The eggs from FarmFresh are truly amazing. Rich yolks, fresh taste, and they\'re delivered right to my doorstep. The M-Pesa payment makes everything so convenient. Will keep ordering!',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
          
          {/* Testimonial */}
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;