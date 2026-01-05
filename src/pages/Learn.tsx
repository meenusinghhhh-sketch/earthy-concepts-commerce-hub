import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Leaf, Heart, Brain, Sun, Moon, Droplets, Wind, ArrowRight } from 'lucide-react';

const ayurvedaBasics = [
  {
    title: "What is Ayurveda?",
    icon: <Leaf className="h-6 w-6" />,
    content: "Ayurveda, meaning 'science of life' in Sanskrit, is one of the world's oldest holistic healing systems. Developed over 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit."
  },
  {
    title: "The Three Doshas",
    icon: <Wind className="h-6 w-6" />,
    content: "Ayurveda identifies three fundamental energies or doshas: Vata (air and space), Pitta (fire and water), and Kapha (water and earth). Each person has a unique combination of these doshas that defines their constitution and health needs."
  },
  {
    title: "Holistic Approach",
    icon: <Heart className="h-6 w-6" />,
    content: "Unlike modern medicine that often treats symptoms, Ayurveda addresses the root cause of imbalances. It emphasizes prevention and encourages the maintenance of health through diet, lifestyle, yoga, and herbal remedies."
  },
  {
    title: "Daily Routines (Dinacharya)",
    icon: <Sun className="h-6 w-6" />,
    content: "Ayurveda places great importance on daily routines aligned with natural rhythms. This includes practices like tongue scraping, oil pulling, self-massage (abhyanga), and eating at regular times to maintain optimal health."
  },
];

const herbGuides = [
  {
    name: "Ashwagandha",
    tagline: "The Strength of a Stallion",
    benefits: ["Stress adaptation", "Energy & vitality", "Sleep support", "Cognitive function"],
    description: "Known as Indian Ginseng, Ashwagandha is an adaptogenic herb that helps the body manage stress and promotes overall wellness."
  },
  {
    name: "Tulsi (Holy Basil)",
    tagline: "The Queen of Herbs",
    benefits: ["Respiratory health", "Immune support", "Stress relief", "Antioxidant"],
    description: "Revered in India for centuries, Tulsi is considered a sacred plant with powerful adaptogenic and purifying properties."
  },
  {
    name: "Brahmi",
    tagline: "The Brain Tonic",
    benefits: ["Mental clarity", "Memory support", "Calm mind", "Focus"],
    description: "A renowned nootropic herb in Ayurveda, Brahmi enhances cognitive function and promotes mental tranquility."
  },
  {
    name: "Turmeric",
    tagline: "The Golden Spice",
    benefits: ["Anti-inflammatory", "Antioxidant", "Joint comfort", "Skin health"],
    description: "Curcumin-rich turmeric has been used for thousands of years for its powerful healing properties and as a culinary spice."
  },
  {
    name: "Shatavari",
    tagline: "She Who Has 100 Husbands",
    benefits: ["Women's health", "Hormonal balance", "Vitality", "Reproductive wellness"],
    description: "The premier rejuvenative herb for women, Shatavari supports hormonal balance and overall female health."
  },
  {
    name: "Triphala",
    tagline: "The Three Fruits",
    benefits: ["Digestive health", "Gentle detox", "Regularity", "Nutrient absorption"],
    description: "A traditional Ayurvedic formulation of three fruits that supports digestion and gentle detoxification."
  },
];

const wellnessArticles = [
  {
    title: "Building Your Morning Ritual",
    category: "Daily Routines",
    readTime: "5 min read",
    excerpt: "Start your day with intention using these simple Ayurvedic morning practices that set the tone for wellness.",
  },
  {
    title: "Understanding Your Dosha",
    category: "Ayurveda Basics",
    readTime: "8 min read",
    excerpt: "Discover your unique mind-body constitution and learn how to make lifestyle choices that support your natural balance.",
  },
  {
    title: "The Art of Oil Massage",
    category: "Self-Care",
    readTime: "6 min read",
    excerpt: "Learn the ancient practice of Abhyanga - self-massage with warm oil - and its profound benefits for body and mind.",
  },
  {
    title: "Seasonal Eating in Ayurveda",
    category: "Nutrition",
    readTime: "7 min read",
    excerpt: "Align your diet with nature's rhythms to support digestion, immunity, and overall vitality throughout the year.",
  },
];

export default function Learn() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Wellness Education
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Learn About Ayurveda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the ancient wisdom of Ayurveda and learn how natural herbs 
            and holistic practices can transform your daily wellness journey.
          </p>
        </div>
      </div>

      <div className="container-wide section-padding">
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="basics">Ayurveda Basics</TabsTrigger>
            <TabsTrigger value="herbs">Herb Guide</TabsTrigger>
            <TabsTrigger value="articles">Wellness Articles</TabsTrigger>
          </TabsList>

          {/* Ayurveda Basics Tab */}
          <TabsContent value="basics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ayurvedaBasics.map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <CardTitle className="font-serif text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
              <Moon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">Find Your Balance</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Take our wellness quiz to discover which Ayurvedic concept aligns with your current health needs.
              </p>
              <Button asChild size="lg">
                <Link to="/quiz">
                  Take the Quiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Herb Guide Tab */}
          <TabsContent value="herbs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {herbGuides.map((herb, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Droplets className="h-4 w-4" />
                      Ayurvedic Herb
                    </div>
                    <CardTitle className="font-serif text-xl">{herb.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{herb.tagline}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {herb.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {herb.benefits.map((benefit, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-secondary px-2 py-1 rounded-full text-foreground/70"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Explore our products featuring these powerful herbs
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/shop">
                  Browse Products
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wellnessArticles.map((article, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-secondary/30 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Stay Informed</h3>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter for the latest wellness tips and Ayurvedic insights.
                  </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 md:w-64 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
