import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Protection</h3>
            <p className="text-gray-600">
              Your personal data is protected using industry-standard security measures.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              All payment transactions are encrypted and processed securely.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h3>
            <p className="text-gray-600">
              We are clear about how we collect and use your information.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Control</h3>
            <p className="text-gray-600">
              You have control over your personal data and how it's used.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto prose prose-amber">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Delivery address</li>
            <li>Payment information</li>
            <li>Order history</li>
            <li>Communication preferences</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>Delivery partners to fulfill your orders</li>
            <li>Payment processors to handle transactions</li>
            <li>Service providers who assist our operations</li>
            <li>Law enforcement when required by law</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with supervisory authorities</li>
          </ul>

          <h2>Security Measures</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information, including:
          </p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Employee training on data protection</li>
            <li>Access controls and authentication</li>
            <li>Regular backups and disaster recovery plans</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our privacy policy or how we handle your personal information, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@farmfreshpoultry.co.ke</li>
            <li>Phone: +254 712 345 678</li>
            <li>Address: 123 Poultry Farm Road, Nakuru, Kenya</li>
          </ul>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: March 15, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;