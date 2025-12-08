// Application Constants
export const APP_CONFIG = {
  NAME: 'FarmFresh Poultry',
  DESCRIPTION: 'Premium Poultry Products from Farm to Table',
  VERSION: '1.0.0',
  
  // Contact Information
  CONTACT: {
    EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'ngondimarklewis@gmail.com',
    PHONE: import.meta.env.VITE_CONTACT_PHONE || '+254700000000',
    ADDRESS: 'Poultry Farm, Kenya',
  },
  
  // Business Hours
  BUSINESS_HOURS: {
    WEEKDAY: '8:00 AM - 6:00 PM',
    WEEKEND: '9:00 AM - 5:00 PM',
    TOUR_TIMES: ['10:00', '14:00'],
    TOUR_DAYS: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  
  // Form Configuration
  FORMS: {
    CONTACT_EMAIL: import.meta.env.VITE_FORMSUBMIT_EMAIL || 'ngondimarklewis@gmail.com',
    MAX_MESSAGE_LENGTH: 500,
    MAX_TOUR_GROUP_SIZE: 10,
  },
  
  // Payment Configuration
  PAYMENT: {
    CURRENCY: 'KSH',
    MPESA: {
      MIN_AMOUNT: 1,
      MAX_AMOUNT: 300000,
      TIMEOUT: 120000, // 2 minutes
    },
  },
  
  // Chat Widget Configuration
  CHAT: {
    ENABLED: import.meta.env.VITE_ENABLE_CHAT_WIDGET === 'true',
    RESPONSE_DELAY: {
      MIN: 1000,
      MAX: 2500,
    },
  },
  
  // Validation Patterns
  VALIDATION: {
    KENYAN_PHONE: /^(\+254|0)[17]\d{8}$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
  },
  
  // API Configuration
  API: {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
    TIMEOUT: 10000,
  },
  
  // Feature Flags
  FEATURES: {
    ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    ERROR_REPORTING: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
  },
} as const;

// UI Constants
export const UI = {
  COLORS: {
    PRIMARY: 'amber',
    SUCCESS: 'green',
    ERROR: 'red',
    WARNING: 'yellow',
    INFO: 'blue',
  },
  
  BREAKPOINTS: {
    SM: '640px',
    MD: '768px',
    LG: '1024px',
    XL: '1280px',
  },
  
  ANIMATION: {
    DURATION: {
      FAST: '150ms',
      NORMAL: '300ms',
      SLOW: '500ms',
    },
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid Kenyan phone number',
  INVALID_DATE: 'Please select a valid date',
  NAME_TOO_SHORT: `Name must be at least ${APP_CONFIG.VALIDATION.NAME_MIN_LENGTH} characters`,
  NAME_TOO_LONG: `Name must be less than ${APP_CONFIG.VALIDATION.NAME_MAX_LENGTH} characters`,
  FUTURE_DATE_REQUIRED: 'Please select a future date',
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again later.',
  FORM_SUBMISSION_FAILED: 'Failed to submit form. Please try again or contact us directly.',
  PAYMENT_FAILED: 'Payment failed. Please check your M-Pesa balance and try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Your request has been submitted successfully!',
  PAYMENT_SUCCESS: 'Payment completed successfully!',
  TOUR_BOOKED: 'Tour booking request sent! We will contact you shortly.',
  MESSAGE_SENT: 'Message sent successfully! We will get back to you soon.',
} as const;