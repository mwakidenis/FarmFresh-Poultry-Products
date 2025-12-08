import React from 'react';
import { Scale, ShieldCheck, FileText, HelpCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Agreement</h3>
            <p className="text-gray-600">
              These terms form a legal agreement between you and FarmFresh Poultry.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Protection</h3>
            <p className="text-gray-600">
              We ensure fair treatment and protect your rights as a customer.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clear Terms</h3>
            <p className="text-gray-600">
              Our terms are written in clear language for better understanding.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
            <p className="text-gray-600">
              Our team is here to help you understand and comply with these terms.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto prose prose-amber">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using our website and services, you agree to be bound by these Terms and Conditions.
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Products and Services</h2>
          <p>
            We provide various poultry products including:
          </p>
          <ul>
            <li>Day-old chicks and mature birds</li>
            <li>Fresh eggs and poultry meat</li>
            <li>Poultry feed and equipment</li>
            <li>Delivery services</li>
          </ul>

          <h2>3. Ordering and Payment</h2>
          <p>
            When placing an order:
          </p>
          <ul>
            <li>All prices are in Kenyan Shillings (KSh)</li>
            <li>Payment is required before delivery</li>
            <li>We accept M-Pesa and cash on delivery</li>
            <li>Orders are subject to product availability</li>
          </ul>

          <h2>4. Delivery</h2>
          <p>
            Our delivery terms include:
          </p>
          <ul>
            <li>Same-day delivery within Nairobi</li>
            <li>Next-day delivery to major towns</li>
            <li>2-3 days delivery to other locations</li>
            <li>Delivery fees vary by location</li>
          </ul>

          <h2>5. Returns and Refunds</h2>
          <p>
            Our return policy states:
          </p>
          <ul>
            <li>Products must be returned within 24 hours</li>
            <li>Products must be in original condition</li>
            <li>Refunds are processed within 7 working days</li>
            <li>Shipping costs are non-refundable</li>
          </ul>

          <h2>6. Product Quality</h2>
          <p>
            We guarantee:
          </p>
          <ul>
            <li>Fresh and healthy products</li>
            <li>Proper vaccination of chicks</li>
            <li>Quality-checked eggs</li>
            <li>Safe and hygienic packaging</li>
          </ul>

          <h2>7. User Accounts</h2>
          <p>
            When creating an account:
          </p>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain password confidentiality</li>
            <li>Update information as needed</li>
            <li>One account per user</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on our website is protected by copyright and other intellectual property rights.
            You may not use our content without permission.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            We are not liable for:
          </p>
          <ul>
            <li>Indirect or consequential losses</li>
            <li>Delays beyond our control</li>
            <li>Third-party services</li>
            <li>User-generated content</li>
          </ul>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
            to our website. Continued use of our services constitutes acceptance of modified terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions about these terms:
          </p>
          <ul>
            <li>Email: legal@farmfreshpoultry.co.ke</li>
            <li>Phone: +254 712 345 678</li>
            <li>Address: 123 Poultry Farm Road, Nakuru, Kenya</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: March 15, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;