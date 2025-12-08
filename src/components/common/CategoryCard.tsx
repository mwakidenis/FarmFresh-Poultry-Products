import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description, image }) => {
  return (
    <Link 
      to={`/category/${id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative pb-[56.25%] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-white/80 mb-2">{description}</p>
          
          <div className="flex items-center font-medium text-amber-400 opacity-0 transform -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Browse Products</span>
            <ArrowRight className="ml-1 w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;