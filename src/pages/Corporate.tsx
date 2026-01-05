import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Building2, 
  Users, 
  Gift, 
  Leaf, 
  CheckCircle2, 
  Package,
  HeartHandshake,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Employee Wellness",
    description: "Boost morale and show appreciation with premium wellness gifts that promote health and self-care."
  },
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description: "Healthy employees are more focused, energetic, and productive. Invest in their well-being."
  },
  {
    icon: Gift,
    title: "Custom Branding",
    description: "Add your company logo and personalized messages to create memorable branded gift experiences."
  },
  {
    icon: Package,
    title: "Bulk Discounts",
    description: "Enjoy significant savings with tiered pricing for orders of 25+ units. The more you order, the more you save."
  }
];

const packages = [
  {
    name: "Essential Wellness",
    description: "Perfect for team appreciation",
    items: ["Immune Tea Blend", "Stress Balance Capsules", "Lavender Calm Oil"],
    minOrder: 25,
    priceRange: "$45-55"
  },
  {
    name: "Premium Vitality",
    description: "Comprehensive wellness experience",
    items: ["Golden Curcumin", "Sleep Support", "Energy Boost", "Mindful Ghriti"],
    minOrder: 15,
    priceRange: "$85-100"
  },
  {
    name: "Executive Collection",
    description: "Luxury wellness for VIP clients",
    items: ["Full Immunity Bundle", "Premium Skincare Set", "Signature Tea Collection", "Wellness Journal"],
    minOrder: 10,
    priceRange: "$150-180"
  }
];

const pricingTiers = [
  { quantity: "25-49 units", discount: "10% off" },
  { quantity: "50-99 units", discount: "15% off" },
  { quantity: "100-249 units", discount: "20% off" },
  { quantity: "250+ units", discount: "25% off + Free Shipping" }
];

const Corporate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Our corporate team will contact you within 24-48 business hours."
    });
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      quantity: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Corporate Wellness Programs</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Elevate Your Team's Wellness Journey
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with Earthy Concepts to create meaningful wellness experiences for your employees, 
              clients, and stakeholders. From holiday gifts to wellness programs, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="#inquiry-form">
                  <MessageSquare className="h-4 w-4" />
                  Request a Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="#packages">
                  <Package className="h-4 w-4" />
                  View Packages
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Corporate Wellness?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Investing in employee wellness delivers measurable returns through improved health, 
              satisfaction, and retention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Curated Corporate Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our pre-designed packages or work with us to create a fully customized solution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-serif text-primary">{pkg.priceRange}</p>
                      <p className="text-xs text-muted-foreground">per gift box</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm font-medium mb-2">Includes:</p>
                      <ul className="space-y-2">
                        {pkg.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">
                      Minimum order: {pkg.minOrder} units
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 lg:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Volume Pricing
              </h2>
              <p className="text-muted-foreground">
                The more you order, the more you save. All orders include complimentary gift wrapping.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pricingTiers.map((tier, index) => (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="pt-6 pb-6">
                    <p className="font-medium text-foreground mb-1">{tier.quantity}</p>
                    <p className="text-lg font-serif text-primary">{tier.discount}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Fully Customizable Solutions
              </h2>
              <p className="text-muted-foreground mb-8">
                Beyond our standard packages, we offer complete customization to match your brand and occasion perfectly.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom product selection from our full catalog",
                  "Branded packaging with your company logo",
                  "Personalized gift cards and messages",
                  "Flexible delivery scheduling",
                  "Dedicated account manager for orders 100+",
                  "Quarterly wellness subscription programs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="font-serif text-2xl text-foreground mb-4">
                  Trusted by Leading Companies
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join 200+ organizations that have chosen Earthy Concepts for their corporate wellness needs.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-serif text-primary">50K+</p>
                    <p className="text-xs text-muted-foreground">Gifts Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-primary">98%</p>
                    <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif text-primary">200+</p>
                    <p className="text-xs text-muted-foreground">Corporate Partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Request a Custom Quote
              </h2>
              <p className="text-muted-foreground">
                Tell us about your needs and our corporate team will create a tailored proposal within 24-48 hours.
              </p>
            </div>
            <Card className="border-border/50">
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Quantity *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 50-100 units"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your occasion, timeline, customization needs, or any questions..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Corporate;