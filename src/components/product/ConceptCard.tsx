import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Concept } from '@/types/product';

interface ConceptCardProps {
  concept: Concept;
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <Link 
      to={`/concepts/${concept.id}`}
      className={`group block p-6 rounded-xl ${concept.color} hover:shadow-elevated transition-all duration-300`}
    >
      <div className="text-4xl mb-4">{concept.icon}</div>
      <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
        {concept.name}
      </h3>
      <p className="text-sm text-muted-foreground mt-2">{concept.tagline}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
        <span>Explore</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}