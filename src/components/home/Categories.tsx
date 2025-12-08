import React from 'react';
import CategoryCard from '../common/CategoryCard';
import { categories } from '../../data/categories';

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;