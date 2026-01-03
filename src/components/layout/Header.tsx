import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import RegionSelector from './RegionSelector';
import logo from '@/assets/earthy-concepts-logo.jpeg';

const navigation = [
  { name: 'Shop', href: '/shop' },
  { name: 'Concepts', href: '/concepts' },
  { name: 'Bundles', href: '/bundles' },
  { name: 'Find Your Concept', href: '/quiz' },
  { name: 'Learn', href: '/learn' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <p>Free shipping on orders over AED 200 • Subscribe & save 15%</p>
      </div>

      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Earthy Concepts - Natural Conscious Wellness" 
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <RegionSelector />
            
            <button className="hidden sm:block p-2 text-foreground/80 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/account" className="hidden sm:block p-2 text-foreground/80 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>
            
            <button 
              onClick={openCart}
              className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-background p-6 shadow-xl animate-slide-in-right">
            <div className="flex items-center justify-between mb-8">
              <img 
                src={logo} 
                alt="Earthy Concepts" 
                className="h-10 w-auto"
              />
              <button
                type="button"
                className="-m-2.5 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flow-root">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <Button asChild className="w-full" size="lg">
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}