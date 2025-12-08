import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Day-Old Broiler Chicks',
    category: 'chicks',
    price: 120,
    discountPrice: 100,
    description: 'Healthy day-old broiler chicks from our carefully selected breeds. These chicks are vaccinated against common diseases and ready to be raised in your farm or backyard. Perfect for meat production with fast growth rates.',
    shortDescription: 'Vaccinated day-old broiler chicks for meat production.',
    images: [
      '/chicks.jpeg',
      '/broilers.jpg'
    ],
    stock: 50,
    featured: true,
    tags: ['broiler', 'day-old', 'vaccinated']
  },
  {
    id: '2',
    name: 'Day-Old Layer Chicks',
    category: 'chicks',
    price: 130,
    discountPrice: 110,
    description: 'Premium day-old layer chicks from high-performing egg-laying breeds. Fully vaccinated and ready for raising. These chicks are perfect for starting your egg production business.',
    shortDescription: 'Vaccinated day-old layer chicks for egg production.',
    images: [
      '/exlayers.jpeg',
      '/layers.jpg'
    ],
    stock: 40,
    featured: true,
    tags: ['layer', 'day-old', 'vaccinated']
  },
  {
    id: '3',
    name: 'Fresh Farm Eggs (Tray of 30)',
    category: 'eggs',
    price: 450,
    discountPrice: 420,
    description: 'Free-range, farm-fresh eggs from our happy, healthy hens. Each tray contains 30 eggs of mixed sizes, predominantly large. Our hens are fed a natural diet supplemented with quality grains to ensure the best taste and nutrition in every egg.',
    shortDescription: 'Farm-fresh eggs from free-range hens, tray of 30.',
    images: [
      '/eggs.jpg',
      '/egg.jpg'
    ],
    stock: 100,
    featured: true,
    tags: ['free-range', 'organic']
  },
  {
    id: '4',
    name: 'Kienyeji Eggs (Tray of 30)',
    category: 'eggs',
    price: 600,
    description: 'Premium kienyeji (indigenous) eggs from our traditional breed hens. These eggs have that authentic taste and rich, orange yolks that you cannot find in commercial eggs. Perfect for special dishes where egg flavor is important.',
    shortDescription: 'Traditional kienyeji eggs with rich flavor, tray of 30.',
    images: [
      '/layersegg.jpg',
      '/eggs.jpg'
    ],
    stock: 50,
    tags: ['kienyeji', 'indigenous', 'premium']
  },
  {
    id: '5',
    name: 'Fresh Whole Broiler (1.5kg)',
    category: 'chicken',
    price: 650,
    description: 'Fresh, whole broiler chicken raised on our farm. Each chicken weighs approximately 1.5kg and is cleaned and ready for cooking. Our broilers are raised in a clean environment and fed a balanced diet for the best quality meat.',
    shortDescription: 'Fresh whole broiler chicken, approx 1.5kg, cleaned and ready to cook.',
    images: [
      '/broilers.jpg',
      '/chickens.jpg'
    ],
    stock: 25,
    featured: true,
    tags: ['broiler', 'fresh', 'whole']
  },
  {
    id: '6',
    name: 'Kienyeji Chicken (1.2kg)',
    category: 'chicken',
    price: 950,
    description: 'Traditional kienyeji chicken raised free-range on our farm. These chickens have a superior taste and firmer texture compared to commercial broilers. Perfect for traditional dishes where authentic chicken flavor is desired.',
    shortDescription: 'Traditional free-range kienyeji chicken with authentic flavor.',
    images: [
      '/hen.jpg',
      '/cockerel2.jpg'
    ],
    stock: 15,
    tags: ['kienyeji', 'free-range', 'traditional']
  },
  {
    id: '7',
    name: 'Premium Chicken Feed (10kg)',
    category: 'products',
    price: 1200,
    description: 'High-quality chicken feed formulated for optimal nutrition and health. Contains the perfect balance of proteins, vitamins, and minerals for healthy growth and egg production.',
    shortDescription: 'Premium chicken feed for optimal growth and health.',
    images: [
      '/shapes.jpeg',
      '/manure.jpg'
    ],
    stock: 40,
    tags: ['feed', 'nutrition', 'health']
  },
  {
    id: '8',
    name: 'Modern Chicken Coop',
    category: 'products',
    price: 12000,
    discountPrice: 10500,
    description: 'Modern, well-ventilated chicken coop suitable for 8-12 chickens. Features nesting boxes, roosting perches, and a secure run area. Made from durable materials for long-lasting use.',
    shortDescription: 'Modern chicken coop with nesting boxes and secure run.',
    images: [
      '/poultry.jpg',
      '/chickens.jpg'
    ],
    stock: 5,
    featured: true,
    tags: ['housing', 'equipment']
  },
  {
    id: '9',
    name: 'Automatic Chicken Feeder',
    category: 'products',
    price: 2500,
    discountPrice: 2200,
    description: 'Automatic chicken feeder with 5kg capacity. Reduces waste and keeps feed clean and dry. Perfect for busy farmers who want to ensure their chickens are fed regularly.',
    shortDescription: 'Automatic 5kg capacity chicken feeder.',
    images: [
      '/feeder.jpeg',
      '/feeder1.jpeg'
    ],
    stock: 15,
    featured: true,
    tags: ['equipment', 'automatic']
  },
  {
    id: '10',
    name: 'Chicken Waterer (10L)',
    category: 'products',
    price: 1500,
    description: 'Automatic chicken waterer with 10-liter capacity. Features an innovative design that keeps water clean and prevents spillage. Ensures your chickens always have access to fresh water.',
    shortDescription: 'Automatic 10L waterer for clean, fresh water supply.',
    images: [
      '/drinker1.jpeg',
      '/drinker2.jpeg'
    ],
    stock: 20,
    tags: ['equipment', 'waterer']
  },
  {
    id: '11',
    name: 'Premium Chicken Cuts Pack',
    category: 'chicken',
    price: 850,
    discountPrice: 800,
    description: 'Assorted pack of premium chicken cuts including breasts, thighs, wings, and drumsticks. All pieces are cleaned and individually packed for convenience. Perfect for families who enjoy variety.',
    shortDescription: 'Assorted pack of fresh chicken cuts.',
    images: [
      '/broilers.jpg',
      '/chickens.jpg'
    ],
    stock: 30,
    featured: true,
    tags: ['cuts', 'fresh', 'assorted']
  },
  {
    id: '12',
    name: 'Poultry Health Kit',
    category: 'products',
    price: 2800,
    discountPrice: 2500,
    description: 'Complete poultry health kit containing essential vitamins, minerals, and basic medications. Includes a guide for common poultry health issues and their treatment.',
    shortDescription: 'Essential health kit for poultry care.',
    images: [
      '/vacc.jpeg',
      '/VSS.png'
    ],
    stock: 25,
    featured: true,
    tags: ['health', 'medicine', 'care']
  },
  {
    id: '13',
    name: 'Professional Feeder System',
    category: 'products',
    price: 3200,
    discountPrice: 2800,
    description: 'Professional-grade feeding system designed for commercial and semi-commercial operations. Features multiple feeding points and waste reduction technology.',
    shortDescription: 'Professional feeding system for efficient operations.',
    images: [
      '/feeder2.jpeg',
      '/feeder1.jpeg'
    ],
    stock: 10,
    tags: ['professional', 'commercial', 'equipment']
  },
  {
    id: '14',
    name: 'Organic Chicken Manure (25kg)',
    category: 'products',
    price: 800,
    description: 'Premium organic chicken manure, perfect for gardening and farming. Rich in nutrients and properly composted to eliminate harmful bacteria while retaining beneficial nutrients for plants.',
    shortDescription: 'Premium organic chicken manure for gardening.',
    images: [
      '/manure.jpg',
      '/shapes.jpeg'
    ],
    stock: 60,
    tags: ['organic', 'fertilizer', 'gardening']
  },
  {
    id: '15',
    name: 'Premium Honey (500ml)',
    category: 'products',
    price: 1200,
    discountPrice: 1000,
    description: 'Pure, natural honey harvested from our beehives. This golden honey is raw and unprocessed, retaining all its natural enzymes, antioxidants, and health benefits.',
    shortDescription: 'Pure natural honey, raw and unprocessed.',
    images: [
      '/honey.jpg',
      '/honey (1).jpg'
    ],
    stock: 30,
    featured: true,
    tags: ['honey', 'natural', 'organic']
  },
  {
    id: '16',
    name: 'Mobile Payment System',
    category: 'products',
    price: 0,
    description: 'Convenient mobile payment options including M-Pesa and other digital payment methods for easy and secure transactions.',
    shortDescription: 'Secure mobile payment solutions.',
    images: [
      '/mpesa.png',
      '/sat.png'
    ],
    stock: 999,
    tags: ['payment', 'mpesa', 'digital']
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};