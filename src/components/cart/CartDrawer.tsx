import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useCart } from '@/contexts/CartContext';
import { useRegion } from '@/contexts/RegionContext';
import { Product, Bundle } from '@/types/product';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, toggleSubscription, subtotal } = useCart();
  const { formatPrice } = useRegion();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-serif text-xl">Your Cart ({items.length})</h2>
            <button 
              onClick={closeCart}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Button asChild onClick={closeCart}>
                  <Link to="/shop">Start Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const isBundle = item.type === 'bundle';
                  const product = item.product as Product | Bundle;
                  const price = item.isSubscription
                    ? (isBundle ? (product as Bundle).subscriptionPrice : (product as Product).subscriptionPrice)
                    : (isBundle ? (product as Bundle).bundlePrice : (product as Product).price);

                  return (
                    <div key={product.id} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-20 h-20 bg-secondary rounded-md overflow-hidden shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-medium truncate">{product.name}</h4>
                            {isBundle && (
                              <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                Bundle
                              </span>
                            )}
                          </div>
                          <button 
                            onClick={() => removeItem(product.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="mt-2 flex items-center gap-2">
                          <Switch 
                            checked={item.isSubscription}
                            onCheckedChange={() => toggleSubscription(product.id)}
                            className="scale-75"
                          />
                          <span className="text-xs text-muted-foreground">
                            Subscribe & save 15%
                          </span>
                        </div>
                        
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(product.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-border hover:bg-muted"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(product.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full border border-border hover:bg-muted"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-medium">{formatPrice(price * item.quantity)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-4 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span>Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shipping calculated at checkout
              </p>
              <Button asChild size="lg" className="w-full" onClick={closeCart}>
                <Link to="/checkout" className="flex items-center justify-center gap-2">
                  Checkout <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full text-muted-foreground"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}