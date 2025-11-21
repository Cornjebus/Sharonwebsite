import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import { AIConsultant } from './AIConsultant';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-navy-900 py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
              <Shield className="text-gold-500 h-8 w-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif font-bold text-lg leading-tight">
                Sharon McDonald Evans, PhD
              </span>
              <span className="text-gray-300 text-xs tracking-wider uppercase hidden md:block">
                Strategic Consulting for Sheriffs
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium uppercase tracking-wide hover:text-gold-400 transition-colors ${
                  location.pathname === item.path ? 'text-gold-500 border-b-2 border-gold-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-gold-500 text-navy-900 px-5 py-2 rounded font-bold hover:bg-gold-400 transition-colors text-sm uppercase tracking-wide"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white hover:text-gold-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-white/10 shadow-xl p-4 flex flex-col gap-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  location.pathname === item.path ? 'text-gold-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-gold-500 text-navy-900 px-5 py-3 rounded font-bold text-center mt-2 hover:bg-gold-400"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-gold-500 h-6 w-6" />
                <span className="font-serif font-bold text-xl">Dr. Sharon McDonald Evans</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                {COMPANY_INFO.tagline}. Empowering North Carolina Sheriffs with strategy, training, and community connection.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 border-l-4 border-gold-500 pl-3">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/retainers" className="hover:text-gold-500 transition-colors">Retainer Packages</Link></li>
                <li><Link to="/training" className="hover:text-gold-500 transition-colors">Deputy Training</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Political Strategy</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Grant Writing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-l-4 border-gold-500 pl-3">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li>NC Based, Serving Statewide</li>
                <li><a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-500">{COMPANY_INFO.email}</a></li>
                <li><Link to="/contact" className="text-gold-500 hover:text-gold-400 font-medium">Schedule a Call &rarr;</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
      <AIConsultant />
    </div>
  );
};