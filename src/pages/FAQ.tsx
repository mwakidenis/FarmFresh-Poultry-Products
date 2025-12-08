import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What breeds of chicks do you offer?",
    answer: "We offer a variety of breeds including broilers, layers, and indigenous (kienyeji) chicks. Our broiler chicks are perfect for meat production, while our layer chicks are from high-performing egg-laying breeds. We also have indigenous breeds that are well-adapted to local conditions."
  },
  {
    question: "How do you ensure the quality of your eggs?",
    answer: "Our eggs undergo strict quality control measures. We collect them daily, clean them properly, and store them in optimal conditions. Each egg is inspected for cracks or defects before packaging. We maintain high standards of hygiene in our facilities and ensure our hens receive proper nutrition for the best quality eggs."
  },
  {
    question: "What are your delivery options?",
    answer: "We offer same-day delivery within Nairobi and next-day delivery to major towns. For other locations, delivery typically takes 2-3 days. We use specialized transportation to ensure your products arrive fresh and in perfect condition."
  },
  {
    question: "How do I make payments?",
    answer: "We accept M-Pesa payments and cash on delivery. For M-Pesa payments, you'll receive a prompt on your phone to complete the transaction. We ensure all payment processes are secure and convenient."
  },
  {
    question: "What is your return policy?",
    answer: "We have a 100% satisfaction guarantee. If you're not satisfied with the quality of our products, please contact us within 24 hours of delivery. We'll either replace the products or provide a refund, depending on your preference."
  },
  {
    question: "How do you vaccinate your chicks?",
    answer: "All our chicks receive essential vaccinations according to the recommended schedule. We maintain detailed records of vaccinations and follow strict biosecurity measures to ensure the health of our birds."
  },
  {
    question: "Do you provide after-sale support?",
    answer: "Yes, we offer comprehensive after-sale support including guidance on proper care, feeding, and management of poultry. Our experienced team is always available to answer your questions and provide assistance."
  },
  {
    question: "What feeding products do you recommend?",
    answer: "We offer a range of high-quality feeds suitable for different growth stages. Our feeds are formulated to provide optimal nutrition and promote healthy growth. We can recommend specific products based on your poultry's needs."
  },
  {
    question: "How can I start a poultry farming business?",
    answer: "We provide consultation services for those interested in starting a poultry business. This includes guidance on setup, breed selection, housing, feeding, and management practices. Contact us to schedule a consultation."
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes, we offer competitive discounts for bulk orders. The discount rate depends on the quantity and type of products ordered. Contact our sales team for detailed pricing information."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products, services, and poultry farming practices.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="tel:+254712345678"
                className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Call Us
              </a>
              <a
                href="mailto:info@farmfreshpoultry.co.ke"
                className="px-6 py-3 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;