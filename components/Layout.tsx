import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Heart } from 'lucide-react';
import { PageRoutes } from '../types';

const NAV_LINKS = [
  { label: 'Home', href: PageRoutes.HOME },
  { label: 'About', href: PageRoutes.ABOUT },
  { label: 'Services', href: PageRoutes.SERVICES },
  { label: 'Portfolio', href: PageRoutes.PORTFOLIO },
  { label: 'Testimonials', href: PageRoutes.TESTIMONIALS },
  { label: 'Blog', href: PageRoutes.BLOG },
  { label: 'Contact', href: PageRoutes.CONTACT },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to={PageRoutes.HOME} className="z-50">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${isScrolled ? 'text-navy-900' : 'text-navy-900'}`}>
              WYNETTE<span className="font-normal text-slate-500">MCPHEE</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-navy-800 ${
                  location.pathname === link.href ? 'text-navy-900 border-b-2 border-navy-900' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={PageRoutes.CONTACT}
              className="px-6 py-2.5 bg-navy-900 text-white text-sm font-medium tracking-wide rounded-full hover:bg-navy-800 transition-colors shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 p-2 text-navy-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/98 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-serif text-3xl text-navy-900 hover:text-slate-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={PageRoutes.CONTACT}
            className="mt-8 px-8 py-3 bg-navy-900 text-white text-lg font-medium rounded-full hover:bg-navy-800 shadow-xl"
          >
            Book Consultation
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <h2 className="font-serif text-2xl font-bold mb-6 tracking-wider">WYNETTE MCPHEE</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Crafting timeless wedding experiences with elegance, precision, and personal touch.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-serif text-lg font-medium mb-6 text-slate-100">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 5).map(link => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-serif text-lg font-medium mb-6 text-slate-100">Services</h3>
              <ul className="space-y-3">
                <li><Link to={PageRoutes.SERVICES} className="text-slate-300 hover:text-white text-sm">Full Service Planning</Link></li>
                <li><Link to={PageRoutes.SERVICES} className="text-slate-300 hover:text-white text-sm">Partial Planning</Link></li>
                <li><Link to={PageRoutes.SERVICES} className="text-slate-300 hover:text-white text-sm">Month-of Coordination</Link></li>
                <li><Link to={PageRoutes.SERVICES} className="text-slate-300 hover:text-white text-sm">Design Consultation</Link></li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-serif text-lg font-medium mb-6 text-slate-100">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>hello@wynettemcphee.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Wynette Mcphee Weddings. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400 mt-4 md:mt-0">
              <span>Designed with</span>
              <Heart size={12} className="text-red-400 fill-current" />
              <span>for Elegance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
