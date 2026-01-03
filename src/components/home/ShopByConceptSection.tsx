import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConceptCard from '@/components/product/ConceptCard';
import { concepts } from '@/data/products';

export default function ShopByConceptSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Shop by Concept
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We don't just sell products—we sell wellness concepts. 
            Find the one that speaks to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/quiz">
              Not sure? Take our quiz
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}