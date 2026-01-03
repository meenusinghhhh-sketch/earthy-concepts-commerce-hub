import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { products, concepts } from '@/data/products';
import { ProductCategory, ConceptType } from '@/types/product';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'teas', label: 'Teas' },
  { value: 'topicals', label: 'Topicals' },
  { value: 'supplements', label: 'Supplements' },
  { value: 'bundles', label: 'Bundles' },
  { value: 'gifts', label: 'Gifts' },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedConcept, setSelectedConcept] = useState<ConceptType | 'all'>('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedConcept !== 'all' && product.concept !== selectedConcept) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  return (
    <Layout>
      <div className="bg-secondary/30 py-12">
        <div className="container-wide">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Shop</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Shop All Products
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Discover our complete collection of Ayurvedic wellness products. 
            Each designed to support your daily wellness journey.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-4 ml-auto">
            <Select value={selectedConcept} onValueChange={(v) => setSelectedConcept(v as ConceptType | 'all')}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Concept" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Concepts</SelectItem>
                {concepts.map((concept) => (
                  <SelectItem key={concept.id} value={concept.id}>
                    {concept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {sortedProducts.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products match your filters.</p>
            <Button 
              variant="link" 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedConcept('all');
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}