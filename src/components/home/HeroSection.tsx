import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-earthy-sage/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-earthy-sand/40 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 animate-fade-up">
            Holistic Wellness • Born in Dubai
          </p>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Wellness concepts
            <span className="block text-primary">you can shop.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Simple daily rituals powered by ancient Ayurvedic wisdom. 
            Products that work, concepts that last.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button asChild size="lg" className="text-base px-8 h-14 rounded-full">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 h-14 rounded-full">
              <Link to="/quiz">
                Find Your Concept
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span>100% Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✨</span>
              <span>Ayurvedic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚚</span>
              <span>Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}