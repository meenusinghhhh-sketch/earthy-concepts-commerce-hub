import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'Dubai, UAE',
    rating: 5,
    text: "SereneTea has completely transformed my evening routine. I sleep better and wake up feeling refreshed. It's become an essential part of my wellness journey.",
    product: 'SereneTea',
  },
  {
    id: 2,
    name: 'Priya K.',
    location: 'Mumbai, India',
    rating: 5,
    text: "Finally found something natural that actually helps with hormonal balance. HerTea is gentle yet effective. I've recommended it to all my friends.",
    product: 'HerTea',
  },
  {
    id: 3,
    name: 'James L.',
    location: 'London, UK',
    rating: 5,
    text: "The quality is exceptional. You can taste the difference. ImmuneTea has become my morning ritual and I haven't had a cold in months.",
    product: 'ImmuneTea',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground mt-3">
            Real reviews from our global community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card p-6 rounded-xl shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-earthy-gold text-earthy-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-sm text-primary mt-1">Purchased: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-card rounded-full shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-earthy-gold text-earthy-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.8 average from 1,200+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}