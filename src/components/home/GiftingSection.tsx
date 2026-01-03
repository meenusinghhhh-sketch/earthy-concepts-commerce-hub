import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GiftingSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Personal Gifting */}
          <div className="relative overflow-hidden rounded-2xl bg-earthy-cream p-8 lg:p-12">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Gift className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
                Give the Gift of Wellness
              </h3>
              <p className="text-muted-foreground mt-3 mb-6">
                Curated gift boxes for every occasion. Share the Earthy experience with someone special.
              </p>
              <Button asChild className="group">
                <Link to="/gifts">
                  Shop Gift Boxes
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Corporate Wellness */}
          <div className="relative overflow-hidden rounded-2xl bg-earthy-sand p-8 lg:p-12">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
                Corporate Wellness
              </h3>
              <p className="text-muted-foreground mt-3 mb-6">
                Elevate your workplace wellness with customized wellness programs and bulk orders.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/corporate">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}