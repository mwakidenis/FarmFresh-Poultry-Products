import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

// Mock user data
const mockUser: User = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+254712345678',
  address: {
    street: '123 Main St',
    city: 'Nairobi',
    county: 'Nairobi',
    postalCode: '00100'
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    setLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        // For demo purposes, any email and "password" will work
        if (password) {
          setUser(mockUser);
          toast.success('Logged in successfully');
          setLoading(false);
          resolve(true);
        } else {
          toast.error('Invalid credentials');
          setLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const register = async (
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<boolean> => {
    // Simulate API call
    setLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        if (name && email && phone && password) {
          const newUser = {
            id: 'user-' + Date.now(),
            name,
            email,
            phone
          };
          setUser(newUser as User);
          toast.success('Registered successfully');
          setLoading(false);
          resolve(true);
        } else {
          toast.error('Please fill all fields');
          setLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};