import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  'Save 15% on every order',
  'Free shipping always',
  'Pause, skip, or cancel anytime',
  'Priority customer support',
  'Early access to new products',
];

export default function SubscriptionCTA() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-4">
              Subscribe & Save
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight">
              Make wellness effortless with monthly delivery
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands who've made Earthy Concepts part of their daily routine. 
              Subscribe to your favorite products and never run out.
            </p>
            
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              asChild 
              size="lg" 
              variant="secondary" 
              className="mt-10 text-base px-8 h-14 rounded-full group"
            >
              <Link to="/subscriptions">
                Start Your Subscription
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl font-serif font-bold">15%</p>
                <p className="text-xl mt-2">off every order</p>
                <p className="mt-4 text-primary-foreground/70">
                  Plus free shipping on all subscriptions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}