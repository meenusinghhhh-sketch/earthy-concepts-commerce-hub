import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, Minus, Plus, Check, Star, Truck, RefreshCw } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductBySlug, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useRegion } from '@/contexts/RegionContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(true);
  const { addItem } = useCart();
  const { formatPrice } = useRegion();

  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">
          <h1 className="font-serif text-3xl">Product not found</h1>
          <Button asChild className="mt-4">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const displayPrice = isSubscription ? product.subscriptionPrice : product.price;
  const savings = product.price - product.subscriptionPrice;
  const relatedProducts = products.filter(p => p.concept === product.concept && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity, isSubscription, 'product');
  };

  return (
    <Layout>
      <div className="container-wide section-padding">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/shop" className="text-muted-foreground hover:text-primary">Shop</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className="aspect-square bg-secondary rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-earthy-gold text-earthy-gold' : 'text-border'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              {product.name}
            </h1>
            <p className="text-lg text-primary mt-2">{product.tagline}</p>
            <p className="text-muted-foreground mt-4">{product.description}</p>

            {/* Price */}
            <div className="mt-6 p-6 bg-secondary/50 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-semibold">{formatPrice(displayPrice)}</p>
                  {isSubscription && (
                    <p className="text-sm text-primary">Save {formatPrice(savings)} per month</p>
                  )}
                </div>
                {!isSubscription && (
                  <p className="text-muted-foreground">One-time purchase</p>
                )}
              </div>

              <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                <div className="flex items-center gap-3">
                  <Switch 
                    checked={isSubscription}
                    onCheckedChange={setIsSubscription}
                  />
                  <div>
                    <p className="font-medium">Subscribe & Save 15%</p>
                    <p className="text-sm text-muted-foreground">Delivered monthly, cancel anytime</p>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-muted"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart}
                size="lg" 
                className="w-full mt-6 h-14 text-lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart — {formatPrice(displayPrice * quantity)}
              </Button>
            </div>

            {/* Quick info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free shipping over AED 200</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span className="text-sm">30-day returns</span>
              </div>
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="how-to-use" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="what-to-expect">What to Expect</TabsTrigger>
              </TabsList>
              
              <TabsContent value="how-to-use" className="mt-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-primary mb-3">Best time: {product.bestTimeToUse}</p>
                  <ol className="space-y-2">
                    {product.howToUse.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
              
              <TabsContent value="ingredients" className="mt-4">
                <div className="space-y-3">
                  {product.ingredients.map((ingredient) => (
                    <div key={ingredient.name} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{ingredient.name}</p>
                        <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="what-to-expect" className="mt-4">
                <div className="space-y-3">
                  {product.whatToExpect.map((expectation, i) => (
                    <div key={i} className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-muted-foreground">{expectation}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="font-serif text-2xl font-semibold mb-8">Often Bought Together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}