import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const YetiPasswordWatcher = ({ isWatching, inputRef }) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (isWatching && inputRef?.current) {
      const updateEyePosition = () => {
        const rect = inputRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Berechne die Augenposition relativ zum Input
        const maxMovement = 8;
        const x = Math.min(Math.max((centerX - window.innerWidth / 2) / 50, -maxMovement), maxMovement);
        const y = Math.min(Math.max((centerY - window.innerHeight / 2) / 50, -maxMovement), maxMovement);
        
        setEyePosition({ x, y });
      };

      updateEyePosition();
      window.addEventListener('scroll', updateEyePosition);
      window.addEventListener('resize', updateEyePosition);
      
      return () => {
        window.removeEventListener('scroll', updateEyePosition);
        window.removeEventListener('resize', updateEyePosition);
      };
    }
  }, [isWatching, inputRef]);

  useEffect(() => {
    if (isWatching) {
      const blinkInterval = setInterval(() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }, 2000 + Math.random() * 3000);
      
      return () => clearInterval(blinkInterval);
    }
  }, [isWatching]);

  if (!isWatching) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed top-4 right-4 z-40 pointer-events-none"
    >
      <div className="relative">
        {/* Yeti Körper */}
        <motion.div
          animate={{ 
            y: [0, -2, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl"
        >
          🦣
        </motion.div>

        {/* Augen */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <motion.div
            animate={{ 
              x: eyePosition.x,
              y: eyePosition.y,
              scaleY: isBlinking ? 0.1 : 1
            }}
            transition={{ 
              duration: 0.1,
              ease: "easeOut"
            }}
            className="w-3 h-3 bg-black rounded-full"
          />
          <motion.div
            animate={{ 
              x: eyePosition.x,
              y: eyePosition.y,
              scaleY: isBlinking ? 0.1 : 1
            }}
            transition={{ 
              duration: 0.1,
              ease: "easeOut"
            }}
            className="w-3 h-3 bg-black rounded-full"
          />
        </div>

        {/* Gedankenblase */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-12 -right-8 bg-white rounded-lg p-2 shadow-lg border-2 border-gray-200"
        >
          <div className="text-xs text-gray-600">👀</div>
          <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default YetiPasswordWatcher;