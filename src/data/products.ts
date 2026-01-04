import { Product, Bundle, Concept } from '@/types/product';

// Import product images
import serenTeaImg from '@/assets/products/serene-tea.jpg';
import herTeaImg from '@/assets/products/her-tea.jpg';
import immuneTeaImg from '@/assets/products/immune-tea.jpg';
import diabeTeaImg from '@/assets/products/diabe-tea.jpg';
import radiantTeaImg from '@/assets/products/radiant-tea.jpg';
import heartTeaImg from '@/assets/products/heart-tea.jpg';

export const products: Product[] = [
  {
    id: 'serene-tea',
    name: 'SereneTea',
    slug: 'serene-tea',
    tagline: 'For calm & restful sleep',
    description: 'A gentle blend of Ayurvedic herbs designed to support relaxation and promote restful sleep. Perfect for evening rituals.',
    price: 129,
    subscriptionPrice: 109,
    currency: 'AED',
    image: serenTeaImg,
    images: [serenTeaImg, serenTeaImg, serenTeaImg],
    category: 'teas',
    concept: 'calm',
    problemSupports: ['Stress relief', 'Better sleep', 'Mental clarity'],
    bestTimeToUse: 'Evening, 30 minutes before bed',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of SereneTea',
      'Steep for 5-7 minutes',
      'Strain and enjoy warm'
    ],
    ingredients: [
      { name: 'Ashwagandha', benefit: 'Supports stress response' },
      { name: 'Chamomile', benefit: 'Promotes relaxation' },
      { name: 'Brahmi', benefit: 'Supports mental calm' },
      { name: 'Lavender', benefit: 'Soothes the senses' }
    ],
    whatToExpect: [
      'Week 1-2: Begin to feel more relaxed in the evenings',
      'Week 3-4: Notice improved sleep quality',
      'Month 2+: Consistent calm and balanced stress response'
    ],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'her-tea',
    name: 'HerTea',
    slug: 'her-tea',
    tagline: 'For hormonal balance',
    description: 'Specially crafted for women, this blend supports hormonal balance throughout your cycle with time-tested Ayurvedic herbs.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: herTeaImg,
    images: [herTeaImg, herTeaImg, herTeaImg],
    category: 'teas',
    concept: 'womens-balance',
    problemSupports: ['Hormonal balance', 'Cycle support', 'Energy levels'],
    bestTimeToUse: 'Morning or afternoon',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of HerTea',
      'Steep for 5-7 minutes',
      'Strain and enjoy'
    ],
    ingredients: [
      { name: 'Shatavari', benefit: 'Supports female hormones' },
      { name: 'Ashoka', benefit: 'Traditional cycle support' },
      { name: 'Lodhra', benefit: 'Hormonal wellness' },
      { name: 'Rose petals', benefit: 'Mood support' }
    ],
    whatToExpect: [
      'Week 1-2: Begin to feel more balanced energy',
      'Week 3-4: Notice improved cycle comfort',
      'Month 2+: Consistent hormonal balance support'
    ],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'immune-tea',
    name: 'ImmuneTea',
    slug: 'immune-tea',
    tagline: 'For daily immunity',
    description: 'A potent blend of immune-supporting herbs to help maintain your body\'s natural defenses throughout the year.',
    price: 119,
    subscriptionPrice: 101,
    currency: 'AED',
    image: immuneTeaImg,
    images: [immuneTeaImg, immuneTeaImg, immuneTeaImg],
    category: 'teas',
    concept: 'immunity',
    problemSupports: ['Immune support', 'Seasonal wellness', 'Daily protection'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of ImmuneTea',
      'Steep for 5-7 minutes',
      'Add honey if desired'
    ],
    ingredients: [
      { name: 'Tulsi', benefit: 'Adaptogenic immunity support' },
      { name: 'Turmeric', benefit: 'Natural anti-inflammatory' },
      { name: 'Ginger', benefit: 'Digestive and immune support' },
      { name: 'Black pepper', benefit: 'Enhanced absorption' }
    ],
    whatToExpect: [
      'Week 1-2: Feel more energized daily',
      'Week 3-4: Notice improved resilience',
      'Month 2+: Consistent immune system support'
    ],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'diabe-tea',
    name: 'DiabeTea',
    slug: 'diabe-tea',
    tagline: 'For metabolic balance',
    description: 'A carefully formulated blend to support healthy blood sugar levels and metabolic function as part of a balanced lifestyle.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: diabeTeaImg,
    images: [diabeTeaImg, diabeTeaImg, diabeTeaImg],
    category: 'teas',
    concept: 'metabolic-balance',
    problemSupports: ['Blood sugar support', 'Metabolic health', 'Energy balance'],
    bestTimeToUse: 'After meals',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of DiabeTea',
      'Steep for 7-10 minutes',
      'Drink after meals'
    ],
    ingredients: [
      { name: 'Gymnema', benefit: 'Supports healthy glucose' },
      { name: 'Fenugreek', benefit: 'Metabolic support' },
      { name: 'Bitter melon', benefit: 'Blood sugar balance' },
      { name: 'Cinnamon', benefit: 'Natural sweetness regulation' }
    ],
    whatToExpect: [
      'Week 1-2: Begin metabolic support routine',
      'Week 3-4: Notice more stable energy levels',
      'Month 2+: Consistent metabolic wellness support'
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'radiant-tea',
    name: 'RadiantTea',
    slug: 'radiant-tea',
    tagline: 'For skin & glow',
    description: 'Beauty from within. This blend supports healthy, glowing skin with herbs traditionally used for complexion and radiance.',
    price: 129,
    subscriptionPrice: 109,
    currency: 'AED',
    image: radiantTeaImg,
    images: [radiantTeaImg, radiantTeaImg, radiantTeaImg],
    category: 'teas',
    concept: 'skin-glow',
    problemSupports: ['Skin radiance', 'Healthy complexion', 'Inner glow'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of RadiantTea',
      'Steep for 5-7 minutes',
      'Enjoy first thing in the morning'
    ],
    ingredients: [
      { name: 'Manjistha', benefit: 'Blood purification' },
      { name: 'Neem', benefit: 'Clear skin support' },
      { name: 'Aloe vera', benefit: 'Skin hydration' },
      { name: 'Hibiscus', benefit: 'Antioxidant rich' }
    ],
    whatToExpect: [
      'Week 1-2: Internal cleansing begins',
      'Week 3-4: Notice clearer, brighter skin',
      'Month 2+: Visible glow and radiance'
    ],
    rating: 4.9,
    reviewCount: 278,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'heart-tea',
    name: 'HeartTea',
    slug: 'heart-tea',
    tagline: 'For heart wellness',
    description: 'Support your cardiovascular health with this thoughtful blend of heart-friendly Ayurvedic herbs for long-term wellness.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: heartTeaImg,
    images: [heartTeaImg, heartTeaImg, heartTeaImg],
    category: 'teas',
    concept: 'heart-wellness',
    problemSupports: ['Heart health', 'Circulation', 'Long-term wellness'],
    bestTimeToUse: 'Morning or evening',
    howToUse: [
      'Boil 200ml of water',
      'Add 1 teaspoon of HeartTea',
      'Steep for 7-10 minutes',
      'Drink daily for best results'
    ],
    ingredients: [
      { name: 'Arjuna', benefit: 'Traditional heart tonic' },
      { name: 'Hawthorn', benefit: 'Cardiovascular support' },
      { name: 'Garlic', benefit: 'Circulation support' },
      { name: 'Green tea', benefit: 'Antioxidant benefits' }
    ],
    whatToExpect: [
      'Week 1-2: Establish heart-healthy routine',
      'Week 3-4: Support cardiovascular function',
      'Month 2+: Long-term heart wellness support'
    ],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    isBestseller: true
  }
];

export const concepts: Concept[] = [
  {
    id: 'calm',
    name: 'Calm Concept',
    tagline: 'Find your peace',
    description: 'Modern life is stressful. The Calm Concept combines ancient wisdom with daily rituals to help you manage stress and achieve restful sleep.',
    color: 'bg-blue-50',
    icon: '🌙',
    products: ['serene-tea']
  },
  {
    id: 'womens-balance',
    name: "Women's Balance Concept",
    tagline: 'Honor your cycle',
    description: 'Support your body through every phase. Our Women\'s Balance Concept provides gentle, natural support for hormonal wellness.',
    color: 'bg-pink-50',
    icon: '🌸',
    products: ['her-tea']
  },
  {
    id: 'immunity',
    name: 'Immunity Concept',
    tagline: 'Shield naturally',
    description: 'Build your body\'s natural defenses. The Immunity Concept strengthens your system with time-tested herbs used for generations.',
    color: 'bg-green-50',
    icon: '🛡️',
    products: ['immune-tea']
  },
  {
    id: 'metabolic-balance',
    name: 'Metabolic Balance Concept',
    tagline: 'Fuel your vitality',
    description: 'Support healthy metabolism and blood sugar balance. The Metabolic Balance Concept helps maintain steady energy throughout the day.',
    color: 'bg-amber-50',
    icon: '⚡',
    products: ['diabe-tea']
  },
  {
    id: 'skin-glow',
    name: 'Skin & Glow Concept',
    tagline: 'Radiate from within',
    description: 'True beauty starts inside. The Skin & Glow Concept nurtures your complexion with purifying and nourishing herbs.',
    color: 'bg-rose-50',
    icon: '✨',
    products: ['radiant-tea']
  },
  {
    id: 'heart-wellness',
    name: 'Heart Wellness Concept',
    tagline: 'Love your heart',
    description: 'Invest in your long-term cardiovascular health. The Heart Wellness Concept supports your heart with powerful, gentle herbs.',
    color: 'bg-red-50',
    icon: '❤️',
    products: ['heart-tea']
  }
];

export const bundles: Bundle[] = [
  {
    id: 'calm-bundle',
    name: 'Calm Concept Pack',
    slug: 'calm-concept-pack',
    concept: 'calm',
    description: 'Everything you need to establish a calming daily routine. Includes SereneTea and complementary wellness items.',
    products: ['serene-tea'],
    originalPrice: 199,
    bundlePrice: 169,
    subscriptionPrice: 149,
    savings: 30,
    image: serenTeaImg
  },
  {
    id: 'womens-bundle',
    name: "Women's Balance Pack",
    slug: 'womens-balance-pack',
    concept: 'womens-balance',
    description: 'Complete hormonal support for every phase of your cycle. Includes HerTea and nurturing essentials.',
    products: ['her-tea'],
    originalPrice: 219,
    bundlePrice: 185,
    subscriptionPrice: 165,
    savings: 34,
    image: herTeaImg
  },
  {
    id: 'immunity-bundle',
    name: 'Immunity Concept Pack',
    slug: 'immunity-concept-pack',
    concept: 'immunity',
    description: 'Build your natural defenses with our complete immunity system. Includes ImmuneTea and protective add-ons.',
    products: ['immune-tea'],
    originalPrice: 189,
    bundlePrice: 159,
    subscriptionPrice: 139,
    savings: 30,
    image: immuneTeaImg
  },
  {
    id: 'metabolic-bundle',
    name: 'Metabolic Balance Pack',
    slug: 'metabolic-balance-pack',
    concept: 'metabolic-balance',
    description: 'Support your metabolism with our comprehensive pack. Includes DiabeTea and balancing essentials.',
    products: ['diabe-tea'],
    originalPrice: 229,
    bundlePrice: 195,
    subscriptionPrice: 175,
    savings: 34,
    image: diabeTeaImg
  },
  {
    id: 'skin-bundle',
    name: 'Skin & Glow Pack',
    slug: 'skin-glow-pack',
    concept: 'skin-glow',
    description: 'Radiate from within with our complete skin wellness pack. Includes RadiantTea and glow-boosting items.',
    products: ['radiant-tea'],
    originalPrice: 209,
    bundlePrice: 179,
    subscriptionPrice: 159,
    savings: 30,
    image: radiantTeaImg
  },
  {
    id: 'heart-bundle',
    name: 'Heart Wellness Pack',
    slug: 'heart-wellness-pack',
    concept: 'heart-wellness',
    description: 'Love your heart with our complete cardiovascular support pack. Includes HeartTea and heart-healthy essentials.',
    products: ['heart-tea'],
    originalPrice: 229,
    bundlePrice: 195,
    subscriptionPrice: 175,
    savings: 34,
    image: heartTeaImg
  }
];

export const getProductById = (id: string): Product | undefined => 
  products.find(p => p.id === id);

export const getProductBySlug = (slug: string): Product | undefined => 
  products.find(p => p.slug === slug);

export const getBundleById = (id: string): Bundle | undefined => 
  bundles.find(b => b.id === id);

export const getBundleBySlug = (slug: string): Bundle | undefined => 
  bundles.find(b => b.slug === slug);

export const getConceptById = (id: string): Concept | undefined => 
  concepts.find(c => c.id === id);

export const getProductsByCategory = (category: string): Product[] => 
  products.filter(p => p.category === category);

export const getProductsByConcept = (conceptId: string): Product[] => 
  products.filter(p => p.concept === conceptId);

export const getBundlesByConcept = (conceptId: string): Bundle[] => 
  bundles.filter(b => b.concept === conceptId);