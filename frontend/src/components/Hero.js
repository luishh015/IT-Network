import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Cloud } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Sicherheit', 'Effizienz', 'Innovation', 'Transformation'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Kostenlose Erstberatung",
    "Individuelle Lösungen",
    "Langjährige Erfahrung"
  ];

  return (
    <section id="home" className="hero-section pt-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-green-50 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Zap size={16} className="mr-2" />
              IT-Beratung der nächsten Generation
            </motion.div>

            <h1 className="display-lg text-text-primary mb-6">
              Ihre IT-Zukunft beginnt mit{' '}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-brand-green"
              >
                {words[currentWord]}
              </motion.span>
            </h1>

            <p className="body-xl text-text-secondary mb-8 max-w-xl">
              Wir helfen Ihnen dabei, Ihre IT-Infrastruktur zu modernisieren, 
              Sicherheitslücken zu schließen und digitale Transformation erfolgreich umzusetzen.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="text-brand-green mr-3" size={20} />
                  <span className="text-text-primary">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary group"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Kostenlose Beratung
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Unsere Services
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573166364366-3f4f8b1857ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxJVCUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzUyODQ3ODcwfDA&ixlib=rb-4.1.0&q=85"
                alt="IT-Beratung Team"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-border-light"
              >
                <div className="flex items-center">
                  <Shield className="text-brand-green mr-2" size={20} />
                  <div>
                    <div className="text-sm text-text-muted">Sicherheit</div>
                    <div className="text-lg font-bold text-brand-green">99.9%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-border-light"
              >
                <div className="flex items-center">
                  <Cloud className="text-brand-orange mr-2" size={20} />
                  <div>
                    <div className="text-sm text-text-muted">Cloud Migration</div>
                    <div className="text-lg font-bold text-brand-orange">50+ Projekte</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;