import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';

export default function BestsellersSection() {
  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Bestsellers
            </h2>
            <p className="text-muted-foreground mt-2">
              Our most loved products, trusted by thousands
            </p>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/shop">
              Shop All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <ProductGrid products={bestsellers} columns={3} />
      </div>
    </section>
  );
}