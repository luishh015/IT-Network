import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Cloud, Zap, Users } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Fallstudien', href: '#case-studies' },
    { name: 'Blog', href: '#blog' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="design-header fixed top-0 left-0 right-0 z-50"
    >
      <div className="nav-container">
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold text-brand-green">
            <Zap className="inline-block mr-2" size={28} />
            ITExpert
          </div>
          <div className="hidden md:block text-sm text-text-muted">
            Ihr Partner für digitale Transformation
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex nav-menu">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Beratung anfragen
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden btn-nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg-page border-t border-border-light"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-2 text-text-link hover:text-brand-green transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Beratung anfragen
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;