import { APP_CONFIG, ERROR_MESSAGES } from './constants';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// Generic validation utilities
export const validators = {
  required: (value: string, fieldName: string = 'Field'): string | null => {
    return value.trim() ? null : `${fieldName} ${ERROR_MESSAGES.REQUIRED_FIELD.toLowerCase()}`;
  },

  email: (email: string): string | null => {
    if (!email.trim()) return null; // Let required validator handle empty
    return APP_CONFIG.VALIDATION.EMAIL.test(email) ? null : ERROR_MESSAGES.INVALID_EMAIL;
  },

  kenyanPhone: (phone: string): string | null => {
    if (!phone.trim()) return null; // Let required validator handle empty
    const cleanPhone = phone.replace(/[\s-()]/g, '');
    return APP_CONFIG.VALIDATION.KENYAN_PHONE.test(cleanPhone) ? null : ERROR_MESSAGES.INVALID_PHONE;
  },

  name: (name: string): string | null => {
    if (!name.trim()) return null; // Let required validator handle empty
    if (name.trim().length < APP_CONFIG.VALIDATION.NAME_MIN_LENGTH) {
      return ERROR_MESSAGES.NAME_TOO_SHORT;
    }
    if (name.trim().length > APP_CONFIG.VALIDATION.NAME_MAX_LENGTH) {
      return ERROR_MESSAGES.NAME_TOO_LONG;
    }
    return null;
  },

  futureDate: (dateString: string): string | null => {
    if (!dateString) return null; // Let required validator handle empty
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today ? null : ERROR_MESSAGES.FUTURE_DATE_REQUIRED;
  },

  minLength: (value: string, minLength: number): string | null => {
    return value.length >= minLength ? null : `Must be at least ${minLength} characters`;
  },

  maxLength: (value: string, maxLength: number): string | null => {
    return value.length <= maxLength ? null : `Must be no more than ${maxLength} characters`;
  },
};

// Validation schemas for different forms
export const validationSchemas = {
  bookTour: {
    name: [validators.required, validators.name],
    email: [validators.required, validators.email],
    phone: [validators.required, validators.kenyanPhone],
    date: [validators.required, validators.futureDate],
    time: [validators.required],
    groupSize: [validators.required],
  },

  contact: {
    name: [validators.required, validators.name],
    email: [validators.required, validators.email],
    subject: [validators.required],
    message: [validators.required, (value: string) => validators.minLength(value, 10)],
  },

  mpesaPayment: {
    phoneNumber: [validators.required, validators.kenyanPhone],
  },
};

// Generic form validator
export const validateForm = <T extends Record<string, string>>(
  data: T,
  schema: Record<keyof T, ((value: string, fieldName?: string) => string | null)[]>
): ValidationResult => {
  const errors: Record<string, string> = {};

  for (const [field, validatorFunctions] of Object.entries(schema)) {
    const value = data[field];
    
    for (const validator of validatorFunctions) {
      const error = validator(value, field);
      if (error) {
        errors[field] = error;
        break; // Stop at first error for this field
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Utility to sanitize form data
export const sanitizeFormData = <T extends Record<string, string>>(data: T): T => {
  const sanitized = {} as T;
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Basic sanitization - trim whitespace and remove potential script tags
      sanitized[key as keyof T] = value
        .trim()
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') as T[keyof T];
    } else {
      sanitized[key as keyof T] = value;
    }
  }
  
  return sanitized;
};

// Phone number formatting utilities
export const phoneUtils = {
  format: (phone: string): string => {
    const cleaned = phone.replace(/[\s-()]/g, '');
    if (cleaned.startsWith('+254')) {
      return cleaned;
    } else if (cleaned.startsWith('254')) {
      return '+' + cleaned;
    } else if (cleaned.startsWith('0')) {
      return '+254' + cleaned.substring(1);
    }
    return cleaned;
  },

  isValid: (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-()]/g, '');
    return APP_CONFIG.VALIDATION.KENYAN_PHONE.test(cleaned);
  },

  normalize: (phone: string): string => {
    // Always return in +254XXXXXXXXX format
    const cleaned = phone.replace(/[\s-()]/g, '');
    if (cleaned.startsWith('+254')) {
      return cleaned;
    } else if (cleaned.startsWith('254')) {
      return '+' + cleaned;
    } else if (cleaned.startsWith('0')) {
      return '+254' + cleaned.substring(1);
    }
    return phone; // Return original if can't normalize
  },
};