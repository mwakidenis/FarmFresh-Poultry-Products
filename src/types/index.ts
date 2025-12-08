export interface Product {
  id: string;
  name: string;
  category: 'chicks' | 'eggs' | 'chicken' | 'products';
  price: number;
  discountPrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  stock: number;
  featured?: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: {
    street: string;
    city: string;
    county: string;
    postalCode: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'mpesa' | 'cash';
  paymentStatus: 'pending' | 'completed' | 'failed';
  shippingAddress: {
    street: string;
    city: string;
    county: string;
    postalCode: string;
  };
  createdAt: string;
  updatedAt: string;
  mpesaReference?: string;
}