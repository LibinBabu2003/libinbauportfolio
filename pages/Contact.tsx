
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/UI/GlassCard';
import { RESUME_DATA } from '../constants';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-indigo-400">Collaborate</span></h2>
          <p className="text-gray-400 text-lg mb-10">
            Open for internships, entry-level roles, or interesting AI research projects. Based in {RESUME_DATA.location}.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                <a href={`mailto:${RESUME_DATA.email}`} className="text-gray-200 hover:text-indigo-400 transition-colors">{RESUME_DATA.email}</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">LinkedIn</p>
                <a href={`https://${RESUME_DATA.linkedin}`} target="_blank" className="text-gray-200 hover:text-indigo-400 transition-colors">Libin Babu</a>
              </div>
            </div>
          </div>
        </motion.div>

        <GlassCard>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="john@example.com"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors h-32 resize-none"
                placeholder="How can I help you?"
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20"
            >
              Send Message
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};
