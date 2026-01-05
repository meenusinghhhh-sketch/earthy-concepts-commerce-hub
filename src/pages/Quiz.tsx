import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { concepts } from '@/data/products';
import { ConceptType } from '@/types/product';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    concepts: ConceptType[];
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your primary wellness goal right now?",
    options: [
      { text: "Reduce stress and find inner calm", concepts: ['calm', 'brain-mind'] },
      { text: "Boost my energy and immunity", concepts: ['immunity', 'general-health'] },
      { text: "Improve my skin and appearance", concepts: ['skin-glow', 'hair-scalp'] },
      { text: "Support my digestive health", concepts: ['digestive', 'liver'] },
      { text: "Balance hormones and vitality", concepts: ['womens-balance', 'mens-vitality'] },
    ]
  },
  {
    id: 2,
    question: "How would you describe your current stress levels?",
    options: [
      { text: "Very high - I struggle to relax", concepts: ['calm', 'brain-mind'] },
      { text: "Moderate - occasional stress", concepts: ['general-health', 'immunity'] },
      { text: "Low - I manage stress well", concepts: ['metabolic-balance', 'heart-wellness'] },
      { text: "Variable - depends on life situations", concepts: ['womens-balance', 'mens-vitality'] },
    ]
  },
  {
    id: 3,
    question: "What time of day do you feel your energy dips the most?",
    options: [
      { text: "Morning - hard to wake up", concepts: ['general-health', 'metabolic-balance'] },
      { text: "Afternoon - post-lunch slump", concepts: ['digestive', 'metabolic-balance'] },
      { text: "Evening - exhausted after work", concepts: ['calm', 'mens-vitality'] },
      { text: "Consistent low energy all day", concepts: ['immunity', 'liver'] },
    ]
  },
  {
    id: 4,
    question: "Which area of your body needs the most attention?",
    options: [
      { text: "Skin - want that natural glow", concepts: ['skin-glow'] },
      { text: "Hair - strength and shine", concepts: ['hair-scalp'] },
      { text: "Gut - digestive comfort", concepts: ['digestive', 'liver'] },
      { text: "Heart - cardiovascular wellness", concepts: ['heart-wellness'] },
      { text: "Joints - flexibility and comfort", concepts: ['joints-bones'] },
    ]
  },
  {
    id: 5,
    question: "How do you prefer to incorporate wellness into your routine?",
    options: [
      { text: "Morning rituals with teas", concepts: ['calm', 'immunity', 'digestive'] },
      { text: "Skincare and self-care moments", concepts: ['skin-glow', 'hair-scalp'] },
      { text: "Simple daily supplements", concepts: ['general-health', 'immunity', 'metabolic-balance'] },
      { text: "Evening wind-down routines", concepts: ['calm', 'brain-mind'] },
    ]
  },
];

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<ConceptType[][]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedConcept, setRecommendedConcept] = useState<ConceptType | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (concepts: ConceptType[]) => {
    const newAnswers = [...answers, concepts];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const allConcepts = newAnswers.flat();
      const conceptCounts = allConcepts.reduce((acc, concept) => {
        acc[concept] = (acc[concept] || 0) + 1;
        return acc;
      }, {} as Record<ConceptType, number>);

      const topConcept = Object.entries(conceptCounts).sort((a, b) => b[1] - a[1])[0][0] as ConceptType;
      setRecommendedConcept(topConcept);
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendedConcept(null);
  };

  const concept = recommendedConcept ? concepts.find(c => c.id === recommendedConcept) : null;

  return (
    <Layout>
      <div className="bg-gradient-to-b from-secondary/50 to-background min-h-[80vh] py-12">
        <div className="container-wide max-w-3xl">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                    {questions[currentQuestion].question}
                  </h1>

                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.concepts)}
                        className="w-full p-4 md:p-5 text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                      >
                        <span className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                          {option.text}
                        </span>
                      </button>
                    ))}
                  </div>

                  {currentQuestion > 0 && (
                    <Button
                      variant="ghost"
                      onClick={goBack}
                      className="mt-6"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                  )}
                </CardContent>
              </Card>
            </>
          ) : (
            /* Result */
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="bg-primary/10 p-8 text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  Your Wellness Match
                </h1>
                <p className="text-muted-foreground">Based on your answers, we recommend</p>
              </div>
              
              <CardContent className="p-8 md:p-12 text-center">
                {concept && (
                  <>
                    <div 
                      className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
                      style={{ backgroundColor: concept.color + '20' }}
                    >
                      {concept.icon}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {concept.name}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-4">
                      {concept.tagline}
                    </p>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                      {concept.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg">
                        <Link to={`/concepts/${concept.id}`}>
                          Explore {concept.name} Products
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" onClick={restartQuiz}>
                        Retake Quiz
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
