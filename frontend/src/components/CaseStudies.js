import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ExternalLink, Tag } from 'lucide-react';
import { mockCaseStudies } from './MockData';

const CaseStudies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleDownload = (caseStudy) => {
    // Mock Download - in real app würde hier ein echter Download stattfinden
    console.log(`Downloading: ${caseStudy.title}`);
    alert(`Download wird gestartet: ${caseStudy.title}`);
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
    <section id="case-studies" className="py-20 bg-bg-page">
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
            Erfolgsgeschichten
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="body-xl text-text-secondary max-w-2xl mx-auto"
          >
            Entdecken Sie, wie wir anderen Unternehmen geholfen haben, 
            ihre IT-Herausforderungen zu meistern.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="design-grid"
        >
          {mockCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={itemVariants}
              className="design-card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-brand-orange px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
              </div>

              <h3 className="card-title">{caseStudy.title}</h3>
              <p className="card-description mb-6">{caseStudy.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center bg-green-50 text-brand-green px-2 py-1 rounded text-sm"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload(caseStudy)}
                  className="btn-primary flex-1 group"
                >
                  <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={16} />
                  Download PDF
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-icon"
                >
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Alle Fallstudien anzeigen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;