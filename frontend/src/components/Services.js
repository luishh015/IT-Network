import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cloud, Zap, Rocket, ArrowRight } from 'lucide-react';
import { mockServices } from './MockData';

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const iconMap = {
    '🎯': <Zap className="text-white" size={24} />,
    '☁️': <Cloud className="text-white" size={24} />,
    '🔐': <Shield className="text-white" size={24} />,
    '🚀': <Rocket className="text-white" size={24} />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-bg-page">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="display-md text-text-primary mb-6"
          >
            Unsere IT-Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="body-xl text-text-secondary max-w-2xl mx-auto"
          >
            Von der strategischen Planung bis zur technischen Umsetzung - 
            wir bieten umfassende IT-Beratung für Ihr Unternehmen.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="design-grid"
        >
          {mockServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="design-card group"
            >
              <div className="card-icon">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-text-secondary">
                    <div className="w-2 h-2 bg-brand-green rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary group w-full"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Mehr erfahren
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;