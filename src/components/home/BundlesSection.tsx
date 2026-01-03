import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BundleCard from '@/components/product/BundleCard';
import { bundles } from '@/data/products';

export default function BundlesSection() {
  const featuredBundles = bundles.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Concept Packs
            </h2>
            <p className="text-muted-foreground mt-2">
              Complete wellness routines bundled for better results
            </p>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/bundles">
              View All Bundles
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>
    </section>
  );
}