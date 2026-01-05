export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  subscriptionPrice: number;
  currency: string;
  image: string;
  images: string[];
  category: ProductCategory;
  concept: ConceptType;
  problemSupports: string[];
  bestTimeToUse: string;
  howToUse: string[];
  ingredients: Ingredient[];
  whatToExpect: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
}

export interface Ingredient {
  name: string;
  benefit: string;
}

export type ProductCategory = 
  | 'teas' 
  | 'face-masks' 
  | 'face-mists' 
  | 'hair-oils' 
  | 'body-oils' 
  | 'facial-oils'
  | 'formulations' 
  | 'single-herbs' 
  | 'capsules'
  | 'powders'
  | 'ghriti'
  | 'topicals' 
  | 'supplements' 
  | 'bundles' 
  | 'gifts';

export type ConceptType = 
  | 'calm'
  | 'womens-balance'
  | 'immunity'
  | 'metabolic-balance'
  | 'skin-glow'
  | 'heart-wellness'
  | 'brain-mind'
  | 'hair-scalp'
  | 'digestive'
  | 'liver'
  | 'joints-bones'
  | 'mens-vitality'
  | 'general-health';

export interface Concept {
  id: ConceptType;
  name: string;
  tagline: string;
  description: string;
  color: string;
  icon: string;
  products: string[];
}

export interface Bundle {
  id: string;
  name: string;
  slug: string;
  concept: ConceptType;
  description: string;
  products: string[];
  originalPrice: number;
  bundlePrice: number;
  subscriptionPrice: number;
  savings: number;
  image: string;
}

export interface CartItem {
  product: Product | Bundle;
  quantity: number;
  isSubscription: boolean;
  type: 'product' | 'bundle';
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
}

export interface Region {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  priceMultiplier: number;
}

export const REGIONS: Region[] = [
  { code: 'AE', name: 'UAE', currency: 'AED', currencySymbol: 'AED', priceMultiplier: 1 },
  { code: 'IN', name: 'India', currency: 'INR', currencySymbol: '₹', priceMultiplier: 22 },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', priceMultiplier: 0.22 },
];
