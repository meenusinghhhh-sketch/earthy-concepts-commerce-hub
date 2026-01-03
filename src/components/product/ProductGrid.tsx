import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function ProductGrid({ products, title, subtitle, columns = 3 }: ProductGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}