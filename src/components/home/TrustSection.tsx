import { Leaf, FlaskConical, Truck, RefreshCw } from 'lucide-react';

const trustPoints = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure Ayurvedic ingredients with no additives or artificial flavors',
  },
  {
    icon: FlaskConical,
    title: 'Lab Tested',
    description: 'Every batch tested for purity and potency',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over AED 200, delivered to your door',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day happiness guarantee on all products',
  },
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground">{point.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}