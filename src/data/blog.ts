export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Essential Guide to Raising Healthy Day-Old Chicks',
    excerpt: 'Learn the critical first steps to ensure your day-old chicks grow into strong, productive birds. From proper brooding techniques to nutrition essentials.',
    content: `
      <h2>Getting Started with Day-Old Chicks</h2>
      <p>Raising day-old chicks successfully requires careful attention to their immediate needs. The first few weeks are critical for establishing a strong foundation for healthy growth.</p>
      
      <h3>Setting Up the Brooder</h3>
      <p>Your brooder should maintain a temperature of 95°F (35°C) for the first week, then decrease by 5°F each week until reaching 70°F (21°C). Use infrared heat lamps or brooder plates to provide consistent warmth.</p>
      
      <h3>Essential Equipment</h3>
      <ul>
        <li><strong>Heat Source:</strong> Infrared lamps or electric brooder plates</li>
        <li><strong>Thermometer:</strong> Monitor temperature accurately</li>
        <li><strong>Feeders:</strong> Shallow troughs for easy access</li>
        <li><strong>Waterers:</strong> Clean, fresh water constantly available</li>
        <li><strong>Bedding:</strong> Pine shavings or paper towels (avoid newspaper)</li>
      </ul>
      
      <h3>Feeding Schedule</h3>
      <p>Start with a high-quality chick starter feed containing 20-24% protein. Feed should be available 24/7 for the first 8 weeks. Ensure feeders are the right height - chicks should be able to reach feed easily without standing on it.</p>
      
      <h3>Water Management</h3>
      <p>Clean, fresh water is essential. Change water daily and ensure waterers are cleaned regularly. For the first few days, you may add electrolytes to help chicks recover from shipping stress.</p>
      
      <h3>Health Monitoring</h3>
      <p>Watch for signs of healthy chicks: active movement, bright eyes, fluffy appearance, and good appetite. Remove any sick birds immediately and consult a veterinarian if needed.</p>
    `,
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    readingTime: 8,
    featured: true,
    category: 'Chick Care',
    tags: ['day-old chicks', 'brooding', 'health', 'beginners'],
    image: '/chicks.jpeg'
  },
  {
    id: '2',
    title: 'Maximizing Egg Production: Best Practices for Layer Management',
    excerpt: 'Discover proven strategies to optimize egg production from your layer birds. From nutrition to housing requirements for peak performance.',
    content: `
      <h2>Optimizing Layer Performance</h2>
      <p>Successful egg production depends on providing layers with optimal conditions throughout their productive life. Understanding their needs at different stages is key to maximizing output.</p>
      
      <h3>Layer Nutrition Requirements</h3>
      <p>A quality layer feed should contain 16-18% protein with adequate calcium (3.5-4%) for strong shell formation. Provide oyster shell or limestone as a calcium supplement.</p>
      
      <h3>Housing Essentials</h3>
      <ul>
        <li><strong>Space:</strong> 4 square feet per bird in the coop</li>
        <li><strong>Nesting Boxes:</strong> 1 box per 4-5 hens</li>
        <li><strong>Perches:</strong> 8-12 inches per bird</li>
        <li><strong>Ventilation:</strong> Proper airflow without drafts</li>
      </ul>
      
      <h3>Lighting Programs</h3>
      <p>Layers need 14-16 hours of light daily for optimal production. Maintain consistent lighting schedules and avoid sudden changes that can stress birds and reduce laying.</p>
      
      <h3>Common Production Issues</h3>
      <p>Monitor for factors that reduce egg production:</p>
      <ul>
        <li>Stress from overcrowding or predators</li>
        <li>Poor nutrition or inadequate water</li>
        <li>Disease or parasites</li>
        <li>Extreme temperatures</li>
        <li>Aging beyond peak production period</li>
      </ul>
      
      <h3>Record Keeping</h3>
      <p>Track daily egg production, feed consumption, and bird health. This data helps identify trends and optimize management practices.</p>
    `,
    author: 'James Kiprotich',
    publishedAt: '2024-01-10',
    readingTime: 10,
    featured: true,
    category: 'Layer Management',
    tags: ['layers', 'egg production', 'nutrition', 'housing'],
    image: '/exlayers.jpeg'
  },
  {
    id: '3',
    title: 'Disease Prevention in Poultry: A Comprehensive Vaccination Guide',
    excerpt: 'Protect your flock with a proper vaccination schedule. Learn about common poultry diseases and preventive measures to keep your birds healthy.',
    content: `
      <h2>Keeping Your Flock Healthy</h2>
      <p>Prevention is always better than treatment in poultry farming. A well-planned vaccination program combined with good management practices can prevent major losses from diseases.</p>
      
      <h3>Common Poultry Diseases in Kenya</h3>
      <ul>
        <li><strong>Newcastle Disease:</strong> Highly contagious viral disease</li>
        <li><strong>Gumboro Disease:</strong> Affects the immune system</li>
        <li><strong>Marek's Disease:</strong> Viral disease causing tumors</li>
        <li><strong>Fowl Pox:</strong> Causes skin lesions and respiratory issues</li>
        <li><strong>Coccidiosis:</strong> Parasitic disease affecting intestines</li>
      </ul>
      
      <h3>Vaccination Schedule</h3>
      <p><strong>Day 1:</strong> Marek's Disease (usually at hatchery)</p>
      <p><strong>Day 7-10:</strong> Newcastle Disease (NDV4HR)</p>
      <p><strong>Day 14-18:</strong> Gumboro Disease (IBD)</p>
      <p><strong>Day 21-28:</strong> Newcastle Disease booster</p>
      <p><strong>Week 6-8:</strong> Fowl Pox vaccination</p>
      
      <h3>Biosecurity Measures</h3>
      <ul>
        <li>Limit visitor access to poultry areas</li>
        <li>Maintain clean water and feed systems</li>
        <li>Regular cleaning and disinfection</li>
        <li>Proper waste management</li>
        <li>Quarantine new birds before introducing to flock</li>
      </ul>
      
      <h3>Signs of Illness</h3>
      <p>Early detection is crucial. Watch for:</p>
      <ul>
        <li>Loss of appetite or reduced water intake</li>
        <li>Lethargy or unusual behavior</li>
        <li>Respiratory symptoms (coughing, sneezing)</li>
        <li>Diarrhea or unusual droppings</li>
        <li>Sudden drop in egg production</li>
      </ul>
      
      <h3>Working with Veterinarians</h3>
      <p>Establish a relationship with a poultry veterinarian. Regular health checks and prompt treatment of sick birds can save your entire flock.</p>
    `,
    author: 'Dr. Mary Wanjiku',
    publishedAt: '2024-01-05',
    readingTime: 12,
    featured: true,
    category: 'Health & Veterinary',
    tags: ['vaccination', 'disease prevention', 'biosecurity', 'health'],
    image: '/vacc.jpeg'
  },
  {
    id: '4',
    title: 'Profitable Broiler Production: From Chick to Market',
    excerpt: 'Master the art of broiler production with proven techniques for fast growth, optimal feed conversion, and maximum profitability.',
    content: `
      <h2>Building a Successful Broiler Business</h2>
      <p>Broiler production offers excellent opportunities for quick returns when done correctly. Understanding growth phases and management requirements is essential for profitability.</p>
      
      <h3>Broiler Growth Phases</h3>
      <p><strong>Starter Phase (0-3 weeks):</strong> Focus on establishing good growth foundation</p>
      <p><strong>Grower Phase (3-5 weeks):</strong> Rapid weight gain period</p>
      <p><strong>Finisher Phase (5-8 weeks):</strong> Final fattening before market</p>
      
      <h3>Feed Management</h3>
      <ul>
        <li><strong>Starter Feed:</strong> 23-24% protein for first 3 weeks</li>
        <li><strong>Grower Feed:</strong> 20-22% protein for weeks 3-5</li>
        <li><strong>Finisher Feed:</strong> 18-20% protein until market weight</li>
      </ul>
      
      <h3>Space Requirements</h3>
      <p>Provide adequate space to prevent overcrowding:</p>
      <ul>
        <li>0-2 weeks: 0.5 sq ft per bird</li>
        <li>2-4 weeks: 0.75 sq ft per bird</li>
        <li>4-8 weeks: 1.5 sq ft per bird</li>
      </ul>
      
      <h3>Environmental Management</h3>
      <p>Temperature control is critical for broiler performance:</p>
      <ul>
        <li>Week 1: 32-35°C</li>
        <li>Week 2: 29-32°C</li>
        <li>Week 3: 26-29°C</li>
        <li>Week 4+: 21-24°C</li>
      </ul>
      
      <h3>Marketing Strategies</h3>
      <p>Plan your market before starting production. Options include:</p>
      <ul>
        <li>Direct sales to consumers</li>
        <li>Restaurants and hotels</li>
        <li>Local markets and butcheries</li>
        <li>Contract farming arrangements</li>
      </ul>
      
      <h3>Cost Management</h3>
      <p>Track key performance indicators:</p>
      <ul>
        <li>Feed Conversion Ratio (FCR)</li>
        <li>Average Daily Gain (ADG)</li>
        <li>Mortality rate</li>
        <li>Cost per kg of live weight</li>
      </ul>
    `,
    author: 'Peter Mwangi',
    publishedAt: '2024-01-01',
    readingTime: 11,
    featured: false,
    category: 'Broiler Production',
    tags: ['broilers', 'profitability', 'feed management', 'marketing'],
    image: '/broilers.jpg'
  },
  {
    id: '5',
    title: 'Kienyeji Chicken Farming: Traditional Breeds for Modern Success',
    excerpt: 'Explore the benefits of raising indigenous chicken breeds. Learn about their hardiness, market demand, and sustainable farming practices.',
    content: `
      <h2>The Value of Indigenous Breeds</h2>
      <p>Kienyeji (indigenous) chickens are gaining popularity due to their hardiness, disease resistance, and high market value. These traditional breeds offer excellent opportunities for sustainable farming.</p>
      
      <h3>Advantages of Kienyeji Chickens</h3>
      <ul>
        <li><strong>Disease Resistance:</strong> Natural immunity to many diseases</li>
        <li><strong>Hardy Nature:</strong> Adapt well to local climate conditions</li>
        <li><strong>High Market Value:</strong> Premium prices for meat and eggs</li>
        <li><strong>Low Input Costs:</strong> Require less intensive management</li>
        <li><strong>Cultural Preference:</strong> High demand for traditional taste</li>
      </ul>
      
      <h3>Popular Indigenous Breeds</h3>
      <ul>
        <li><strong>Rainbow Rooster:</strong> Fast-growing improved breed</li>
        <li><strong>Kenbro:</strong> Good egg and meat production</li>
        <li><strong>Kuroiler:</strong> Dual-purpose breed from India</li>
        <li><strong>KALRO breeds:</strong> Locally developed varieties</li>
      </ul>
      
      <h3>Management Systems</h3>
      <p><strong>Free Range System:</strong> Birds roam freely, foraging for food</p>
      <p><strong>Semi-Intensive:</strong> Combination of confinement and free range</p>
      <p><strong>Intensive System:</strong> Complete confinement with controlled environment</p>
      
      <h3>Feeding Strategies</h3>
      <p>Kienyeji chickens can survive on:</p>
      <ul>
        <li>Kitchen scraps and vegetable waste</li>
        <li>Locally available grains (maize, millet, sorghum)</li>
        <li>Supplemental commercial feed</li>
        <li>Natural foraging (insects, worms, seeds)</li>
      </ul>
      
      <h3>Housing Requirements</h3>
      <p>Simple, cost-effective housing options:</p>
      <ul>
        <li>Local materials (wood, iron sheets, wire mesh)</li>
        <li>Adequate ventilation and drainage</li>
        <li>Protection from predators</li>
        <li>Easy cleaning and maintenance</li>
      </ul>
      
      <h3>Market Opportunities</h3>
      <p>Kienyeji products command premium prices:</p>
      <ul>
        <li>Eggs: 15-20 KSh each vs 12-15 KSh for commercial</li>
        <li>Live birds: 800-1500 KSh depending on size</li>
        <li>Dressed chicken: 650-900 KSh per kg</li>
      </ul>
    `,
    author: 'Grace Nyokabi',
    publishedAt: '2023-12-28',
    readingTime: 9,
    featured: false,
    category: 'Indigenous Breeds',
    tags: ['kienyeji', 'indigenous', 'sustainable farming', 'traditional'],
    image: '/hen.jpg'
  },
  {
    id: '6',
    title: 'Poultry Equipment Essentials: Building Efficiency into Your Operation',
    excerpt: 'Invest wisely in poultry equipment that improves productivity and reduces labor. From automated feeders to climate control systems.',
    content: `
      <h2>Essential Equipment for Modern Poultry Farming</h2>
      <p>The right equipment can significantly improve the efficiency of your poultry operation while reducing labor costs and improving bird welfare.</p>
      
      <h3>Feeding Equipment</h3>
      <ul>
        <li><strong>Automatic Feeders:</strong> Reduce waste and ensure consistent feeding</li>
        <li><strong>Feed Storage Bins:</strong> Keep feed fresh and protect from pests</li>
        <li><strong>Feed Mills:</strong> Mix your own feeds for cost savings</li>
        <li><strong>Feeding Troughs:</strong> Easy cleaning and appropriate sizing</li>
      </ul>
      
      <h3>Watering Systems</h3>
      <ul>
        <li><strong>Nipple Drinkers:</strong> Clean water, reduced spillage</li>
        <li><strong>Bell Drinkers:</strong> Suitable for various ages</li>
        <li><strong>Water Storage Tanks:</strong> Ensure constant supply</li>
        <li><strong>Water Treatment Systems:</strong> Medication and vitamin delivery</li>
      </ul>
      
      <h3>Housing Components</h3>
      <ul>
        <li><strong>Ventilation Systems:</strong> Maintain air quality</li>
        <li><strong>Heating Equipment:</strong> Brooders and heating systems</li>
        <li><strong>Nesting Boxes:</strong> Comfortable laying environment</li>
        <li><strong>Perches and Roosts:</strong> Natural behavior support</li>
      </ul>
      
      <h3>Egg Handling Equipment</h3>
      <ul>
        <li><strong>Egg Collection Baskets:</strong> Protect eggs during collection</li>
        <li><strong>Egg Washing Equipment:</strong> Clean eggs for market</li>
        <li><strong>Egg Grading Systems:</strong> Sort by size and quality</li>
        <li><strong>Egg Storage Coolers:</strong> Maintain freshness</li>
      </ul>
      
      <h3>Health and Maintenance Equipment</h3>
      <ul>
        <li><strong>Vaccination Equipment:</strong> Syringes and needles</li>
        <li><strong>Cleaning Equipment:</strong> Pressure washers, disinfectants</li>
        <li><strong>Weighing Scales:</strong> Monitor bird growth</li>
        <li><strong>Incubators:</strong> Hatch your own chicks</li>
      </ul>
      
      <h3>Investment Priorities</h3>
      <p>Start with essential items and upgrade gradually:</p>
      <ol>
        <li>Basic feeders and waterers</li>
        <li>Proper housing and ventilation</li>
        <li>Heating equipment for chicks</li>
        <li>Automated systems as operation grows</li>
        <li>Processing equipment for value addition</li>
      </ol>
      
      <h3>Cost-Benefit Analysis</h3>
      <p>Calculate the return on investment for equipment purchases:</p>
      <ul>
        <li>Labor savings from automation</li>
        <li>Reduced feed waste</li>
        <li>Improved bird performance</li>
        <li>Better product quality</li>
      </ul>
    `,
    author: 'Eng. Samuel Mutua',
    publishedAt: '2023-12-20',
    readingTime: 13,
    featured: false,
    category: 'Equipment & Technology',
    tags: ['equipment', 'automation', 'efficiency', 'investment'],
    image: '/feeder.jpeg'
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostById = (id: string) => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogCategories = () => {
  const categories = blogPosts.map(post => post.category);
  return [...new Set(categories)];
};