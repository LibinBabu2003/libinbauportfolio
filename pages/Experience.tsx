
import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { GlassCard } from '../components/UI/GlassCard';

export const Experience = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Professional <span className="text-indigo-400">Journey</span>
      </motion.h2>

      <div className="relative space-y-12">
        {/* The Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-pink-500/50 to-transparent transform -translate-x-1/2 hidden md:block" />

        {RESUME_DATA.experiences.map((exp, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="flex-1 w-full">
              <GlassCard delay={index * 0.2}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <span className="text-indigo-500 mt-1.5">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            
            <div className="relative z-10 hidden md:block">
              <div className="w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </div>
            
            <div className="flex-1 hidden md:block" />
          </div>
        ))}

        {/* Education Section */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <h3 className="text-2xl font-bold mb-8 text-center text-indigo-200">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard>
              <h4 className="font-bold">B.Tech in Computer Science</h4>
              <p className="text-sm text-indigo-400">KTU | 2021 - 2025</p>
            </GlassCard>
            <GlassCard>
              <h4 className="font-bold">HSC / Class XII</h4>
              <p className="text-sm text-indigo-400">Score: 98% | 2021</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};
