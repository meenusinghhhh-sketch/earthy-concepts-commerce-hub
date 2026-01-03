import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bundle } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useRegion } from '@/contexts/RegionContext';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';

interface BundleCardProps {
  bundle: Bundle;
}

export default function BundleCard({ bundle }: BundleCardProps) {
  const [isSubscription, setIsSubscription] = useState(true);
  const { addItem } = useCart();
  const { formatPrice } = useRegion();

  const displayPrice = isSubscription ? bundle.subscriptionPrice : bundle.bundlePrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(bundle, 1, isSubscription, 'bundle');
  };

  return (
    <Link 
      to={`/bundles/${bundle.slug}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border"
    >
      <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
        <img 
          src={bundle.image} 
          alt={bundle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm px-3 py-1">
          Save {formatPrice(bundle.savings)}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {bundle.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {bundle.description}
        </p>
        
        <div className="mt-4 flex items-center gap-3">
          <p className="text-xl font-semibold">{formatPrice(displayPrice)}</p>
          <p className="text-sm text-muted-foreground line-through">
            {formatPrice(bundle.originalPrice)}
          </p>
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
            Subscribe & save more
          </span>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full mt-4"
          size="lg"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add Bundle to Cart
        </Button>
      </div>
    </Link>
  );
}