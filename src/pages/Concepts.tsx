import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ConceptCard from '@/components/product/ConceptCard';
import { concepts } from '@/data/products';

export default function Concepts() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-12">
        <div className="container-wide">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Concepts</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Wellness Concepts
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            We don't just sell products—we sell wellness concepts practiced through simple daily routines. 
            Find the concept that speaks to your needs.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </Layout>
  );
}