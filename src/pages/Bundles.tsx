import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import BundleCard from '@/components/product/BundleCard';
import { bundles } from '@/data/products';

export default function Bundles() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-12">
        <div className="container-wide">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">Concept Packs</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Concept Packs
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Complete wellness routines bundled together. Save money and get better results 
            with our thoughtfully curated concept packs.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>
    </Layout>
  );
}