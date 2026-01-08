
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RESUME_DATA } from '../constants';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium"
        >
          {RESUME_DATA.role}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400"
        >
          {RESUME_DATA.name.toUpperCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transforming complex data into intelligent insights. Specializing in Deep Learning, Predictive Modeling, and AI-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
      
      {/* Decorative center element info */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
    </div>
  );
};
