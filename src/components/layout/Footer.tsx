import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logo from '@/assets/earthy-concepts-logo.jpeg';

const footerLinks = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Teas', href: '/shop?category=teas' },
    { name: 'Bundles', href: '/bundles' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'Gifts', href: '/gifts' },
  ],
  concepts: [
    { name: 'Calm Concept', href: '/concepts/calm' },
    { name: "Women's Balance", href: '/concepts/womens-balance' },
    { name: 'Immunity', href: '/concepts/immunity' },
    { name: 'Metabolic Balance', href: '/concepts/metabolic-balance' },
    { name: 'Skin & Glow', href: '/concepts/skin-glow' },
    { name: 'Heart Wellness', href: '/concepts/heart-wellness' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about#story' },
    { name: 'Learn', href: '/learn' },
    { name: 'Contact', href: '/contact' },
    { name: 'Corporate Wellness', href: '/corporate' },
  ],
  support: [
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl mb-3">Join the Earthy Community</h3>
            <p className="text-primary-foreground/80 mb-6">
              Receive wellness tips, exclusive offers, and early access to new concepts.
            </p>
            <form className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm mb-6">
              Modern Ayurveda for daily balance. Born in Dubai, rooted in ancient wisdom.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:hello@earthyconcepts.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Concepts Links */}
          <div>
            <h4 className="font-medium mb-4">Concepts</h4>
            <ul className="space-y-3">
              {footerLinks.concepts.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Earthy Concepts. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <span>🇦🇪 Born in Dubai</span>
            <span>•</span>
            <span>Shipped Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}