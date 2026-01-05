import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Heart, Package, Sparkles, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bundles } from '@/data/products';
import BundleCard from '@/components/product/BundleCard';

const giftFeatures = [
  {
    icon: Gift,
    title: 'Beautiful Packaging',
    description: 'Each gift arrives in our signature eco-friendly gift box with a handwritten note.',
  },
  {
    icon: Mail,
    title: 'Personal Message',
    description: 'Add a heartfelt personal message to make your gift extra special.',
  },
  {
    icon: Clock,
    title: 'Schedule Delivery',
    description: 'Choose the perfect date for your gift to arrive.',
  },
  {
    icon: Sparkles,
    title: 'Gift Wrapping',
    description: 'Complimentary premium gift wrapping on all gift orders.',
  },
];

const giftOccasions = [
  { name: 'Birthday', emoji: '🎂' },
  { name: 'Thank You', emoji: '💝' },
  { name: 'Get Well Soon', emoji: '🌸' },
  { name: 'Self Care', emoji: '🧘' },
  { name: 'New Mom', emoji: '👶' },
  { name: 'Anniversary', emoji: '💕' },
  { name: 'Just Because', emoji: '✨' },
  { name: 'Congratulations', emoji: '🎉' },
];

const priceRanges = [
  { range: 'Under AED 100', min: 0, max: 100 },
  { range: 'AED 100 - 200', min: 100, max: 200 },
  { range: 'AED 200 - 300', min: 200, max: 300 },
  { range: 'AED 300+', min: 300, max: 9999 },
];

export default function Gifts() {
  // Get a selection of bundles as gift suggestions
  const giftBundles = bundles.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            <Gift className="inline h-4 w-4 mr-2" />
            Gift With Love
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            The Gift of <span className="text-primary">Wellness</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Give the gift of natural wellness. Our thoughtfully curated gift sets and 
            bundles make the perfect present for anyone on their wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/bundles">Shop Gift Sets</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/shop">Build Custom Gift</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gift Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              The Earthy Concepts Gift Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every gift is wrapped with care and delivered with love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {giftFeatures.map((feature) => (
              <Card key={feature.title} className="border-border/50 bg-card/50 text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Shop by Occasion
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find the perfect gift for every celebration.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {giftOccasions.map((occasion) => (
              <Link
                key={occasion.name}
                to="/bundles"
                className="group px-6 py-3 bg-background border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <span className="mr-2">{occasion.emoji}</span>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {occasion.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Price */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Shop by Budget
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Thoughtful gifts at every price point.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {priceRanges.map((price) => (
              <Link
                key={price.range}
                to="/bundles"
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary hover:shadow-lg transition-all text-center"
              >
                <Package className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                  {price.range}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Gift Sets */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Curated Gift Sets
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our most popular bundles, perfect for gifting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftBundles.map((bundle) => (
              <BundleCard key={bundle.id} bundle={bundle} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/bundles">View All Gift Sets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Gifting */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                      Corporate Gifting
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      Gifts for Teams & Clients
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Elevate your corporate gifting with our wellness products. 
                      Custom packaging, bulk discounts, and dedicated support for 
                      orders of 10+ gifts.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 text-primary" />
                        Custom branding options
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 text-primary" />
                        Bulk order discounts
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 text-primary" />
                        Dedicated account manager
                      </li>
                    </ul>
                    <Button asChild className="rounded-full">
                      <Link to="/about">Contact Us</Link>
                    </Button>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gift className="h-24 w-24 text-primary/40" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Take our wellness quiz and we'll help you find the perfect gift 
            based on your recipient's needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/quiz">Take the Quiz</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
