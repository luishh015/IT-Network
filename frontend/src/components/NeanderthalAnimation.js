import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeanderthalAnimation = ({ isVisible }) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setAnimationStep(prev => (prev + 1) % 3);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
        <div className="text-6xl mb-4">
          {animationStep === 0 && '🦴'}
          {animationStep === 1 && '⚡'}
          {animationStep === 2 && '😵'}
        </div>
        
        <motion.div
          animate={{ 
            scale: animationStep === 1 ? [1, 1.2, 1] : 1,
            rotate: animationStep === 2 ? [0, -5, 5, -5, 0] : 0
          }}
          transition={{ duration: 0.5 }}
          className="text-8xl mb-6"
        >
          🦍
        </motion.div>

        <motion.div
          animate={{ 
            scale: animationStep === 1 ? [1, 1.1, 1] : 1 
          }}
          transition={{ duration: 0.3 }}
          className="text-4xl mb-4"
        >
          🔌
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Kein Internet!
        </h2>
        <p className="text-gray-600 mb-4">
          Unser Neandertaler-Kollege versucht gerade, die Verbindung zu reparieren...
        </p>
        
        <div className="flex justify-center space-x-1">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            className="w-3 h-3 bg-orange-500 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            className="w-3 h-3 bg-orange-500 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            className="w-3 h-3 bg-orange-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default NeanderthalAnimation;