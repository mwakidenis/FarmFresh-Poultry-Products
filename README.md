# 🐔 FarmFresh Poultry - Premium Poultry Products Website

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> 🌟 **Fresh & Healthy Poultry Products delivered right to your doorstep!** 🚚✨

Welcome to **FarmFresh Poultry** - Kenya's premier online platform for high-quality poultry products! From farm-fresh eggs 🥚 to healthy chicks 🐣 and premium chicken meat 🍗, we provide everything you need for your poultry farming success.

## 🎯 Features

### 🛒 **E-Commerce Platform**
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🛍️ **Product Catalog** - Browse our extensive range of poultry products
- 🛒 **Shopping Cart** - Easy cart management with real-time updates
- 💳 **M-Pesa Integration** - Convenient mobile payments for Kenyan customers
- 🔍 **Advanced Search** - Find products quickly with our intelligent search
- ⚡ **Fast Loading** - Optimized performance with lazy loading and code splitting

### 🤖 **AI Assistant Chat Widget** *(New Feature!)*
- 💬 **Smart Chat Bot** - Intelligent assistant to help customers navigate the website
- 🌟 **Floating Widget** - Beautiful circular chat icon at bottom-right corner
- 📱 **Mobile Responsive** - Perfectly adapted for all screen sizes
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 🔄 **Real-time Responses** - Instant replies with typing indicators
- 🧠 **Context-Aware** - Understands product inquiries, orders, delivery, and company info
- 🎭 **Relatable Personality** - Friendly, helpful, and knowledgeable about poultry farming

### 📦 **Product Categories**
- 🐣 **Day-Old Chicks** - Vaccinated broiler and layer chicks
- 🥚 **Farm Fresh Eggs** - Free-range eggs in various pack sizes
- 🍗 **Fresh Chicken** - Whole chickens and premium cuts
- 🏠 **Poultry Equipment** - Coops, feeders, and farming accessories
- 💊 **Health Products** - Vaccines, supplements, and care kits

### 🚀 **Additional Features**
- 🏠 **Farm Tours** - Book guided visits to our poultry farm
- 📞 **Customer Support** - Multiple contact channels for assistance
- 🔐 **User Authentication** - Secure login and account management
- 📊 **Order Tracking** - Monitor your orders from placement to delivery
- 📄 **Legal Pages** - Privacy policy, terms, and delivery information

## 🛠️ Technology Stack

### Frontend
- ⚛️ **React 18.3.1** - Modern React with hooks and concurrent features
- 📘 **TypeScript 5.5.3** - Type-safe development for better code quality
- 🎨 **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid styling
- 🏗️ **Vite 7.1.4** - Lightning-fast build tool and development server
- 🧭 **React Router DOM 6.22.3** - Client-side routing with lazy loading

### UI Components & Icons
- 🔥 **Lucide React** - Beautiful, customizable icons
- 🍞 **React Hot Toast** - Elegant toast notifications
- ⛑️ **React Helmet Async** - SEO optimization with dynamic meta tags

### Development Tools
- 🔧 **ESLint** - Code linting and quality enforcement
- 🎯 **PostCSS** - CSS post-processing with Autoprefixer
- 🔨 **Terser** - JavaScript minification for production builds

## 🚀 Quick Start

### Prerequisites
- 📦 **Node.js** (version 18 or higher)
- 📥 **npm** or **yarn** package manager

### Installation

1. **Clone the repository** 📂
```bash
git clone https://github.com/mwakidenis/FarmFresh-Poultry-Products.git
cd Poultry-Farm
```

2. **Install dependencies** ⚡
```bash
npm install
# or
yarn install
```

3. **Start development server** 🚀
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** 🌐
Navigate to `http://localhost:5173` to see the application running!

### Build for Production 🏗️
```bash
npm run build
# or
yarn build
```

### Preview Production Build 👀
```bash
npm run preview
# or
yarn preview
```

## 🤖 AI Assistant Features

The **AI Assistant Chat Widget** is our latest addition, designed to enhance customer experience:

### 🎯 **Smart Capabilities**
- **Product Guidance**: Helps customers find the right poultry products
- **Navigation Help**: Assists with website navigation and feature discovery
- **Company Information**: Shares details about FarmFresh Poultry's mission and values
- **Order Support**: Guides customers through the ordering process
- **Delivery Information**: Provides details about delivery options and schedules
- **Farm Tours**: Helps customers book guided farm visits

### 💡 **Interactive Features**
- **Floating Icon**: Pulsing amber circular button for easy access
- **Expandable Window**: Clean, modern chat interface
- **Message History**: Maintains conversation context
- **Typing Indicators**: Shows when AI is processing responses
- **Mobile Optimized**: Responsive design for all devices
- **Smooth Animations**: Polished user experience with CSS transitions

### 🎨 **Visual Design**
- **Brand Colors**: Uses FarmFresh Poultry's signature amber theme
- **Professional UI**: Clean white backgrounds with proper spacing
- **Accessible Icons**: Clear close and send buttons with proper labeling
- **Responsive Layout**: Adapts perfectly to different screen sizes

## 📁 Project Structure

```
src/
├── 📂 components/          # Reusable React components
│   ├── 📂 common/         # Shared components
│   │   ├── ChatWidget.tsx # 🤖 AI Assistant Chat Widget
│   │   ├── ProductCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── ...
│   ├── 📂 layout/         # Layout components
│   └── 📂 checkout/       # Checkout specific components
├── 📂 pages/              # Page components
├── 📂 context/            # React Context providers
├── 📂 data/               # Static data and configurations
├── 📂 types/              # TypeScript type definitions
├── 📂 utils/              # Utility functions
└── 📂 assets/             # Static assets
```

## 🎨 Styling & Design

- **Design System**: Consistent use of amber/orange brand colors (#F59E0B)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Systematic spacing using Tailwind's spacing scale
- **Responsive**: Mobile-first approach with breakpoint-specific designs
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛡️ Features in Detail

### 🛒 **E-Commerce Functionality**
- **Product Browsing**: Intuitive category-based navigation
- **Cart Management**: Add, remove, and update quantities
- **Checkout Process**: Streamlined order placement
- **Payment Integration**: M-Pesa mobile payment support
- **Order Confirmation**: Clear confirmation with order details

### 📱 **Mobile Experience**
- **Responsive Design**: Adapts to all screen sizes
- **Touch-Friendly**: Large buttons and easy navigation
- **Fast Loading**: Optimized images and lazy loading
- **Offline Support**: Service worker for basic offline functionality

### 🔍 **SEO Optimization**
- **Dynamic Meta Tags**: Page-specific titles and descriptions
- **Structured Data**: Rich snippets for better search visibility
- **Fast Loading**: Optimized Core Web Vitals
- **Clean URLs**: User-friendly and search-engine-friendly URLs

## 🚀 Performance Optimizations

- ⚡ **Code Splitting**: Lazy loading for faster initial page loads
- 🖼️ **Image Optimization**: Compressed and responsive images
- 📦 **Bundle Optimization**: Tree shaking and minification
- 🔄 **Caching**: Efficient browser and CDN caching strategies
- 📊 **Performance Monitoring**: Core Web Vitals tracking

## 🤝 Contributing

We welcome contributions to improve FarmFresh Poultry! Here's how you can help:

1. **Fork the repository** 🍴
2. **Create a feature branch** 🌿
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** ✨
4. **Commit your changes** 💾
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to the branch** 🚀
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request** 🔄

## 🐛 Bug Reports & Feature Requests

Found a bug? 🐛 Want to request a feature? 💡

Please use the [GitHub Issues](https://github.com/lewiii254/Poultry-Farm/issues) page to:
- Report bugs with detailed reproduction steps
- Request new features with clear use cases
- Ask questions about the project
- Suggest improvements

## 📈 Analytics & Monitoring

- **Performance Tracking**: Google Analytics integration
- **Error Monitoring**: Sentry for production error tracking
- **User Behavior**: Heatmaps and user session recordings
- **Conversion Tracking**: E-commerce goal tracking

## 🔒 Security

- **Input Validation**: All user inputs are validated and sanitized
- **Secure Headers**: Implementation of security headers
- **HTTPS Only**: Secure data transmission
- **Privacy Compliant**: GDPR and local privacy law compliance

## 📊 Browser Support

- ✅ **Chrome** (last 2 versions)
- ✅ **Firefox** (last 2 versions)
- ✅ **Safari** (last 2 versions)
- ✅ **Edge** (last 2 versions)
- 📱 **Mobile Browsers** (iOS Safari, Chrome Mobile)

## 🌍 Deployment

### **Vercel** (Recommended)
This project includes a `vercel.json` configuration file that handles client-side routing for the Single Page Application (SPA). This ensures that all routes work correctly when users refresh the page or navigate directly to a specific URL.

```bash
npm run build
vercel --prod
```

**Note**: The `vercel.json` file configures Vercel to always serve `index.html` for all routes, allowing React Router to handle navigation on the client side. This prevents 404 errors when refreshing pages or accessing routes directly.

### **Netlify**
For Netlify deployment, you'll need to create a `_redirects` file in the `public` folder with the following content:
```
/*    /index.html   200
```

Then deploy:
```bash
npm run build
# Deploy the dist/ folder
```

### **Traditional Hosting**
For traditional hosting (Apache, Nginx), configure your server to redirect all routes to `index.html`:

**Apache (.htaccess)**:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Then deploy:
```bash
npm run build
# Upload the dist/ folder to your web server
```

## 📞 Contact & Support

- 🌐 **Website**: [farmfreshpoultry.co.ke](https://farmfreshpoultry.co.ke)
- 📧 **Email**: info@farmfreshpoultry.co.ke
- 📱 **Phone**: +254 798 750 585
- 📍 **Address**: 123 Poultry Farm Road, Nakuru, Kenya

## 📄 License

This project is proprietary software owned by FarmFresh Poultry. All rights reserved.

## 🙏 Acknowledgments

- 🌟 **React Team** for the amazing framework
- 🎨 **Tailwind CSS** for the utility-first approach
- ⚡ **Vite Team** for the lightning-fast build tool
- 🔧 **Open Source Community** for incredible tools and libraries

---

<div align="center">

## 🚀 **Ready to Experience Fresh Quality?**

Visit our website and try the new **AI Assistant Chat Widget**! 🤖✨

### 📱 **Screenshots**

#### Desktop View
![Desktop Chat Widget](https://github.com/user-attachments/assets/70a4a263-7547-4fb8-938e-c1cb79737b3a)

#### Mobile View
![Mobile Responsive Design](https://github.com/user-attachments/assets/3f08baa9-c812-452b-ba65-828c731193de)

#### Mobile Chat Interface
![Mobile Chat Widget](https://github.com/user-attachments/assets/04e0e65f-790f-40ed-a1a3-524c1aba9faa)

</div>

---

**Made with ❤️ by Mwaki Denis | Supporting**[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-%F0%9F%8D%B5-yellow?style=plastic)](https://wa.me/254798750585)
