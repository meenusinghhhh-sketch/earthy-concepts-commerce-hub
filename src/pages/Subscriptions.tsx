import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Leaf, Truck, RefreshCw, Percent, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Percent,
    title: '15% Off Every Order',
    description: 'Save on every delivery with exclusive subscriber pricing.',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'All subscription orders ship free, always.',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Scheduling',
    description: 'Choose your delivery frequency: every 2, 4, or 6 weeks.',
  },
  {
    icon: Heart,
    title: 'Priority Support',
    description: 'Get dedicated support from our wellness experts.',
  },
  {
    icon: Leaf,
    title: 'Early Access',
    description: 'Be the first to try new products and limited editions.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose Your Products',
    description: 'Browse our collection and select the products that fit your wellness journey.',
  },
  {
    number: '02',
    title: 'Toggle Subscribe & Save',
    description: 'On any product page, simply switch the toggle to "Subscribe" to unlock savings.',
  },
  {
    number: '03',
    title: 'Set Your Schedule',
    description: 'Pick how often you want your products delivered—every 2, 4, or 6 weeks.',
  },
  {
    number: '04',
    title: 'Enjoy & Adjust Anytime',
    description: 'Pause, skip, or cancel your subscription anytime with no commitments.',
  },
];

const faqs = [
  {
    question: 'Can I change my subscription products?',
    answer: 'Yes! You can swap products, adjust quantities, or add new items to your subscription at any time from your account dashboard.',
  },
  {
    question: 'How do I skip or pause a delivery?',
    answer: 'Simply log into your account and manage your subscription. You can skip a delivery or pause your subscription with just a few clicks.',
  },
  {
    question: 'Is there a commitment or contract?',
    answer: 'No commitments! You can cancel your subscription anytime. We believe in earning your loyalty with every delivery.',
  },
  {
    question: 'When will I be charged?',
    answer: 'You\'ll be charged before each scheduled delivery based on the frequency you selected. We\'ll always send you a reminder email before processing.',
  },
];

export default function Subscriptions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Subscribe & Save
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Your Wellness, <span className="text-primary">Delivered</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Never run out of your favorite products. Subscribe to save 15% on every order, 
            plus enjoy free shipping and exclusive member benefits.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/shop">Start Shopping</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Subscriber Benefits
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              More than just savings—enjoy a complete wellness experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border/50 bg-card/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting started is simple—just four easy steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 border-t-2 border-dashed border-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <Card key={faq.question} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    {faq.question}
                  </CardTitle>
                  <CardDescription className="pl-8">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join thousands of wellness enthusiasts who trust Earthy Concepts for their daily rituals.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
