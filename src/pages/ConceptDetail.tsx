import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product/ProductCard';
import BundleCard from '@/components/product/BundleCard';
import { getConceptById, getProductsByConcept, getBundlesByConcept } from '@/data/products';

export default function ConceptDetail() {
  const { id } = useParams<{ id: string }>();
  const concept = getConceptById(id || '');
  const conceptProducts = getProductsByConcept(id || '');
  const conceptBundles = getBundlesByConcept(id || '');

  if (!concept) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">
          <h1 className="font-serif text-3xl">Concept not found</h1>
          <Button asChild className="mt-4">
            <Link to="/concepts">View All Concepts</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <div className={`py-16 md:py-24 ${concept.color}`}>
        <div className="container-wide">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link to="/concepts" className="text-muted-foreground hover:text-primary">Concepts</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{concept.name}</span>
          </nav>
          
          <div className="max-w-3xl">
            <span className="text-5xl mb-6 block">{concept.icon}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              {concept.name}
            </h1>
            <p className="text-xl text-primary mt-2">{concept.tagline}</p>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              {concept.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide section-padding">
        {/* Bundles */}
        {conceptBundles.length > 0 && (
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
              Get the Complete {concept.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conceptBundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </div>
          </section>
        )}

        {/* Products */}
        <section>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
            Shop {concept.name} Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center p-10 bg-secondary/30 rounded-2xl">
          <h3 className="font-serif text-2xl font-semibold">Not sure where to start?</h3>
          <p className="text-muted-foreground mt-2 mb-6">
            Take our quiz to find the perfect concept for your needs.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/quiz">
              Find Your Concept
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}