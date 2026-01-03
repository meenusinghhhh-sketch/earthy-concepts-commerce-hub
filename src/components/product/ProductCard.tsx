import { Link } from 'react-router-dom';
import { ShoppingBag, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useRegion } from '@/contexts/RegionContext';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const [isSubscription, setIsSubscription] = useState(true);
  const { addItem } = useCart();
  const { formatPrice } = useRegion();

  const displayPrice = isSubscription ? product.subscriptionPrice : product.price;
  const savings = product.price - product.subscriptionPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, isSubscription, 'product');
  };

  if (variant === 'compact') {
    return (
      <Link 
        to={`/shop/${product.slug}`}
        className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
      >
        <div className="aspect-square bg-secondary relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.isBestseller && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              Bestseller
            </Badge>
          )}
          <button 
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
          <p className="font-semibold mt-2">{formatPrice(product.price)}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/shop/${product.slug}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all"
    >
      <div className="aspect-square bg-secondary relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isBestseller && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Bestseller
          </Badge>
        )}
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>★</span>
            <span>{product.rating}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">{formatPrice(displayPrice)}</p>
            {isSubscription && (
              <p className="text-xs text-primary">Save {formatPrice(savings)}/month</p>
            )}
          </div>
        </div>

        <div 
          className="mt-3 flex items-center gap-2"
          onClick={(e) => e.preventDefault()}
        >
          <Switch 
            checked={isSubscription}
            onCheckedChange={setIsSubscription}
            className="scale-90"
          />
          <span className="text-xs text-muted-foreground">
            Subscribe & save 15%
          </span>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full mt-4"
          size="lg"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}