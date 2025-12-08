import React from 'react';
import { Truck, Shield, Clock, ThumbsUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-amber-500" />,
      title: 'Fast Delivery',
      description: 'Same day delivery within Nairobi and next day nationwide'
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-500" />,
      title: 'Quality Guarantee',
      description: 'Fresh, healthy products from our farm to your table'
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      title: 'Convenient Ordering',
      description: 'Order anytime and schedule delivery at your convenience'
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-amber-500" />,
      title: 'Easy Returns',
      description: '100% satisfaction guarantee or your money back'
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-amber-500 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;