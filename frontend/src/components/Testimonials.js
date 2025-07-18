import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockTestimonials } from './MockData';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % mockTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + mockTestimonials.length) % mockTestimonials.length);
  };

  const currentTest = mockTestimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="display-md text-text-primary mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="body-xl text-text-secondary max-w-2xl mx-auto">
            Über 100 zufriedene Unternehmen vertrauen auf unsere IT-Expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="design-card text-center relative"
          >
            {/* Video Section */}
            <div className="relative mb-8">
              {showVideo ? (
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    src={currentTest.videoUrl}
                    title={`Testimonial von ${currentTest.name}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-brand-green to-green-600 rounded-lg flex items-center justify-center cursor-pointer group"
                     onClick={() => setShowVideo(true)}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white rounded-full p-4 shadow-lg"
                  >
                    <Play className="text-brand-green" size={32} />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(currentTest.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl text-text-primary mb-6 italic">
              "{currentTest.content}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-semibold text-text-primary">{currentTest.name}</div>
              <div className="text-text-secondary">{currentTest.position}</div>
              <div className="text-brand-green font-medium">{currentTest.company}</div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="btn-icon"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex space-x-2">
                {mockTestimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-brand-green' : 'bg-border-medium'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="btn-icon"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;