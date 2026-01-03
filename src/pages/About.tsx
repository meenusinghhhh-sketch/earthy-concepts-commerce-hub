import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import logo from '@/assets/earthy-concepts-logo.jpeg';

export default function About() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-12">
        <div className="container-wide">
          <nav className="text-sm mb-4">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">About</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            About Earthy Concepts
          </h1>
        </div>
      </div>

      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-12">
            <img src={logo} alt="Earthy Concepts" className="h-24 w-auto" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born in Dubai, UAE — where the ancient meets the avant-garde — Earthy Concepts blends 
              indigenous knowledge systems with modern wellness practices.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground">
              We sell wellness concepts practiced through simple daily routines. Our products are 
              the tools that enable these concepts. We believe in the power of consistency, 
              simplicity, and time-tested wisdom.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Natural. Conscious. Wellness.</h2>
            <p className="text-muted-foreground">
              Every Earthy Concepts product is crafted with 100% natural ingredients, 
              sourced responsibly, and formulated based on authentic Ayurvedic principles. 
              We never make medical claims or sell quick fixes—we offer gentle, sustainable 
              support for your wellness journey.
            </p>

            <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Our Promise</h2>
            <ul className="text-muted-foreground space-y-2">
              <li>✓ Pure, natural ingredients with no artificial additives</li>
              <li>✓ Lab-tested for quality and potency</li>
              <li>✓ Sustainable and ethical sourcing</li>
              <li>✓ Education-first approach to wellness</li>
              <li>✓ 30-day happiness guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}