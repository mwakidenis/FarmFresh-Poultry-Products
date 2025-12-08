import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product' | 'article';
  price?: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  brand?: string;
  category?: string;
  structuredData?: object;
}

/**
 * SEO Component - Manages meta tags, Open Graph, Twitter Cards, and structured data
 * 
 * Features:
 * - Dynamic meta tags and titles
 * - Open Graph and Twitter Card support
 * - JSON-LD structured data
 * - Product-specific SEO data
 * - Social media optimization
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Premium poultry products delivered fresh to your doorstep. From farm-fresh eggs to healthy chicks and premium chicken meat, we provide the best quality poultry products in Kenya.',
  keywords = 'poultry, farm fresh, eggs, chicks, chicken, Kenya, delivery, organic, healthy, farm to table',
  image = 'https://farmfreshpoultry.co.ke/og-image.jpg',
  url,
  type = 'website',
  price,
  currency = 'KES',
  availability = 'InStock',
  brand = 'FarmFresh Poultry',
  category,
  structuredData
}) => {
  const siteName = 'FarmFresh Poultry';
  const defaultTitle = 'FarmFresh Poultry | Premium Poultry Products';
  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const currentUrl = url || window.location.href;

  // Generate structured data based on type
  const generateStructuredData = () => {
    if (structuredData) {
      return structuredData;
    }

    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'product' ? 'Product' : 'Organization',
      name: type === 'product' ? title : siteName,
      description,
      url: currentUrl,
      image,
    };

    if (type === 'product') {
      return {
        ...baseData,
        brand: {
          '@type': 'Brand',
          name: brand
        },
        category,
        offers: {
          '@type': 'Offer',
          price,
          priceCurrency: currency,
          availability: `https://schema.org/${availability}`,
          url: currentUrl
        }
      };
    } else {
      return {
        ...baseData,
        '@type': 'Organization',
        logo: image,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+254-712-345-678',
          contactType: 'customer service',
          availableLanguage: ['English', 'Swahili']
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Poultry Farm Road',
          addressLocality: 'Nakuru',
          addressCountry: 'Kenya'
        },
        sameAs: [
          'https://facebook.com/farmfreshpoultry',
          'https://twitter.com/farmfreshpoultry',
          'https://instagram.com/farmfreshpoultry'
        ]
      };
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEO;