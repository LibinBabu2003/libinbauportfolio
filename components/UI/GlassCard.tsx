
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        borderColor: 'rgba(129, 140, 248, 0.7)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.7), 0 0 20px rgba(99, 102, 241, 0.15)'
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        scale: { type: "spring", stiffness: 400, damping: 25 },
        y: { type: "spring", stiffness: 400, damping: 25 },
        borderColor: { duration: 0.3 },
        backgroundColor: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className={`glass rounded-2xl p-6 md:p-8 border border-white/10 transition-colors duration-300 relative z-0 hover:z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};
