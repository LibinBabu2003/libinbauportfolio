
import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { GlassCard } from '../components/UI/GlassCard';

export const Projects = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of machine learning implementations and data science investigations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.projects.map((project, index) => (
          <GlassCard key={index} delay={index * 0.1} className="h-full flex flex-col">
            <div className="mb-6 h-48 rounded-xl bg-gradient-to-br from-indigo-600/20 to-pink-600/20 flex items-center justify-center border border-white/5">
               <svg className="w-16 h-16 text-indigo-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <div className="space-y-2 mb-6 flex-grow">
              {project.description.map((line, i) => (
                <p key={i} className="text-sm text-gray-400 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
