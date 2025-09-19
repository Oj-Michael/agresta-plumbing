import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  className = '' 
}) => {
  // Optimized animation variants - reduced blur for performance
  const variants = {
    hidden: {
      opacity: 0.1,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
      filter: direction === 'scale' ? 'blur(2px)' : 'blur(0px)' // Less blur for performance
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.35,
        delay,
        ease: [0.25, 0.25, 0.15, 0.25],
        type: "tween"
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px', amount: 0.3 }} // Optimized viewport settings
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
